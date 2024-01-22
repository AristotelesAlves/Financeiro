import Express  from "express";
import cors from 'cors';    
import { ExpensesRouter } from "./Routers/ExpensesRouter";

const app = Express();

const port = 8080

app.use(Express.json());
app.use(cors())
app.use('/expense', ExpensesRouter)

app.listen(port, ()  => console.log('Server listening on port: ' + port))