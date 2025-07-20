import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../db/User.js";
import HttpException from "../utils/HttpException.js";

const { JWT_SECRET } = process.env;

export const login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw HttpException(404, "Email not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw HttpException(401, "Invalid password");

    const payload = { id: user.id };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });

    return token;
};
