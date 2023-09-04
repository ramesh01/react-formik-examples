import { Container, FormControl, TextField } from "@mui/material";
import React from "react";

const SimpleForm = () => {
  return (
    <Container sx={{width: '30%'}}>
      <form>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <TextField id="username" label="username" variant="outlined" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <TextField id="password" label="password" variant="outlined" />
        </FormControl>
      </form>
    </Container>
  );
};

export default SimpleForm;
