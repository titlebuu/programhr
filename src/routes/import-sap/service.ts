import { and } from "sequelize";
import { ServiceMssql } from "../utils/service/connectDB";
import { DateWhere } from "./interface";
import { ASN } from './interface';

interface TimeModels {
  ID_EMP: string;
  JOB_NO: string;
  Cost_code: string;
  Date_ACC: Date;
  AttendanceType: string;
  Houre: number;
}

interface TimeModelsDB {
  ID_EMP: string;
  OT: string;
  Date_ACC: Date;
  JOB_NO: string;
  Cost_Code: string;
  ST1: number;
  OT1: number;
  OT1_5: number;
  OT2: number;
  OT3: number;
}

export default class Service {
  serviceMssql: ServiceMssql = new ServiceMssql();

  public getEmployee = async (date1: DateWhere, date2: DateWhere) => {
    try {
      const response: any = await this.serviceMssql.query(`select ojc.ID_EMP,ojc.OT,CONVERT(VARCHAR(8),ojc.Date_ACC,112) 'Date_ACC',ojc.JOB_NO,
      case
        when ojc.Cost_Code = '7411' then '80102001'
        when ojc.Cost_Code = '7420' then '80102008'
        when ojc.Cost_Code = '7570' then '80102015'
        when ojc.Cost_Code = '7944' then '81000006'
        else ojc.Cost_Code
        end as Cost_Code,ojc.ST1,ojc.OT1,ojc.OT1_5,ojc.OT2,ojc.OT3
      from (select oj.ID_EMP,oj.OT,oj.Date_ACC,
          case
            when oj.JOB_NO = '10T' then 'G11200003'
            when oj.JOB_NO = '20T' then 'G11200002'
            when oj.JOB_NO = '30T' then 'G11200009'
            when oj.JOB_NO = '40T' then 'G11200006'
            when oj.JOB_NO = '51T' then 'G11200001'
            when oj.JOB_NO = '53T' then 'G11200011'
            when oj.JOB_NO = '55T' then 'G11200014'
            when oj.JOB_NO = '57T' then 'G11200013'
            when oj.JOB_NO = '58T' then 'G11200010'
            when oj.JOB_NO = '59T' then 'G11200008'
            when oj.JOB_NO = '60T' then 'G11200004'
            when oj.JOB_NO = '82T' then 'G11200012'
            when oj.JOB_NO = '85T' then 'G11200010'
            when oj.JOB_NO = '90T' then 'G11200005'
            when oj.JOB_NO = '99T' then 'G11200015'
            else oj.JOB_NO
            end as JOB_NO,oj.Cost_Code,oj.ST1,oj.OT1,oj.OT1_5,oj.OT2,oj.OT3
            from (select E.ID_EMP,E.OT,J.Date_ACC,J.JOB_NO,J.Cost_Code,J.ST1,J.OT1,J.OT1_5,J.OT2,J.OT3 
            from EmployeeTable E LEFT Join JOB_COST J ON E.ID_EMP = J.ID_EMP) oj) ojc
      where  ojc.Date_ACC between '${date1}' and '${date2}'`);
      const response2: any = await this.serviceMssql.query(`SELECT ats_no, wbs, activity_sequence_number, description, status  FROM Activity_Sequence_Number`);
      const data = [];


      // [
      //   { id: '1', name: '1' },
      //   { id: '2', name: '2' },
      // ]

      // [
      //   '1',
      //   '2',
      // ]


      response.forEach((element: TimeModelsDB) => {

        // CASE ST1
        if (element.ST1 > 0) {

          if (element.Cost_Code === '7410')
            var costCode = '80102001'
          else
            var costCode = element.Cost_Code

          data.push(this.time(element, response2, costCode, element.ST1, '0800'));
        }

        // CASE OT1
        if (element.OT1 > 0 && element.OT === 'Allow') {

          const costCode = this.check7410(element.Cost_Code)
          data.push(this.time(element, response2, costCode, element.OT1, '0804'));
        }


        if (element.OT1 > 0 && element.OT === 'Full') {

          const costCode = this.check7410(element.Cost_Code)
          data.push(this.time(element, response2, costCode, element.OT1, '0802'));
        }

        // CASE OT1.5
        if (element.OT1_5 > 0 && element.OT === 'Allow') {

          const costCode = this.check7410(element.Cost_Code)
          data.push(this.time(element, response2, costCode, element.OT1_5, '0804'));
        }

        if (element.OT1_5 > 0 && element.OT === 'Full') {

          const costCode = this.check7410(element.Cost_Code)
          data.push(this.time(element, response2, costCode, element.OT1_5, '0801'));
        }

        // CASE OT2
        if (element.OT2 > 0 && element.OT === 'Allow') {

          const costCode = this.check7410(element.Cost_Code)
          data.push(this.time(element, response2, costCode, element.OT2, '0804'));
        }

        if (element.OT2 > 0 && element.OT === 'Full') {

          const costCode = this.check7410(element.Cost_Code)
          data.push(this.time(element, response2, costCode, element.OT2, '0803'));
        }

        // CASE OT3
        if (element.OT3 > 0 && element.OT === 'Allow') {

          const costCode = this.check7410(element.Cost_Code)
          data.push(this.time(element, response2, costCode, element.OT3, '0804'));
        }

        if (element.OT3 > 0 && element.OT === 'Full') {

          const costCode = this.check7410(element.Cost_Code)
          data.push(this.time(element, response2, costCode, element.OT3, '0805'));
        }

      });

      return data;
    } catch (error) {
      throw error;
    }
  }

  check7410(costCode: string) {
    if (costCode === '7410')
      return '80102002'
    else
      return costCode
  }

  time(element: TimeModelsDB, response2: Array<ASN>, costCode: string, houre: number, codeType: string): TimeModels {
    const wbs = `${element.JOB_NO}.${costCode}`;
    return {
      ID_EMP: element.ID_EMP,
      JOB_NO: element.JOB_NO,
      Cost_code: this.report(wbs, response2),
      Date_ACC: element.Date_ACC,
      AttendanceType: codeType,
      Houre: houre,
    }
  }

  report(code_wbs: any, ActivitySequenceNumber: Array<ASN>) {
    const result = ActivitySequenceNumber.find((ele) => ele.wbs === code_wbs)
    // console.log(code_wbs + ' - ' + result); chaeck log

    if (result && result.activity_sequence_number)
      return result.activity_sequence_number;
    else
      return `no ${code_wbs}`;

    // reuturn result && result.activity_sequence_number || 'no ' + code_wbs; เขียน if อีกแบบ
  }
}

