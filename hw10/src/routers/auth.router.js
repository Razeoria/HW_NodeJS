import { Router } from "express";

import { loginController } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/login", loginController);

export default authRouter;
