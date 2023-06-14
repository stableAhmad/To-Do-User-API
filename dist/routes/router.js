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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const User_1 = require("../models/User");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.get("/get/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, User_1.getUser)(req.params.email);
    res.send(user);
}));
userRouter.post("/post", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const result = yield (0, User_1.postUser)(req.body);
    if (result) {
        res.send("user added successfully");
    }
    else {
        res.send("request failed !");
    }
}));
userRouter.put("/put", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, User_1.updateUser)(req.body);
    if (result) {
        res.send("successful request");
    }
    res.send("request failed");
}));
