import { CssVarsProvider, Sheet } from "@mui/joy";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <CssVarsProvider defaultMode="dark">
      <Sheet variant="soft">
        <Outlet />
      </Sheet>
    </CssVarsProvider>
  );
};

export default Root;
