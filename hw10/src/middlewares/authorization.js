import jwt from "jsonwebtoken";

import User from "../db/User.js";
import HttpException from "../utils/HttpException.js";

const { JWT_SECRET } = process.env;

export const authenticateJWT = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) throw HttpException(401, "Authorization header missing");

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") throw HttpException(401, "Bearer missing");

    try {
        const { id } = jwt.verify(token, JWT_SECRET);
        const user = await User.findByPk(id);
        if (!user) throw HttpException(404, "User not found");

        req.user = user;
        next();
    } catch (error) {
        throw HttpException(401, error.message);
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user.role !== "superadmin" && req.user.role !== "admin") {
        throw HttpException(403, "Not allowed");
    }
    next();
};
