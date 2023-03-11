import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import Main from "./components/Main/Main";

function App() {
  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            AI Cocktail
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Login or Something
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Main />
      </Container>
    </React.Fragment>
  );
}

export default App;
