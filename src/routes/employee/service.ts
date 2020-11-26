import { and } from "sequelize";
import { ServiceMssql } from "../utils/service/connectDB";
import { AddEmployee } from './interface';


export default class Service {
    serviceMssql: ServiceMssql = new ServiceMssql();

    public addEmployee = async (params: AddEmployee) => {
        try {
            const response = await this.serviceMssql.query(`SELECT ID_EMP FROM EmployeeTable`)
            debugger
            if (response) {
                return ('This code already has')
            } else {
                this.serviceMssql.query(`INSERT INTO EmployeeTable (ID_EMP, DEPT, Gender, Name, Surname, OT)
            VALUES ('${params.ID_EMP}', '${params.DEPT}', '${params.Gender}', '${params.Name}', '${params.Surname}', '${params.OT}')`);
                return ('Success')
            }
        } catch (error) {
            throw error;
        }
    }
}
