import { Box } from '@mui/material';
import style from './formContainer.module.scss';
import FormContainer from './formContainer';
import ProfileTab from './Forms/profileTab';
import Roles from './Forms/roles';
import Team from './Forms/TeamMembers';
import SocialInforamtion from './Forms/socialInformation';
import Upload from './Forms/digitalIdentity';

const ProfileForm = () => {
  return (
    <>
      <Box className={style.dual_form}>
        <FormContainer title="Name/Organization" width="538.73px">
          <ProfileTab />
        </FormContainer>
        <Box
          width={'100%'}
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
        >
          <FormContainer title="Digital Identity" width="313px">
            <Upload />
          </FormContainer>
          <FormContainer title="Roles" width="313px">
            <Roles />
          </FormContainer>
        </Box>
      </Box>
      <FormContainer title="Social Information">
        <SocialInforamtion />
      </FormContainer>
      <FormContainer title="Team Members">
        <Team />
      </FormContainer>
    </>
  );
};

export default ProfileForm;
