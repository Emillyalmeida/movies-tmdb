import theme from "../styles/theme";
import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import TmdbProvider from "./context";

interface AppProviderProp {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProp) => (
  <TmdbProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </TmdbProvider>
);

export default AppProvider;
