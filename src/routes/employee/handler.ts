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
            res.status(200).send(response);
        } catch (error) {
        }
    }

    public getemployee = async (req: Request, res: Response) => {
        const response2 = await this.service.getAll();
        res.status(200).send(response2);
    }
    // (req.query.date1,req.query.date2)

    public putemployee = async (req: Request, res: Response) => {
        try {
            const params: AddEmployee['ID_EMP'] = req.params.ID_EMP;
            const body: AddEmployee = req.body;
            const response = await this.service.putemployee(params, body)
            res.status(200).send(response);
        } catch (error) {

        }
    }

    public deleteemployee = async (req: Request, res: Response) => {
        try {
            const params: AddEmployee['ID_EMP'] = req.params.ID_EMP;
            const response = await this.service.deleteemployee(params)
            res.status(200).send(response);
        } catch (error) {

        }
    }
}