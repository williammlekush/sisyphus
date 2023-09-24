import { AnyObject, ObjectSchema, object, string } from "yup";
import { ILoginForm } from "../../types";

type TLoginFormValidationSchema = ObjectSchema<ILoginForm, AnyObject, any, "">;

const loginFormValidation = {
  username: string().required(),
  password: string().required(),
};

export const LoginFormValidationSchema: TLoginFormValidationSchema =
  object().shape({ ...loginFormValidation });
