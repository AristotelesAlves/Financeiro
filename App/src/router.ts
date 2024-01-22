import { Response, Router } from "express";

export const router = Router();

router.get('/test', (res: Response) => {
    res.json('Testado!')
})

