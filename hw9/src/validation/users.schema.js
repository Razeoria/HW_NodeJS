import * as Yup from "yup";
import { emailSchema, passwordSchema } from "./fields.schema.js";

export const addUserSchema = Yup.object({
    username: Yup.string().trim().required(),
    email: emailSchema,
    password: passwordSchema,
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);

export const changePasswordSchema = Yup.object({
    oldPassword: passwordSchema,
    newPassword: passwordSchema,
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);

export const changeEmailSchema = Yup.object({
    password: passwordSchema,
    newEmail: emailSchema,
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);

export const deleteUserSchema = Yup.object({
    password: passwordSchema,
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);
