import { UniqueConstraintError, ValidationError } from "sequelize";

const errorHandler = (error, req, res, next) => {
    if (!error.status) {
        if (error instanceof UniqueConstraintError) {
            error.status = 409;
        } else if (error instanceof ValidationError) {
            error.status = 400;
        }
    }

    const { status = 500, message = "Internal Server Error" } = error;

    res.status(status).json({ message });
};

export default errorHandler;
