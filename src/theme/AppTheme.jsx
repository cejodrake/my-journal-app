import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createMuiTheme } from '@material-ui/core/styles'
import { purpleTheme } from "./";


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseLine />
      {children}
    </ThemeProvider>
  );
};
