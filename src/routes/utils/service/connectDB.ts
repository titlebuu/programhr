import { Sequelize } from "sequelize";;
import { databaseConfig, DatabaseConfig } from "../../../../configs/database-config";


export class ServiceMssql {

    public query = async (query) => {
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
            sql.connect(databaseConfig, function (err) {
                if (err) console.log(err);
                var request = new sql.Request();
                debugger
                console.log(query);
                request.query(query, function (err, recordset) {
                    if (err) reject(err)
                    resolve(recordset);
                });
            });
        })
    }
}