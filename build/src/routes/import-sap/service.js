"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectDB_1 = require("../utils/service/connectDB");
class Service {
    constructor() {
        this.serviceMssql = new connectDB_1.ServiceMssql();
        this.getEmployee = (date1, date2) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.serviceMssql.query(`select ojc.ID_EMP,ojc.OT,CONVERT(VARCHAR(8),ojc.Date_ACC,112) 'Date_ACC',ojc.JOB_NO,
      case
        when ojc.Cost_Code = '7410' then '80102001'
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
                const response2 = yield this.serviceMssql.query(`SELECT ats_no, wbs, activity_sequence_number, description, status  FROM Activity_Sequence_Number`);
                const data = [];
                response.forEach(element => {
                    const wbs = `${element.JOB_NO}.${element.Cost_Code}`;
                    // CASE ST1
                    if (element.ST1 > 0) {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: this.report(wbs, response2),
                            Date_ACC: element.Date_ACC,
                            AttendanceType: '0800',
                            Houre: element.ST1,
                        });
                    }
                    // CASE OT1
                    if (element.OT1 > 0 && element.OT === 'Allow') {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: this.report(wbs, response2),
                            Date_ACC: element.Date_ACC,
                            AttendanceType: '0804',
                            Houre: element.OT1,
                        });
                    }
                    if (element.OT1 > 0 && element.OT === 'Full') {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: this.report(wbs, response2),
                            Date_ACC: element.Date_ACC,
                            AttendanceType: '0802',
                            Houre: element.OT1,
                        });
                    }
                    // CASE OT1.5
                    if (element.OT1_5 > 0 && element.OT === 'Allow') {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: this.report(wbs, response2),
                            Date_ACC: element.Date_ACC,
                            AttendanceType: '0804',
                            Houre: element.OT1_5,
                        });
                    }
                    if (element.OT1_5 > 0 && element.OT === 'Full') {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: this.report(wbs, response2),
                            Date_ACC: element.Date_ACC,
                            AttendanceType: '0801',
                            Houre: element.OT1_5,
                        });
                    }
                    // CASE OT2
                    if (element.OT2 > 0 && element.OT === 'Allow') {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: this.report(wbs, response2),
                            Date_ACC: element.Date_ACC,
                            AttendanceType: '0804',
                            Houre: element.OT2,
                        });
                    }
                    if (element.OT2 > 0 && element.OT === 'Full') {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: this.report(wbs, response2),
                            Date_ACC: element.Date_ACC,
                            AttendanceType: '0803',
                            Houre: element.OT2,
                        });
                    }
                    // CASE OT3
                    if (element.OT3 > 0 && element.OT === 'Allow') {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: this.report(wbs, response2),
                            Date_ACC: element.Date_ACC,
                            AttendanceType: '0804',
                            Houre: element.OT2,
                        });
                    }
                    if (element.OT3 > 0 && element.OT === 'Full') {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: this.report(wbs, response2),
                            Date_ACC: element.Date_ACC,
                            AttendanceType: '0805',
                            Houre: element.OT3,
                        });
                    }
                });
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    report(code_wbs, ActivitySequenceNumber) {
        const result = ActivitySequenceNumber.find((ele) => ele.wbs === code_wbs);
        // console.log(code_wbs + ' - ' + result); chaeck log
        if (result && result.activity_sequence_number) {
            return result.activity_sequence_number;
        }
        else {
            return 'no ' + code_wbs;
        }
        // reuturn result && result.activity_sequence_number || 'no ' + code_wbs; เขียน if อีกแบบ
    }
}
exports.default = Service;
//# sourceMappingURL=service.js.map