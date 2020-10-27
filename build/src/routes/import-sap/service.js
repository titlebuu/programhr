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
                const response = yield this.serviceMssql.query(`select E.ID_EMP,E.OT,J.Date_ACC,J.JOB_NO,J.Cost_Code,J.ST1,J.OT1,J.OT1_5,J.OT2,J.OT3 
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
                        });
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
                        });
                    }
                    if (element.OT1 > 0 && element.OT === 'Full') {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: element.Cost_Code,
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
                            Cost_code: element.Cost_Code,
                            Date_ACC: element.Date_ACC,
                            AttendanceType: '0804',
                            Houre: element.OT1_5,
                        });
                    }
                    if (element.OT1_5 > 0 && element.OT === 'Full') {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: element.Cost_Code,
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
                            Cost_code: element.Cost_Code,
                            Date_ACC: element.Date_ACC,
                            AttendanceType: '0804',
                            Houre: element.OT2,
                        });
                    }
                    if (element.OT2 > 0 && element.OT === 'Full') {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: element.Cost_Code,
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
                            Cost_code: element.Cost_Code,
                            Date_ACC: element.Date_ACC,
                            AttendanceType: '0804',
                            Houre: element.OT2,
                        });
                    }
                    if (element.OT3 > 0 && element.OT === 'Full') {
                        data.push({
                            ID_EMP: element.ID_EMP,
                            JOB_NO: element.JOB_NO,
                            Cost_code: element.Cost_Code,
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
}
exports.default = Service;
//# sourceMappingURL=service.js.map