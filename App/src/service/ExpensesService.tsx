import { IExpense } from "../entities/Exponse";
import { prismaClient } from "../prisma";

export class ExpensesService{
    async show_one_expense({expense_id} : IExpense){
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
            return list
        } catch (error) {
            return 'Error ao carregar as despesas'
        }
    }

    async sum_expense_Month(Month: number,Year: number){
        try {
            const dateInit = new Date(Year,Month + 1, 0)
            const dateFinaly = new Date(Year,Month + 1, 31)

            const expenses = await prismaClient.expenses.findMany({
                where: {
                    created_at: {
                        gte: dateInit,
                        lt: dateFinaly
                    }
                }
            })

            let sum = 0

            for (let i = 0; i < expenses.length; i++){
                sum += expenses[i].value
            }

            return ['Total', sum]

        } catch (error) {
            return 'Error ao carregar as soma das despesas do mês'
        }
    }

    async new_expense({bank_id, category_id, value, description, formPayment_id} : IExpense){
        try {
            const newExpense = prismaClient.expenses.create({
                data:{
                    description,
                    value,
                    created_at: new Date(),
                    bank:{
                        connect:{
                            id: bank_id
                        }
                    },
                    category: {
                        connect: {
                            id: category_id
                        }
                    },
                    formPayment: {
                        connect:{
                            id: formPayment_id
                        }
                    },
                }
            })

            if(!newExpense){
                return 'Erro ao criar despesa'
            }

            const findBank = await prismaClient.bank.findUnique({
                where:{
                    id: bank_id
                },
            })
            const updateBanck = prismaClient.bank.update({
                where:{
                    id: bank_id
                },
                data:{
                    value: findBank.value - value
                }
            }) 

            if (!updateBanck){
                return 'Erro ao descontar o saldo da despesa da contabancaria'
            }

            return 'Despesa criado com sucesso'
        

        } catch (error) {
            console.error(error)
            return 'Erro ao criar despesas'
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
}