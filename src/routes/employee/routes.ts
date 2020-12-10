import * as express from 'express';
import { Request, Response } from 'express';
import Handler from './handler';

export class RouteEmployee {
    public router = express.Router();
    private handler: Handler = new Handler();

    constructor() {
        this.router.post('/api/employee', (req: Request, res: Response) => {
            this.handler.addemp(req, res);
            debugger
        });
    }
}

