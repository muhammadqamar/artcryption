import { useState } from 'react';
import { Formik } from 'formik';
import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

import style from './allform.module.scss';

const Roles = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <Formik
      initialValues={{
        primaryRoles: [],
      }}
      validate={(values) => {
        const errors: any = {};

        if (values.primaryRoles.length) {
          errors.firstname = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }: /* and other goodies */
      any) => (
        <form onSubmit={handleSubmit} className="forms-profile">
          <Box className="formgroup">

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Primary Roles
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"

              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box className={style.tags}>
            <Typography variant="h5">Additional Roles</Typography>
            <Box className={style.taber}>
              <Typography variant="body1">Creator</Typography>
              <Typography variant="body1">Other</Typography>
            </Box>
          </Box>

          {/* <button type="submit" disabled={isSubmitting}>
              Submit
            </button> */}
        </form>
      )}
    </Formik>
  );
};

export default Roles;
