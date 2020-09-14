import * as express from 'express';
import * as path from 'path';

class App {
    public app: express.Application;
    public port: number;
    public sequelize: any;

    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express();
        this.port = appInit.port;

        this.setHeader();
        this.swagger();
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.assets();
        this.template();
    }

    private setHeader(): void {
        this.app.use(function (req: express.Request, res: express.Response, next: express.next) {
            // res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000","http://www.wdcsingwee.com/","https://www.wdcsingwee.com/");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
            res.setHeader("Access-Control-Max-Age", "3600");
            res.setHeader("Access-Control-Allow-Headers", "x-requested-with");
            res.setHeader("X-Frame-Options", "ALLOW");
            next();
        });
    }

    private swagger() {
        // this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(validateBrand.getList()));
    }
    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.all("/api/*", controller.router);
        });
    }

    private assets() {
        this.app.use(express.static('public'));
        this.app.use(express.static('uploads'));
    }

    private template(): void {
        const rootPath = __dirname.split('src')[0];
        this.app.use(express.static(path.join(rootPath, "dist")));

        this.app.use('/*', (req: express.Request, res: express.Response) => {
            //     res.setHeader("Content-Type", 'text/html; charset=UTF-8');
            return res.sendFile(path.join(rootPath, "dist/index.html"));
        });
    }

    public async listen() {
        // const rootPath = __dirname.split('build')[0];
        // const options = {
        //     key: fs.readFileSync(rootPath + '/ssl/privatekey.key'),
        //     cert: fs.readFileSync(rootPath + '/ssl/ruaysombatcar_com.crt'),
        //     ca: [
        //         fs.readFileSync(rootPath + '/ssl/ruaysombatcar_com.crt'),
        //         fs.readFileSync(rootPath + '/ssl/SectigoRSADomainValidationSecureServerCA.crt'),
        //         fs.readFileSync(rootPath + '/ssl/USERTrustRSAAAACA.crt'),
        //         fs.readFileSync(rootPath + '/ssl/AAACertificateServices.crt'),
        //     ]
        //     // requestCert: true,
        //     // rejectUnauthorized: true
        // };
        // const server = https.createServer(options, this.app);
        // server.listen(this.port, () => {
        //     console.log(`App listening on the https://localhost:${this.port}`);
        // });
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }

}

export default App;
