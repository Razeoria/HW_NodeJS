import jwt from "jsonwebtoken";
import User from "../db/User.js";
import HttpException from "../utils/HttpException.js";

const { JWT_SECRET } = process.env;

export const updateUserEmail = async (id, { newEmail }) => {
    const user = await User.findByPk(id);
    if (!user) throw HttpException(404, `User with id=${id} not found`);
    if (newEmail === user.email) throw HttpException(400, "New email must be different from the current one");

    user.email = newEmail;
    await user.save();
    return user.email;
};

export const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) throw HttpException(404, `User with id=${id} not found`);

    await user.destroy();
    return true;
};

export const updateRole = async ({ id, role }) => {
    const user = await User.findByPk(id);
    if (!user) throw HttpException(404, `User with id=${id} not found`);
    if (role === user.role) throw HttpException(400, "New role must be different from the current one");

    user.role = role;
    await user.save();
    return user.role;
};

export const refreshToken = async (id) => {
    const user = await User.findByPk(id);
    if (!user) throw HttpException(404, `User with id=${id} not found`);

    const payload = { id: user.id };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
};
