import * as yup from "yup";

const LoginValidationSchema = {
  username: yup.string(),
  password: yup.string(),
};

export const LoginSchema = () => yup.object(LoginValidationSchema);
