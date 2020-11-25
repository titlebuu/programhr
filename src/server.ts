import App from './app';
// import * as bodyParser from 'body-parser';
import { RouteReview } from "./routes/import-sap/routes";
import { RouteEmployee } from "./../src/routes/employee/routes";

const config = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 5000
}

const app = new App({
    port: +config.PORT,
    controllers:[
        new RouteReview(),
        new RouteEmployee()
    ]
});

app.start();
