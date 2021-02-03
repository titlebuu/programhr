import * as express from 'express';
import { Request, Response } from 'express';
import Handler from './handler';

export class RouteEmployee {
    public router = express.Router();
    private handler: Handler = new Handler();

    constructor() {
        this.router.post('/api/employee', (req: Request, res: Response) => {
            this.handler.addemp(req, res);
        });

        this.router.get('/api/employee', (req: Request, res: Response) => {
            this.handler.getemployee(req, res);
        });

        this.router.put('/api/employee/:ID_EMP', (req: Request, res: Response) => {
            this.handler.putemployee(req, res);
        });

        this.router.delete('/api/employee/:ID_EMP', (req: Request, res: Response) => {
            this.handler.deleteemployee(req, res);
        });
    }
}

