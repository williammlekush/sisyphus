import { CssVarsProvider, Sheet } from "@mui/joy";
import "./App.css";
import Home from "./components/Home";
import "@fontsource/inter";

function App() {
  return (
    <CssVarsProvider>
      <Sheet variant="outlined">
        <Home />
      </Sheet>
    </CssVarsProvider>
  );
}

export default App;
