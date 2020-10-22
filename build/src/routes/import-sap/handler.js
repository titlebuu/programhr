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
// import { ConnectDB } from "./connectDB";
const service_1 = require("./service");
class Handler {
    constructor() {
        this.service = new service_1.default();
        this.listdata = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.getEmployee(req.query.date1, req.query.date2);
            res.status(200).send(response);
        });
        // (req.query.date1,req.query.date2)
    }
}
exports.default = Handler;
//# sourceMappingURL=handler.js.map