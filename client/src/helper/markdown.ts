import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        variant: 'h1',
        component: 'h1',
      },
    },
    h2: {
      component: Typography,
      props: { variant: 'h2', component: 'h2' },
    },
    h3: {
      component: Typography,
      props: { component: "h3", variant: 'h3' },
    },
    h4: {
      component: Typography,
      props: {
        component: "h4", variant: 'h4'
      },
    },
    h5: {
      component: Typography,
      props: {
        component: "h5", variant: 'h5'
      },
    },
    h6: {
      component: Typography,
      props: {
        component: "h6", variant: 'h6'
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
  },
};