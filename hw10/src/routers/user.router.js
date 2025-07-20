import { Router } from "express";

import { authenticateJWT, isAdmin } from "../middlewares/authorization.js";
import {
    updateUserEmailController,
    deleteUserController,
    updateRoleController,
    refreshTokenController,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.put("/update-email", authenticateJWT, updateUserEmailController);
userRouter.delete("/delete-account", authenticateJWT, deleteUserController);

userRouter.post("/update-role", authenticateJWT, isAdmin, updateRoleController);
userRouter.get("/refresh-token", authenticateJWT, refreshTokenController);

export default userRouter;
