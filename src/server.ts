import App from './app';
// import * as bodyParser from 'body-parser';
import { RouteReview } from "./routes/import-sap/routes";

const config = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 4200
}

const app = new App({
    port: +config.PORT,
    controllers:[
        new RouteReview()
    ]
});

app.start();
