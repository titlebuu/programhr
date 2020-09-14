import * as express from 'express';
import * as path from 'path';

class App {
    public app: express.Application;
    public port: number;
    public sequelize: any;

    constructor(appInit: { port: number; middleWares?: any; controllers: any; }) {
        this.app = express();
        this.port = appInit.port;
        this.setHeader();
        this.routes(appInit.controllers);
    }

    private setHeader(): void {
        this.app.use(function (req: express.Request, res: express.Response, next: express.next) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
            res.setHeader("Access-Control-Max-Age", "3600");
            res.setHeader("Access-Control-Allow-Headers", "x-requested-with");
            res.setHeader("X-Frame-Options", "ALLOW");
            next();
        });
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.all("*", controller.router);
        });
    }

    public async start() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }
}

export default App;
