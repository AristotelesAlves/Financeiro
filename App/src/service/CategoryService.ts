import { prismaClient } from "../prisma";

interface Icategory{
    categoryID: number;
    expenseID: number;
}

export class CategoryService{
    async connectionCategory(props:Icategory) {
        try {
            const existingCategory = await prismaClient.category.findUnique({
                where:{
                    id: props.categoryID
                }
            })

            if (!existingCategory){
                return 'Categoria não encontrada!'
            }

            const connectionCategory = await prismaClient.expenses.update({
                where: {
                    id: props.expenseID
                },
                data:{
                    category:{
                        connect:{
                            id: props.categoryID
                        }
                    }
                }
            })

            return 'Sucesso' in connectionCategory
        } catch (error) {
            
        }
    }
}