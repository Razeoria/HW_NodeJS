import jwt from "jsonwebtoken";

import * as usersService from "../services/users.service.js";
import validateBody from "../utils/validateBody.js";
import { getToken } from "../utils/token.utils.js";
import {
    updateEmailSchema,
    updateRoleSchema,
} from "../validation/users.schema.js";

const { JWT_SECRET } = process.env;

export const updateUserEmailController = async (req, res) => {
    const token = getToken(req.headers);
    const { id } = jwt.verify(token, JWT_SECRET);

    await validateBody(updateEmailSchema, req.body);

    const updatedEmail = await usersService.updateUserEmail(id, req.body);

    res.json({
        message: `Email ${updatedEmail} updated successfully`,
    });
};

export const deleteUserController = async (req, res) => {
    const token = getToken(req.headers);
    const { id } = jwt.verify(token, JWT_SECRET);

    await usersService.deleteUser(id);

    res.json({
        message: "User deleted successfully",
    });
};

export const updateRoleController = async (req, res) => {
    await validateBody(updateRoleSchema, req.body);

    const updatedRole = await usersService.updateRole(req.body);

    res.json({
        message: `User role updated to ${updatedRole}`,
    });
};

export const refreshTokenController = async (req, res) => {
    const token = getToken(req.headers);
    const { id } = jwt.verify(token, JWT_SECRET);

    const newToken = await usersService.refreshToken(id);

    res.json({ token: newToken });
};
