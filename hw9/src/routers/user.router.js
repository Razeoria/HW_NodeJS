import { Router } from "express";

import {
    addUserController,
    changeUserPasswordController,
    changeUserEmailController,
    deleteUserController,
    getAdminsController,
} from "../controllers/users.controller.js";

import { authenticate, isAdmin } from "../midllewares/authorization.js";
import { mustChangePassword } from "../midllewares/mustChangePassword.js";

const userRouter = Router();

userRouter.post("/register", addUserController);
userRouter.post("/change-password", authenticate, changeUserPasswordController);
userRouter.post("/change-email", authenticate, changeUserEmailController);
userRouter.delete("/delete-account", authenticate, mustChangePassword, deleteUserController);

userRouter.get("/admin", authenticate, mustChangePassword, isAdmin, getAdminsController);

export default userRouter;
