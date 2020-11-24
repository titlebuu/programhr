import { Sequelize } from "sequelize";;
import { databaseConfig } from "../../../../configs/database-config";


export class ServiceMssql {

    public query = async (sql) => {
        databaseConfig
        return new Promise(async (resolve, reject) => {
            var mssql = require("mssql");
            var _ = require('lodash');

            // // connect to your database
            mssql.connect(databaseConfig, function (err) {
                if (err) console.log(err);
                var request = new mssql.Request();
                console.log(sql);
                request.query(sql, function (err, recordset) {
                    if (err) reject(err)
                    if (
                        recordset &&
                        recordset.recordset &&
                        recordset.recordset.length &&
                        recordset.recordset.length > 0
                    ) {
                        resolve(recordset.recordset);
                    } else {
                        resolve([])
                    }
                });
            });



            // make sure that any items are correctly URL encoded in the connection string
            // await mssql.connect(config);
            // const result = await mssql.query`${sql}`
            // resolve(result);


        })
    }
}