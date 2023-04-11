
import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

import HorizontalLinearStepper from "./components/HorizontalLinearStepper";


function App() {
  return (

    
    <div>
     
      <Grid container justifyContent="center" >
        <Box sx={{ bgcolor: " #dfe7ee" ,width:"80%",height:"80%" ,borderRadius: "16px"}}>
          <HorizontalLinearStepper />
        </Box>
      </Grid>
    </div>

  );
}

export default App;
