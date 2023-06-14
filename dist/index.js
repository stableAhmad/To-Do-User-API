"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./routes/router");
const PORT = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/user", router_1.userRouter);
app.listen(PORT, () => {
    console.log(`the app is listening on ${PORT}`);
});
/*

API routes

/user/get/email
/user/post
/user/put

*/
