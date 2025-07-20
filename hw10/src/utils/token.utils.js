import HttpException from "./HttpException.js";

export const getToken = (header) => {
    const { authorization } = header;
    if (!authorization) throw HttpException(401, "Authorization header missing");

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") throw HttpException(401, "Bearer missing");

    return token;
};
