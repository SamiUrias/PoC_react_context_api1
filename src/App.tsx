import React from "react";
import "./App.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <React.Fragment>
    <CssBaseline />
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <Parent1 />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Parent2/></Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  </React.Fragment>
  );
}

export default App;
