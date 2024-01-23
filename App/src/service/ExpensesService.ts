import { addDays, endOfMonth, setDate, startOfMonth, subDays } from "date-fns";
import { prismaClient } from "../prisma";

interface IExpense{
    expense_id?:number;
    description: string;
    value: number;
    bank_id: number;
    category_id: number;
    formPayment_id: number;
}

export class ExpensesService{
    async show_one_expense(expense_id:number){
        try {
            const findExponse = await prismaClient.expenses.findUnique({
                where:{
                    id: expense_id
                },
                include:{
                    bank: true,
                    category: true,
                    formPayment: true
                }
            })
            if(findExponse){
                return findExponse
            }
            return
        } catch (error) {
            console.log(error)
        }
    }

    async list_expenses(){
        try {
            const list = await prismaClient.expenses.findMany()
            return ['Lista de despesas', list]
        } catch (error) {
            return 'Error ao carregar as despesas'
        }
    }

    async sum_expense_Month(month: number, year: number) {
        try {
            const date = endOfMonth(new Date(year, month, 1));
            const endDate = subDays(date, 1)
      
          const expenses = await prismaClient.expenses.findMany({
            where: {
                created_at: { 
                    gt: new Date(year, month, 0),
                    lte: new Date(endDate)
                }
            }
          })
      
          let sum = 0;
      
          for (let i = 0; i < expenses.length; i++) {
            sum += expenses[i].value;
          }
      
          return [
            {
                'Mês': endDate.getMonth() + 1,
                'Total de despesa':sum,
            }
            , expenses
        ];
          
        } catch (error) {
          console.error(error);
          return 'Erro ao carregar a soma das despesas do mês';
        }
      }

    async new_expense({ bank_id, category_id, value, description, formPayment_id }: IExpense) {
        try {
            const newExpense = await prismaClient.expenses.create({
                data: {
                    description,
                    value,
                    created_at: new Date(),
                    bank: {
                        connect: {
                            id: bank_id,
                        },
                    },
                    category: {
                        connect: {
                            id: category_id,
                        },
                    },
                    formPayment: {
                        connect: {
                            id: formPayment_id,
                        },
                    },
                },
            });
          
            if (!newExpense) {
                return 'Erro ao criar despesa';
            }
          
            const findBank = await prismaClient.bank.findUnique({
                where: {
                    id: bank_id,
                },
            });
          
            if (findBank) {
                const saldoBancario = findBank.value;
                
                const updateBanck = await prismaClient.bank.update({
                    where: {
                        id: bank_id,
                    },
                    data: {
                        value: saldoBancario - value,
                    },
                });
              
                if (!updateBanck) {
                    return 'Erro ao descontar o saldo da despesa da conta bancária';
                }
            } else {
                return 'Conta bancária não encontrada';
            }
      
          return ['Despesa criada com sucesso', newExpense];
        } catch (error) {
          console.error(error);
          return 'Erro ao criar despesa';
        }
      }

    async edit_expense({bank_id, category_id, value, description, formPayment_id, expense_id} : IExpense){
        try {
            const findExponse = await prismaClient.expenses.findUnique({
                where:{
                    id: expense_id
                }
            })

            if(findExponse){
                const update = await prismaClient.expenses.update({
                    where:{
                        id: expense_id
                    },
                    data:{
                        bank_id: bank_id,
                        category_id: category_id,
                        description: description,
                        formPayment_id: formPayment_id,
                        value: value,
                    }
                })
                return 'Atualizado com sucesso'
            }
            return 'Despesa não encontrado'
        } catch (error) {
            
        }
    }

    async pagination_expense(skip: number, take: number){
        try {
            const page = await prismaClient.expenses.findMany({
                skip,
                take,
                include:{
                    bank: true,
                    category: true,
                    formPayment: true,
                }
            })
            return page
        } catch (error) {
            console.log(error)
            return "Erro ao lista a pagina"
        }
    }

    async delete_expense(expense_id: number){
        try {
            const deleteExpense = await prismaClient.expenses.delete({
                where: {
                    id: expense_id
                }
            })
            return 'Deletado com sucesso!'
        } catch (error) {
            console.error("Erro ao deletar expense= "+error)
            return 'Erro ao deletar expense'
        }
    }
}