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
        this.addEmployee = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.serviceMssql.query(`SELECT ID_EMP FROM EmployeeTable Where ID_EMP ='${params.ID_EMP}'`);
                debugger;
                if (response) {
                    return ('This code already has');
                }
                else {
                    this.serviceMssql.query(`INSERT INTO EmployeeTable (ID_EMP, DEPT, Gender, Name, Surname, OT)
            VALUES ('${params.ID_EMP}', '${params.DEPT}', '${params.Gender}', '${params.Name}', '${params.Surname}', '${params.OT}')`);
                    return ('Success');
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = Service;
//# sourceMappingURL=service.js.map