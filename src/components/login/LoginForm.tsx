import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import { StyledInputHtml } from "@mui/joy/Input/Input";
import { FunctionComponent } from "react";
import { UseFormReturn } from "react-hook-form";
import { ILoginForm } from "../../types";
import { LoginFormFields, LoginFormHelperText } from "./LoginFormValidation";

interface ILoginFormProps {
  methods: UseFormReturn<ILoginForm, any>;
}

const LoginForm: FunctionComponent<ILoginFormProps> = (
  props: ILoginFormProps
) => {
  const { methods } = props;

  const { register, formState } = methods;

  return (
    <>
      <FormControl required>
        <FormLabel>Username</FormLabel>
        <Input
          {...register(LoginFormFields.Username)}
          error={!!formState.errors.username}
        />
        <FormHelperText>
          {!!!formState.errors.username
            ? LoginFormHelperText.Username
            : formState.errors.username.message}
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default LoginForm;
