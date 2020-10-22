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
                const response = yield this.serviceMssql.query(`select AEJ.ID_EMP,AEJ.JOB_NO,AEJ.Cost_Code,CONVERT(VARCHAR(8),AEJ.Date_ACC,112) 'Date (YYYYMMDD)',AEJ.AttendanceType,AEJ.Houre
      from (select  EJ.ID_EMP,EJ.JOB_NO,EJ.Cost_Code,EJ.Date_ACC,
      CASE
         when (EJ.ST1 > 0)  then '0800'
         else null
         end as AttendanceType,EJ.ST1 as Houre
      from (select E.ID_EMP,E.OT,J.Date_ACC,J.JOB_NO,J.Cost_Code,J.ST1,J.OT1,J.OT1_5,J.OT2,J.OT3 
          from EmployeeTable E LEFT Join JOB_COST J
          ON E.ID_EMP = J.ID_EMP) EJ
      Union
      select  EJ.ID_EMP,EJ.JOB_NO,EJ.Cost_Code,EJ.Date_ACC,
      CASE
         when (EJ.OT1 > 0)and EJ.OT = 'Allow'  then '0804'
         when (EJ.OT1 > 0)and EJ.OT = 'Full'  then '0802'
         else null
         end as AttendanceType,EJ.OT1 as Houre
      from (select E.ID_EMP,E.OT,J.Date_ACC,J.JOB_NO,J.Cost_Code,J.ST1,J.OT1,J.OT1_5,J.OT2,J.OT3 
          from EmployeeTable E LEFT Join JOB_COST J
          ON E.ID_EMP = J.ID_EMP) EJ
      Union
      select  EJ.ID_EMP,EJ.JOB_NO,EJ.Cost_Code,EJ.Date_ACC,
      CASE
         when (EJ.OT1_5 > 0)and EJ.OT = 'Allow'  then '0804'
         when (EJ.OT1_5 > 0)and EJ.OT = 'Full'  then '0801'
         else null
         end as AttendanceType,EJ.OT1_5 as Houre
      from (select E.ID_EMP,E.OT,J.Date_ACC,J.JOB_NO,J.Cost_Code,J.ST1,J.OT1,J.OT1_5,J.OT2,J.OT3 
          from EmployeeTable E LEFT Join JOB_COST J
          ON E.ID_EMP = J.ID_EMP) EJ
      Union
      select  EJ.ID_EMP,EJ.JOB_NO,EJ.Cost_Code,EJ.Date_ACC,
      CASE
         when (EJ.OT2 > 0)and EJ.OT = 'Allow'  then '0804'
         when (EJ.OT2 > 0)and EJ.OT = 'Full'  then '0803'
         else null
         end as AttendanceType,EJ.OT2 as Houre
      from (select E.ID_EMP,E.OT,J.Date_ACC,J.JOB_NO,J.Cost_Code,J.ST1,J.OT1,J.OT1_5,J.OT2,J.OT3 
          from EmployeeTable E LEFT Join JOB_COST J
          ON E.ID_EMP = J.ID_EMP) EJ
      Union
      select  EJ.ID_EMP,EJ.JOB_NO,EJ.Cost_Code,EJ.Date_ACC,
      CASE
         when (EJ.OT3 > 0)and EJ.OT = 'Allow'  then '0804'
         when (EJ.OT3 > 0)and EJ.OT = 'Full'  then '0805'
         else null
         end as AttendanceType,EJ.OT2 as Houre
      from (select E.ID_EMP,E.OT,J.Date_ACC,J.JOB_NO,J.Cost_Code,J.ST1,J.OT1,J.OT1_5,J.OT2,J.OT3 
          from EmployeeTable E LEFT Join JOB_COST J
          ON E.ID_EMP = J.ID_EMP) EJ) AEJ
  where  AEJ.AttendanceType is not null and AEJ.Date_ACC between '${date1}' and '${date2}'
  ORDER BY AEJ.ID_EMP`);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = Service;
//# sourceMappingURL=service.js.map