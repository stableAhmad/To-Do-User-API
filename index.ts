import express from "express";
import { userRouter } from "./routes/router";

import { Express, Request, Response } from "express";

const PORT: number = 5000;

const app: Express = express();

app.use(express.json());
app.use("/user", userRouter);

app.listen(PORT, () => {
     console.log(`the app is listening on ${PORT}`);
});

/*

API routes

/user/get/email
/user/post
/user/put

*/
