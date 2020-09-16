import * as express from 'express';
import { Request, Response } from 'express';
import Handler from './handler';

export class RouteReview {
    public router = express.Router();
    private handler: Handler = new Handler();

    constructor() {
        this.router.get('/api/listdata', (req: Request, res: Response) => {
            debugger
            this.handler.listdata(req, res);
        });
    }
}

