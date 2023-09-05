import { Button, Container, FormControl, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const SimpleForm = () => {
  const validate = (values: any) => {
    const {username, password} = values;
    const errors: any = {};
    if (!username) {
      errors.username = 'Required';
    }

    if (!password) {
      errors.password = 'Required';
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  
  return (
    <Container sx={{ width: "30%" }}>
      <form autoComplete="off">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField 
          autoComplete="off"
          id="username" 
          label="username" 
          variant="outlined"
          value={formik.values.username}
          onChange={formik.handleChange}
           />
           <div>{formik.errors.username}</div>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField 
          autoComplete="off"
          id="password" 
          label="password"
          type="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          />
          <>{formik.errors.password}</>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <Button variant="contained">Submit</Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default SimpleForm;
