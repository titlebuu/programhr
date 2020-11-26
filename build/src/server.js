"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const bodyParser = require("body-parser");
// import * as bodyParser from 'body-parser';
const routes_1 = require("./routes/import-sap/routes");
const routes_2 = require("./../src/routes/employee/routes");
const config = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 5000
};
const configBody = {
    limit: "50mb",
    extended: false,
    parameterLimit: 50000
};
const app = new app_1.default({
    port: +config.PORT,
    controllers: [
        new routes_1.RouteReview(),
        new routes_2.RouteEmployee()
    ],
    middleWares: [
        bodyParser.urlencoded(configBody),
        bodyParser.json({ limit: configBody.limit })
    ]
});
app.start();
//# sourceMappingURL=server.js.map