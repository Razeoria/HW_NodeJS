import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";
import { emailValidation } from "../constants/user.constants.js";

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
        args: true,
        msg: "User with this email already exists",
        },
        validate: {
        is: {
            args: emailValidation.value,
            msg: emailValidation.message,
        },
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mustChangePassword: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user",
        validate: {
        isIn: {
            args: [["superadmin", "admin", "user"]],
            msg: "Role must be one of: superadmin, admin, user",
        },
        },
    },
});

// User.sync({ alter: true });

export default User;
