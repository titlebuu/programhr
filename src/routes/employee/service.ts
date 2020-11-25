import { and } from "sequelize";
import { ServiceMssql } from "../utils/service/connectDB";
import { AddEmployee } from './interface';


export default class Service {
    serviceMssql: ServiceMssql = new ServiceMssql();

    public addEmployee = async (params: AddEmployee) => {
        
    }
}
