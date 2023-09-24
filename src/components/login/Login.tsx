import { useForm } from "react-hook-form";
import LoginForm from "./LoginForm";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  LoginFormDefaultValues,
  LoginFormValidationSchema,
} from "./LoginFormValidation";
import { ILoginForm } from "../../types";

const Login = () => {
  const methods = useForm<ILoginForm>({
    mode: "all",
    resolver: yupResolver(LoginFormValidationSchema),
    defaultValues: LoginFormDefaultValues,
  });

  return <LoginForm methods={methods} />;
};

export default Login;
