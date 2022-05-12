import { Box, Typography } from '@mui/material';
import style from './formContainer.module.scss';

interface FormContainer {
  children: any;
  width?: string;
  title?: string;
}
const FormContainer: React.FC<FormContainer> = ({ children, title, width }) => {
  return (
    <Box maxWidth={width} className={style.form_container}>
      <Typography variant="h1">{title}</Typography>
      {children}
    </Box>
  );
};

export default FormContainer;
