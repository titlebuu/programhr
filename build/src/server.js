"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
// import * as bodyParser from 'body-parser';
const routes_1 = require("./routes/import-sap/routes");
const config = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 5000
};
const app = new app_1.default({
    port: +config.PORT,
    controllers: [
        new routes_1.RouteReview()
    ]
});
app.start();
//# sourceMappingURL=server.js.map