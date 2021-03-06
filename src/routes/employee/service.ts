import { and } from "sequelize";
import { ServiceMssql } from "../utils/service/connectDB";
import { AddEmployee } from './interface';


export default class Service {
    serviceMssql: ServiceMssql = new ServiceMssql();

    public addEmployee = async (params: AddEmployee) => {
        try {
            const response: any = await this.serviceMssql.query(`SELECT ID_EMP FROM EmployeeTable Where ID_EMP = '${params.ID_EMP}'`)
            if (response && response.length > 0) {
                return ({
                    resultCode: 40300,
                    message: 'This code already has'
                })
            } else {
                this.serviceMssql.query(`INSERT INTO EmployeeTable (ID_EMP, DEPT, Gender, Name, Surname, OT)
            VALUES ('${params.ID_EMP}', '${params.DEPT}', '${params.Gender}', '${params.Name}', '${params.Surname}', '${params.OT}')`);
                return ({
                    resultCode: 20000,
                    message: 'Success'
                })
            }
        } catch (error) {
            throw error;
        }
    }

    public getAll = async () => {
        return await this.serviceMssql.query(`SELECT ID_EMP, DEPT, Gender, Name, Surname, OT FROM EmployeeTable ORDER BY ID_EMP`);
    }

    public putemployee = async (params: AddEmployee['ID_EMP'], empUpdate: AddEmployee) => {
        try {
            this.serviceMssql.query(`UPDATE EmployeeTable SET DEPT ='${empUpdate.DEPT}',Gender ='${empUpdate.Gender}',Name ='${empUpdate.Name}',Surname ='${empUpdate.Surname}',OT ='${empUpdate.OT}'
            Where ID_EMP = '${params}'`);
            return ({
                resultCode: 20000,
                message: 'Success'
            })
        } catch (error) {
            throw error;
        }
    }

    public deleteemployee = async (params: AddEmployee['ID_EMP']) => {
        try {
            this.serviceMssql.query(`DELETE FROM Employeetable Where ID_EMP = '${params}'`);
            return ({
                resultCode: 20000,
                message: 'Delete Success'
            })
        } catch (error) {
            throw error;
        }
    }
}
