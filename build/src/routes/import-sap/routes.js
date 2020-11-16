"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteReview = void 0;
const express = require("express");
const handler_1 = require("./handler");
class RouteReview {
    constructor() {
        this.router = express.Router();
        this.handler = new handler_1.default();
        this.router.get('/api/listdata', (req, res) => {
            this.handler.listdata(req, res);
        });
    }
}
exports.RouteReview = RouteReview;
//# sourceMappingURL=routes.js.map