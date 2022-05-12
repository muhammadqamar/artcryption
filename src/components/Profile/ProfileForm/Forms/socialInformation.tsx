import { Formik } from 'formik';
import { Box, Typography, TextField } from '@mui/material';

import style from './allform.module.scss';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const SocialInforamtion = () => {
  return (
    <Formik
      initialValues={{
        website: '',
        facebook: '',
        instagram: '',
        twitter: '',
      }}
      validate={(values) => {
        const errors: any = {};

        // if (!values.upload) {
        //   errors.upload = 'Required';
        // }
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
            <TextField
              name="website"
              label="Website"
              helperText={errors.website && touched.website && errors.website}
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.website}
              placeholder="www.website.com"
              focused
            />
          </Box>
          <Box className="formgroup">
            <label className={style.label}>Facebook</label>
            <input
              name="website"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.upload}
              placeholder="www.yourwebsite.com"
              className={style.standalone}
            />
          </Box>
          <Box className="error">
            {errors.upload && touched.upload && errors.upload}
          </Box>
          <Box className="formgroup">
            <label className={style.label}>Instagram</label>
            <input
              name="website"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.upload}
              placeholder="www.yourwebsite.com"
              className={style.standalone}
            />
          </Box>
          <Box className="error">
            {errors.upload && touched.upload && errors.upload}
          </Box>
          <Box className="formgroup">
            <label className={style.label}>Twitter</label>
            <input
              name="website"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.upload}
              placeholder="www.yourwebsite.com"
              className={style.standalone}
            />
          </Box>
          <Box className="error">
            {errors.upload && touched.upload && errors.upload}
          </Box>

          {/* <button type="submit" disabled={isSubmitting}>
            Submit
          </button> */}
        </form>
      )}
    </Formik>
  );
};

export default SocialInforamtion;
