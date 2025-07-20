import jwt from "jsonwebtoken";

import User from "../db/User.js";
import HttpException from "../utils/HttpException.js";

const { JWT_SECRET } = process.env;

export const authenticate = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return next(HttpException(401, "Authorization header missing"));
    }

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
        return next(HttpException(401, "Invalid authorization format"));
    }

    try {
        const { id } = jwt.verify(token, JWT_SECRET);
        const user = await User.findByPk(id);

        if (!user) {
            return next(HttpException(401, "User not found"));
        }

        req.user = user;
        next();
    } catch (error) {
        next(HttpException(401, error.message));
    }
};

export const isAdmin = (req, res, next) => {
    const { role } = req.user;

    if (role !== "admin" && role !== "superadmin") {
        return next(HttpException(403, "Access denied"));
    }

    next();
};
