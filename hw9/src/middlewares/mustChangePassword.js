import HttpException from "../utils/HttpException.js";

export const mustChangePassword = (req, res, next) => {
    if (req.user?.mustChangePassword) {
        throw HttpException(401, "Password change required");
    }

    next();
};
