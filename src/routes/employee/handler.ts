import { Request, Response } from 'express';
// import { ConnectDB } from "./connectDB";
import Service from "./service";
import { AddEmployee } from './interface';

export default class Handler {
    service: Service = new Service();

    public addemp = async (req: Request, res: Response) => {
        try {
            const params: AddEmployee = req.body;
            const response = await this.service.addEmployee(params);
            debugger
            res.status(200).send(response);
        } catch (error) {
            debugger
        }
    }
    // (req.query.date1,req.query.date2)
}