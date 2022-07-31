import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#6d6d6d",
      main: "#424242",
      dark: "#1b1b1b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fff350",
      main: "#ffc107",
      dark: "#c79100",
      contrastText: "#000",
    },
  },
});

export default theme;
