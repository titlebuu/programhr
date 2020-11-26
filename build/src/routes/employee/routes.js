"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const handler_1 = require("./handler");
class RouteEmployee {
    constructor() {
        this.router = express.Router();
        this.handler = new handler_1.default();
        this.router.post('/api/employee', (req, res) => {
            this.handler.addemp(req, res);
        });
    }
}
exports.RouteEmployee = RouteEmployee;
//# sourceMappingURL=routes.js.map