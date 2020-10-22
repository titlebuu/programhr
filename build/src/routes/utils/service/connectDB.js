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
;
const database_config_1 = require("../../../../configs/database-config");
class ServiceMssql {
    constructor() {
        this.query = (sql) => __awaiter(this, void 0, void 0, function* () {
            database_config_1.databaseConfig;
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                var mssql = require("mssql");
                var _ = require('lodash');
                // config for your database
                var config = {
                    user: 'sa1',
                    password: 'password@2',
                    server: '10.14.2.208',
                    database: 'HR_Time_Access',
                    options: {
                        encrypt: false
                    }
                };
                // // connect to your database
                mssql.connect(config, function (err) {
                    if (err)
                        console.log(err);
                    var request = new mssql.Request();
                    console.log(sql);
                    request.query(sql, function (err, recordset) {
                        if (err)
                            reject(err);
                        resolve(recordset.recordset);
                    });
                });
                // make sure that any items are correctly URL encoded in the connection string
                // await mssql.connect(config);
                // const result = await mssql.query`${sql}`
                // resolve(result);
            }));
        });
    }
}
exports.ServiceMssql = ServiceMssql;
//# sourceMappingURL=connectDB.js.map