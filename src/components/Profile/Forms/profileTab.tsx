import { Formik } from 'formik';
import { Box, TextField, Typography } from '@mui/material';

import style from './allform.module.scss';


const ProfileTab = () => {
  return (

      <Formik
        initialValues={{
          email: '',
          firstname: '',
          lastname: '',
          pseudonym: '',
          password: '',
          address: '',
          country: '',
          postal: '',
          city: '',
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.firstname) {
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
            <Box className="formgroup-dual">
              <TextField
                name="firstname"
                label="First Name"
                helperText={
                  errors.firstname && touched.firstname && errors.firstname
                }
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
                placeholder="Your first name"
                focused
              />
              <TextField
                name="lastname"
                label="Last Name"
                helperText={
                  errors.lastname && touched.lastname && errors.lastname
                }
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
                placeholder="Your last name"
                focused
              />
            </Box>
            <Box className="formgroup">
              <TextField
                name="pseudonym"
                label="Pseudonym"
                helperText={
                  errors.Pseudonym && touched.Pseudonym && errors.Pseudonym
                }
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Pseudonym}
                placeholder="Your Pseudonym"
                focused
              />
            </Box>
            <Box className="formgroup-dual">
              <TextField
                name="email"
                label="Email"
                helperText={errors.email && touched.email && errors.email}
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="sample@mail.com"
                focused
              />
              <TextField
                name="password"
                label="Password"
                helperText={
                  errors.password && touched.password && errors.password
                }
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="******"
                focused
              />
            </Box>
            <Box className="formgroup">
              <Typography variant="h4">Change your password</Typography>
            </Box>
            <Box className="formgroup">
              <TextField
                name="address"
                label="Address"
                helperText={errors.address && touched.address && errors.address}
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                placeholder="Street Name"
                focused
              />
            </Box>
            <Box className="formgroup-dual">
              <TextField
                name="city"
                label="City"
                helperText={errors.city && touched.city && errors.city}
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                placeholder="Your City"
                focused
              />
              <TextField
                name="country"
                label="Country"
                helperText={errors.country && touched.country && errors.country}
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
                placeholder="Your country"
                focused
              />
            </Box>
            <Box className="formgroup">
              <TextField
                name="postal"
                label="Postal Code"
                helperText={errors.postal && touched.postal && errors.postal}
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postal}
                placeholder="Your Postal Code"
                focused
              />
            </Box>

            {/* <button type="submit" disabled={isSubmitting}>
              Submit
            </button> */}
          </form>
        )}
      </Formik>

  );
};

export default ProfileTab;
