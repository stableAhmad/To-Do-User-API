import express from "express";

import { Router, Request, Response } from "express";
import { getUser, postUser, updateUser } from "../models/User";

const userRouter: Router = express.Router();

userRouter.get("/get/:email", async (req: Request, res: Response) => {
     const user = await getUser(req.params.email);
     res.send(user);
});

userRouter.post("/post", async (req: Request, res: Response) => {
     console.log(req.body);
     const result = await postUser(req.body);
     if (result) {
          res.send("user added successfully");
     } else {
          res.send("request failed !");
     }
});

userRouter.put("/put", async (req: Request, res: Response) => {
     const result = await updateUser(req.body);
     if (result) {
          res.send("successful request");
     }
     res.send("request failed");
});

export { userRouter };
