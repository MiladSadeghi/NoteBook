import { Box, Typography } from "@mui/material";
import { MarkdownToJSX } from "markdown-to-jsx";
import { Link } from "react-router-dom";

export const options: MarkdownToJSX.Options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        variant: "h1",
        component: "h1",
      },
    },
    h2: {
      component: Typography,
      props: { variant: "h2", component: "h2" },
    },
    h3: {
      component: Typography,
      props: { component: "h3", variant: "h3" },
    },
    h4: {
      component: Typography,
      props: {
        component: "h4",
        variant: "h4",
      },
    },
    h5: {
      component: Typography,
      props: {
        component: "h5",
        variant: "h5",
      },
    },
    h6: {
      component: Typography,
      props: {
        component: "h6",
        variant: "h6",
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    ol: {
      component: Box,
      props: {
        component: "ol",
        style: {
          paddingLeft: 0,
          listStylePosition: "inside",
        },
        sx: { [`& ::marker`]: { fontWeight: 600 } },
      },
    },
    ul: {
      component: Box,
      props: {
        component: "ul",
      },
    },
    li: {
      component: "li",
      props: {
        style: {
          marginBottom: 20,
        },
      },
    },
  },
};
