import jwt from "jsonwebtoken";

import * as usersService from "../services/users.service.js";

import validateBody from "../utils/validateBody.js";
import HttpException from "../utils/HttpException.js";

import {
    addUserSchema,
    changeEmailSchema,
    changePasswordSchema,
    deleteUserSchema,
} from "../validation/users.schema.js";

const { JWT_SECRET } = process.env;

const getUserIdFromToken = (headers) => {
    const { authorization } = headers;
    if (!authorization) throw HttpException(401, "Authorization header missing");

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) throw HttpException(401, "Invalid token format");

    const { id } = jwt.verify(token, JWT_SECRET);
    return id;
};

export const addUserController = async (req, res) => {
    await validateBody(addUserSchema, req.body);

    const result = await usersService.addUser(req.body);

    res.status(201).json({
        message: `User with email ${result.email} added`,
    });
};

export const changeUserPasswordController = async (req, res) => {
    const id = getUserIdFromToken(req.headers);
    await validateBody(changePasswordSchema, req.body);

    const user = await usersService.changePassword(id, req.body);
    if (!user) throw HttpException(404, `User with id=${id} not found`);

    user.mustChangePassword = false;
    await user.save();

    res.json({ message: "Password changed successfully" });
};

export const changeUserEmailController = async (req, res) => {
    const id = getUserIdFromToken(req.headers);
    await validateBody(changeEmailSchema, req.body);

    const user = await usersService.changeEmail(id, req.body);
    if (!user) throw HttpException(404, `User with id=${id} not found`);

    res.json({ message: "Email changed successfully" });
};

export const deleteUserController = async (req, res) => {
    const id = getUserIdFromToken(req.headers);
    await validateBody(deleteUserSchema, req.body);

    const user = await usersService.deleteUser(id, req.body);
    if (!user) throw HttpException(404, `User with id=${id} not found`);

    res.json({ message: "User deleted successfully" });
};

export const getAdminsController = async (_req, res) => {
    const result = await usersService.getAdmins();
    res.json(result);
};
