import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      lightcyan: "hsl(193, 38%, 86%)",
      neongreen: "hsl(150, 100%, 66%)",
    },
    neutral: {
      grayishBlue: "hsl(217, 19%, 38%)",
      darkGrayishBlue: "hsl(217, 19%, 24%)",
      darkblue: "hsl(218, 23%, 16%)",
    },
  },
  fonts: ["Manrope", "sans-serif"],
  fontSizes: {
    small: "0.875em",
    large: "1.75em",
  },
};

export const Themestyle = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
