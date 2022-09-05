import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      600: "#fff350",
      700: "#ffc107",
      800: "#c79100",
    },
    gray: {
      100: "#EEEEEE",
      400: "#6d6d6d",
      500: "#424242",
      700: "#1b1b1b",
      900: "#0E0E0F",
    },
    red: {
      500: "#DF1545",
    },
    green: {
      500: "#168821",
    },
  },
  fontSizes: {
    xs: "0.8rem",
    sm: "0.9rem",
    md: "1.0rem",
    lg: "1.1rem",
    xl: "1.3rem",
    "2xl": "1.5rem",
    "3xl": "1.8rem",
    "4xl": "2rem",
    "5xl": "2.5rem",
    "6xl": "3rem",
    "7x": "4.2rem",
    "8xl": "5rem",
    "9xl": "6.8rem",
    "10xl": "8rem",
  },
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    dark: {
      bg: "gray.700",
      color: "whiteAlpha.900",
    },
    light: {
      bg: "white",
      color: "gray.900",
    },
  },
});
export default theme;
