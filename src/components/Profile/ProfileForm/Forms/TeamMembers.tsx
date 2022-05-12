import { useState } from 'react';
import { Formik } from 'formik';
import {
  Box,

} from '@mui/material';

import style from './allform.module.scss';

const Team = () => {
  return (
    <Formik
      initialValues={{
        users: [],
      }}
      validate={(values) => {
        const errors: any = {};

        if (values.users.length) {
          errors.users = 'Required';
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
          <Box className={style.allTeam}>
            <Box className={style.team}>
              <img src="/avatar1.png" alt="" />
              <img src="/avatar2.png" alt="" />
              <img src="/avatar3.png" alt="" />
              <Box className={style.uploadImage}>
              <img src="/+.png" alt="" />
              </Box>
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

export default Team;
