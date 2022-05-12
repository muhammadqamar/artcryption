import { Box, Typography } from '@mui/material';
import style from './about.module.scss';

interface AboutProp {
  status: boolean;
  wallet?: string;
  label?: string;
  following?: string;
  description?: string;
}
const About: React.FC<AboutProp> = ({
  status,
  wallet,
  following,
  label,
  description,
}) => {
  return (
    <Box className={style.about_container}>
      <Box className={style.stats}>
        <Typography variant="body2">{following || 0} Following</Typography>
        <Typography variant="body2">wallet address {wallet || 'NA'}</Typography>
      </Box>
      <Box className={style.description}>
        <Box>
          <Typography variant="body1">{label} </Typography>
          <Typography variant="body1">{description || 0}</Typography>
        </Box>

        <img src="/edit.png" alt="edit" />
      </Box>

      <Box className={style.status}>
        <Typography variant="body1"><b>Status: </b></Typography>
        <Box display='flex' alignItems='center'>
          <Box className={status ?style.active : style.nonActive} />
          <Typography variant="body1">{status ? 'Active': 'Non Active'}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
