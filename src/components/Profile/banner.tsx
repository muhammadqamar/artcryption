import { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import style from './banner.module.scss';
interface BannerProp {
  name: string;
  profileImg?: string;
  likes?: string;
  followers?: string;
  bannerImg?: string;
}
const Banner: React.FC<BannerProp> = ({
  name,
  profileImg,
  likes,
  followers,
  bannerImg,
}) => {
  const imgUpload: any = useRef();
  return (
    <Box className={style.banner}>
      <Box className={style.bannerContainer}>
        <Box className={style.likes} display="flex" justifyContent="flex-end">
          <img src="/star-fill.svg" alt="star" />
          <Typography variant="body2">
            <b>{likes || 0}</b> likes
          </Typography>
        </Box>
        <input ref={imgUpload} type="file" title="upload banner" />
        <img
          src="/upload-cloud.svg"
          title="upload-iocn"
          className={style.upload}
          onClick={() => {
            imgUpload.current.click();
          }}
        />
        <Box className={style.heading_mobile}>
          <img
            src="/upload-cloud.svg"
            title="upload-iocn"
            onClick={() => {
              imgUpload.current.click();
            }}
          />
          <Typography variant="h2">
             {name}
            <img src="/edit.png" alt="edit" />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box className={style.avatar}>
              <img
                src={profileImg || './userProfile.svg'}
                alt="avatar"
                className={style.user_profile}
              />
              <img
                src="/upload-cloud.svg"
                title="upload-iocn"
                className={style.upload}
              />
            </Box>
            <Typography variant="h2">
              {name}
              <img src="/edit.png" alt="edit" />
            </Typography>
          </Box>
          <Typography variant="h6">{followers || 0} Followers</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
