import * as Yup from "yup";

import { emailSchema, roleSchema, idSchema } from "./fields.schema.js";

export const updateEmailSchema = Yup.object({
    newEmail: emailSchema,
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);

export const updateRoleSchema = Yup.object({
    id: idSchema,
    role: roleSchema,
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);
