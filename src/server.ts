import App from './app';
import * as bodyParser from 'body-parser';
// import loggerMiddleware from './middleware/logger'

// CONTROLLERS




// SET DEFAULT CONFIG
const config = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 4200
}

const configBody = {
    limit: "50mb",
    extended: false,
    parameterLimit: 50000
}

const app = new App({
    port: +config.PORT,
    controllers: [
      
    ],
    middleWares: [
        bodyParser.urlencoded(configBody),
        bodyParser.json({ limit: configBody.limit })
    ]
});

app.listen();
