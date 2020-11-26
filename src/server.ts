import App from './app';
import * as bodyParser from 'body-parser';
// import * as bodyParser from 'body-parser';
import { RouteReview } from "./routes/import-sap/routes";
import { RouteEmployee } from "./../src/routes/employee/routes";

const config = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 5000
}
const configBody = {
    limit: "50mb",
    extended: false,
    parameterLimit: 50000
}
const app = new App({
    port: +config.PORT,
    controllers: [
        new RouteReview(),
        new RouteEmployee()
    ],
    middleWares: [
        bodyParser.urlencoded(configBody),
        bodyParser.json({ limit: configBody.limit })
    ]
});

app.start();
