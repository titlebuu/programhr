import { Sequelize } from "sequelize";;
import { databaseConfig, DatabaseConfig } from "../../../../configs/database-config";

export class ConnectDB {

    public connections = async () => {
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

                if (err) console.log(err);

                // create Request object
                var request = new sql.Request();
                resolve(request)
                // query to the database and get the records
                // request.query('select * from EmployeeTable', function (err, recordset) {

                //     if (err) console.log(err)

                //     // send records as a response
                //     resolve(recordset);
                // });
            });
        })
    }
}