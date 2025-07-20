import * as Yup from "yup";
import { emailSchema, passwordSchema } from "./fields.schema.js";

export const loginSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
});
