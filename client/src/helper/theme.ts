import { createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: '"Noto Sans", Roboto, Helvetica Neue, Arial',
    fontWeightThin: 100,
    fontWeightExtraLight: 200,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    fontWeightBlack: 900,
    h1: {
      fontSize: "27px",
      lineHeight: "140%",
      fontWeight: "600"
    },
    h2: {
      fontSize: "24px",
      lineHeight: "140%",
      fontWeight: "600"
    },
    h3: {
      fontSize: "21px",
      lineHeight: "140%",
      fontWeight: "600"
    },
    h4: {
      fontSize: "19px",
      lineHeight: "140%",
      fontWeight: "600"
    },
    h5: {
      fontSize: "17px",
      lineHeight: "150%",
      fontWeight: "500"
    },
    h6: {
      fontSize: "15px",
      lineHeight: "150%",
      fontWeight: "500"
    },
  },
  direction: "rtl",
});

export default theme;