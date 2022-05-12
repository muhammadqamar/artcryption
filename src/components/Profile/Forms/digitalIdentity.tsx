import { Formik } from 'formik';
import { Box, TextField, Typography } from '@mui/material';

import style from './allform.module.scss';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const DigitalIdentity = () => {
  return (
    <Formik
      initialValues={{
        upload: '',
      }}
      validate={(values) => {
        const errors: any = {};

        if (!values.upload) {
          errors.upload = 'Required';
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
          <Box className="formgroup" paddingBottom={'0px !important'}>
            <TextField
              name="upload"
              label="Upload Document"
              helperText={errors.upload && touched.upload && errors.upload}
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.upload}
              placeholder="Driver License"
              focused
            />
          </Box>
         <Box className={style.confirmed}>
           <img src="/save.png" alt="" />
           <Typography variant="h5">Status: Confirmed</Typography>
          </Box>
          <Box className="formgroup" paddingBottom={'0px !important'}>
            <Typography variant="h4">Upload a new document</Typography>
          </Box>

          {/* <button type="submit" disabled={isSubmitting}>
            Submit
          </button> */}
        </form>
      )}
    </Formik>
  );
};

export default DigitalIdentity;
