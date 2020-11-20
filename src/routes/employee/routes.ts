import * as express from 'express';
import { Request, Response } from 'express';
import Handler from './handler';

export class RouteReview {
    public router = express.Router();
    private handler: Handler = new Handler();

    constructor() {
        this.router.post('/api/addemployee', (req: Request, res: Response) => {
            this.handler.listdata(req, res);
        });
    }
}

