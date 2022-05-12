import { Box, Typography, TextField } from '@mui/material';
import { Formik } from 'formik';
import style from './bio.module.scss';
import TableData from './exhibition'
const data = [
    {
      asset: 'Doodle #443',
      price: '0.123 ETH',
      image: '/nft1.svg',
      date: 'Nov 3, 2021   08:00 GMT',
    },
    {
      asset: 'Bored Ape',
      price: '0.323 ETH',
      image: '/nft2.svg',
      date: 'Nov 3, 2021   08:00 GMT',
    },
    {
      asset: 'Golden Ape',
      price: '0.423 ETH',
      image: '/nft3.svg',
      date: 'Nov 3, 2021   08:00 GMT',
    },
  ];
const Bio = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          bio: '',
          articleTitle: '',
          articledate: '',
          articleLink: '',
          awardsName: '',
          awardDate: '',
          awardArticleLink: '',
          link1: '',
          link2: '',
        }}
        validate={(values) => {
          const errors = {};
          //  if (!values.email) {
          //    errors.email = 'Required';
          //  }
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="forms-profile">
            <Box className={style.bioForm}>
              <Typography variant="h2">Detailed bio</Typography>
              <Box className="formgroup">
                <TextField
                  name="address"
                  label="My bio"
                  helperText={errors.bio && touched.bio && errors.bio}
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bio}
                  placeholder="Enter description"
                  focused
                />
              </Box>
            </Box>
            <Box className={style.bioForm} sx={{paddingTop: '56px'}}>
              <Typography variant="h2">Exhibition</Typography>
              <Box className={style.exhibation}>
                <TableData
                  data={data}
                />
              </Box>
            </Box>
            <Box className={style.bioForm} sx={{paddingTop: '80px'}}>
              <Typography variant="h2">Press</Typography>
              <Box className="formgroup-thrice" sx={{paddingBottom: '0px !important'}}>
                <TextField
                  name="articleTitle"
                  label="My bio"
                  helperText={
                    errors.articleTitle &&
                    touched.articleTitle &&
                    errors.articleTitle
                  }
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.articleTitle}
                  placeholder="Enter description"
                  focused
                />
                <TextField
                  name="articledate"
                  label="Date"
                  helperText={
                    errors.articledate &&
                    touched.articledate &&
                    errors.articledate
                  }
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.articledate}
                  placeholder="03-07-2021"
                  focused
                />
                <TextField
                  name="articleLink"
                  label="Article Link"
                  helperText={
                    errors.articleLink &&
                    touched.articleLink &&
                    errors.articleLink
                  }
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.articleLink}
                  placeholder="www.websitelink.com"
                  focused
                />
              </Box>
            </Box>
            <Box className={style.addarticle}>
              <img src="/nft4.svg" alt="add" />
              <Typography variant="body1">Add Article</Typography>
            </Box>
            <Box className={style.bioForm} sx={{paddingTop: '80px'}}>
              <Typography variant="h2">Awards</Typography>
              <Box className="formgroup-thrice" sx={{paddingBottom: '0px !important'}}>
                <TextField
                  name="awardsName"
                  label="Article Link"
                  helperText={
                    errors.awardsName && touched.awardsName && errors.awardsName
                  }
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.awardsName}
                  placeholder="Enter description"
                  focused
                />
                <TextField
                  name="awardDate"
                  label="Date"
                  helperText={
                    errors.awardDate && touched.awardDate && errors.awardDate
                  }
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.awardDate}
                  placeholder="Enter description"
                  focused
                />
                <TextField
                  name="awardArticleLink"
                  label="Article Link"
                  helperText={
                    errors.awardArticleLink &&
                    touched.awardArticleLink &&
                    errors.awardArticleLink
                  }
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.awardArticleLink}
                  placeholder="Enter description"
                  focused
                />
              </Box>
            </Box>
            <Box className={style.addarticle}>
              <img src="/nft4.svg" alt="add" />
              <Typography variant="body1">Add Awards</Typography>
            </Box>
            <Box className={style.bioForm} sx={{paddingTop: '80px'}}>
              <Typography variant="h2">Links (optional)</Typography>
              <Box className="formgroup-dual" sx={{paddingBottom: '0px !important'}}>
                <TextField
                  name="link1"
                  label="Link 1"
                  helperText={errors.link1 && touched.link1 && errors.link1}
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.link1}
                  placeholder="Enter description"
                  focused
                />
                <TextField
                  name="link2"
                  label="Link 2 "
                  helperText={errors.link2 && touched.link2 && errors.link2}
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.link2}
                  placeholder="Enter description"
                  focused
                />
              </Box>
            </Box>
            <Box className={style.addarticle} sx={{paddingBottom: '80px '}}>
              <img src="/nft4.svg" alt="add" />
              <Typography variant="body1">Add Links</Typography>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Bio;
