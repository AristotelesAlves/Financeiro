import { Request, Response } from "express";
import { ExpensesService } from "../service/ExpensesService";

export class ExpensesController{
    async show_one_expense(req: Request,res: Response){
        try {
            const {id} = req.params;
            const expense_id = Number(id);
            const service = new ExpensesService();
            const result = await service.show_one_expense(expense_id);
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    }

    async list_expenses(req: Request, res: Response) {
        try {
            const service = new ExpensesService();
            const result = await service.list_expenses();
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    }

    async sum_expense_Month(req: Request, res: Response) {
        const {month, year} = req.params;
        const service = new ExpensesService();
        const result = await service.sum_expense_Month(Number(month), Number(year));
        res.json(result);
    }

    async new_expense(req: Request, res: Response){
        try {
            const {bank_id, category_id, value, description, formPayment_id} = req.body;
            const service = new ExpensesService();
            const result = await service.new_expense({bank_id, category_id, value, description, formPayment_id})
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    }

    async edit_expense(req: Request, res: Response){
        try {
            const {bank_id, category_id, value, description, formPayment_id, expense_id} = req.body;
            const service = new ExpensesService();
            const result = await service.edit_expense({bank_id, category_id, value, description, formPayment_id, expense_id});
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    }

    async pagination_expense(req: Request, res: Response){
        try {
            const {skip,take} = req.params;
            const service = new ExpensesService();
            const result = await service.pagination_expense(Number(skip),Number(take))
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor" }); 
        }
    }

    async delete_expense(req: Request, res: Response){
        try {
            const {id} = req.params;
            const expense_id = Number(id)
            const service = new ExpensesService();
            const result = await service.delete_expense(expense_id);
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor" }); 
        }
    }
}