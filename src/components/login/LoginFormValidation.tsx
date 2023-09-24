import { AnyObject, ObjectSchema, object, string } from "yup";
import { ILoginForm } from "../../types";

type TLoginFormValidationSchema = ObjectSchema<ILoginForm, AnyObject, any, "">;

const loginFormValidation = {
  username: string().required(),
  password: string().required(),
};

export const LoginFormValidationSchema: TLoginFormValidationSchema =
  object().shape({ ...loginFormValidation });

export const LoginFormDefaultValues: ILoginForm = {
  username: "",
  password: "",
};

export enum LoginFormFields {
  Username = "username",
  Password = "password",
}

export enum LoginFormHelperText {
  Username = "Enter a username",
  Password = "Enter a password",
}
