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
const sequelize_1 = require("sequelize");
;
class ConnectDB {
    constructor() {
        this.sequelize = new sequelize_1.Sequelize('HR_Time_Access', 'sa1', 'password@2', {
            host: '10.14.2.224',
            dialect: 'mssql',
            operatorsAliases: false,
            dialectOptions: {
                "requestTimeout": 30000,
                "useUTC": false,
                "dateStrings": true,
                "typeCast": true
            }
        });
        this.connections = () => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sql = require("mssql");
                // config for your database
                var config = {
                    user: 'sa1',
                    password: 'password@2',
                    server: '10.14.2.224',
                    database: 'HR_Time_Access',
                    options: {
                        encrypt: false
                    }
                };
                // connect to your database
                sql.connect(config, function (err) {
                    if (err)
                        console.log(err);
                    // create Request object
                    var request = new sql.Request();
                    resolve(request);
                    // query to the database and get the records
                    // request.query('select * from EmployeeTable', function (err, recordset) {
                    //     if (err) console.log(err)
                    //     // send records as a response
                    //     resolve(recordset);
                    // });
                });
            });
        });
    }
}
exports.ConnectDB = ConnectDB;
//# sourceMappingURL=connectDB.js.map