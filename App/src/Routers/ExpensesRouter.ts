// expensesRoutes.js
import express, { Router } from 'express';
import { ExpensesController } from '../controller/ExpensesController';


const ExpensesRouter = Router();
const expensesController = new ExpensesController();

ExpensesRouter.get('/:id', expensesController.show_one_expense);
ExpensesRouter.get('/list', expensesController.list_expenses);
ExpensesRouter.get('/sum/:month/:year', expensesController.sum_expense_Month);
ExpensesRouter.post('/new', expensesController.new_expense);
ExpensesRouter.put('/edit', expensesController.edit_expense);
ExpensesRouter.get('/pagination/:skip/:take', expensesController.pagination_expense);
ExpensesRouter.delete('/:id', expensesController.delete_expense);

export {ExpensesRouter};
