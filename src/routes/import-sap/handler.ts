import { Request, Response } from 'express';
// import { ConnectDB } from "./connectDB";
import Service from "./service";

export default class Handler {
    service: Service = new Service();

    public listdata = async (req: Request, res: Response) => {
        const response = await this.service.getEmployee();
        res.status(200).send(response);
    }
    // (req.query.date1,req.query.date2)
}