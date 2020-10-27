import { and } from "sequelize";
import { ServiceMssql } from "../utils/service/connectDB";
import { DateWhere } from "./interface";

export default class Service {
  serviceMssql: ServiceMssql = new ServiceMssql();

  public getEmployee = async (date1: DateWhere, date2: DateWhere) => {
    try {
      const response: any = await this.serviceMssql.query(`select E.ID_EMP,E.OT,J.Date_ACC,J.JOB_NO,J.Cost_Code,J.ST1,J.OT1,J.OT1_5,J.OT2,J.OT3 
      from EmployeeTable E LEFT Join JOB_COST J
      ON E.ID_EMP = J.ID_EMP
      where  J.Date_ACC between '${date1}' and '${date2}'`);
      const data = [];
      response.forEach(element => {


        // CASE ST1
        if (element.ST1 > 0) {
          data.push({
            ID_EMP: element.ID_EMP,
            JOB_NO: element.JOB_NO,
            Cost_code: element.Cost_Code,
            Date_ACC: element.Date_ACC,
            AttendanceType: '0800',
            Houre: element.ST1,
          })
        }
        // CASE OT1
        if (element.OT1 > 0 && element.OT === 'Allow') {
          data.push({
            ID_EMP: element.ID_EMP,
            JOB_NO: element.JOB_NO,
            Cost_code: element.Cost_Code,
            Date_ACC: element.Date_ACC,
            AttendanceType: '0804',
            Houre: element.OT1,
          })
        }

        if (element.OT1 > 0 && element.OT === 'Full') {
          data.push({
            ID_EMP: element.ID_EMP,
            JOB_NO: element.JOB_NO,
            Cost_code: element.Cost_Code,
            Date_ACC: element.Date_ACC,
            AttendanceType: '0802',
            Houre: element.OT1,
          })
        }

        // CASE OT1.5
        if (element.OT1_5 > 0 && element.OT === 'Allow') {
          data.push({
            ID_EMP: element.ID_EMP,
            JOB_NO: element.JOB_NO,
            Cost_code: element.Cost_Code,
            Date_ACC: element.Date_ACC,
            AttendanceType: '0804',
            Houre: element.OT1_5,
          })
        }

        if (element.OT1_5 > 0 && element.OT === 'Full') {
          data.push({
            ID_EMP: element.ID_EMP,
            JOB_NO: element.JOB_NO,
            Cost_code: element.Cost_Code,
            Date_ACC: element.Date_ACC,
            AttendanceType: '0801',
            Houre: element.OT1_5,
          })
        }

        // CASE OT2
        if (element.OT2 > 0 && element.OT === 'Allow') {
          data.push({
            ID_EMP: element.ID_EMP,
            JOB_NO: element.JOB_NO,
            Cost_code: element.Cost_Code,
            Date_ACC: element.Date_ACC,
            AttendanceType: '0804',
            Houre: element.OT2,
          })
        }

        if (element.OT2 > 0 && element.OT === 'Full') {
          data.push({
            ID_EMP: element.ID_EMP,
            JOB_NO: element.JOB_NO,
            Cost_code: element.Cost_Code,
            Date_ACC: element.Date_ACC,
            AttendanceType: '0803',
            Houre: element.OT2,
          })
        }

        // CASE OT3
        if (element.OT3 > 0 && element.OT === 'Allow') {
          data.push({
            ID_EMP: element.ID_EMP,
            JOB_NO: element.JOB_NO,
            Cost_code: element.Cost_Code,
            Date_ACC: element.Date_ACC,
            AttendanceType: '0804',
            Houre: element.OT2,
          })
        }

        if (element.OT3 > 0 && element.OT === 'Full') {
          data.push({
            ID_EMP: element.ID_EMP,
            JOB_NO: element.JOB_NO,
            Cost_code: element.Cost_Code,
            Date_ACC: element.Date_ACC,
            AttendanceType: '0805',
            Houre: element.OT3,
          })
        }

      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

