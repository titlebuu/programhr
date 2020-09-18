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
exports.ServiceMssql = void 0;
;
const database_config_1 = require("../../../../configs/database-config");
class ServiceMssql {
    constructor() {
        this.query = (query) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sql = require("mssql");
                // config for your database
                // var config = {
                //     user: 'sa1',
                //     password: 'password@2',
                //     server: 'PTF-SIRANEE',
                //     database: 'HR_Time_Access',
                //     options: {
                //         encrypt: false
                //     }
                // };
                // connect to your database
                sql.connect(database_config_1.databaseConfig, function (err) {
                    if (err)
                        console.log(err);
                    var request = new sql.Request();
                    debugger;
                    console.log(query);
                    request.query(query, function (err, recordset) {
                        if (err)
                            reject(err);
                        resolve(recordset);
                    });
                });
            });
        });
    }
}
exports.ServiceMssql = ServiceMssql;
//# sourceMappingURL=connectDB.js.map