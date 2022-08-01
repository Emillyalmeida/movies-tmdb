import theme from "../styles/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "@material-ui/core";
import TmdbProvider from "./context";

interface AppProviderProp {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProp) => (
  <TmdbProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </TmdbProvider>
);

export default AppProvider;
