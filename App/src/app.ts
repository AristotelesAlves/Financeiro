import Express  from "express";
import cors from 'cors';
import { router } from "./router";

const app = Express();

const port = 4444

app.use(Express.json());
app.use(cors())
app.use(router)
app.listen(port, ()  => console.log('Server listening on port: ' + port))