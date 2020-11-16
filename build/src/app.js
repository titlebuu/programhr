"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class App {
    constructor(appInit) {
        this.app = express();
        this.port = appInit.port;
        this.setHeader();
        this.routes(appInit.controllers);
        this.template();
    }
    setHeader() {
        this.app.use(function (req, res, next) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
            res.setHeader("Access-Control-Max-Age", "3600");
            res.setHeader("Access-Control-Allow-Headers", "x-requested-with");
            res.setHeader("X-Frame-Options", "ALLOW");
            next();
        });
    }
    routes(controllers) {
        controllers.forEach(controller => {
            this.app.all("*", controller.router);
        });
    }
    template() {
        const rootPath = __dirname.split('src')[0];
        this.app.use(express.static(path.join(rootPath, "dist")));
        this.app.use('/*', (req, res) => {
            //     res.setHeader("Content-Type", 'text/html; charset=UTF-8');
            return res.sendFile(path.join(rootPath, "dist/index.html"));
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.listen(this.port, () => {
                console.log(`App listening on the http://localhost:${this.port}`);
            });
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map