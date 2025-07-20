import * as Yup from "yup";
import { emailValidation, passwordValidation } from "../constants/user.constants.js";

export const passwordSchema = Yup.string()
    .trim()
    .matches(passwordValidation.value, passwordValidation.message)
    .required();

export const emailSchema = Yup.string()
    .trim()
    .matches(emailValidation.value, emailValidation.message)
    .required();
