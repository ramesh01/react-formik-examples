import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import { Container, Box, Typography } from "@mui/material";

function App() {
  return (
    <Box className="formik-form-examples-container" sx={{p: 4, backgroundColor: '#eeecfc2b'}}>
      <Container fixed>
        <Typography variant="h5" sx={{textAlign: 'center'}}>Simple Form</Typography>
        <div className="App">
          <SimpleForm />
        </div>
      </Container>
      <Container fixed sx={{mt: 6}}>
        <div className="App">
          {/* <SimpleForm /> */}
        </div>
      </Container>
    </Box>
  );
}

export default App;
