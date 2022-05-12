import { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

import Banner from './banner';
import About from './about';
import FormContainer from './formContainer';
import ProfileTab from './Forms/profileTab';
import Roles from './Forms/roles';
import Upload from './Forms/digitalIdentity';
import Team from './Forms/TeamMembers';
import SocialInforamtion from './Forms/socialInformation';

import style from './index.module.scss';

const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Banner
        name="John Cena"
        profileImg="/userprofile.svg"
        likes="3,145"
        followers="11.7"
        bannerImg=""
      />
      <About
        status={false}
        wallet="XX5550...RStu8900x"
        following="11.7"
        label="Architects of Taste: Feeding Minds and Stomachs. "
        description="An experience design and creative studio of artists, architects, chefs, designers and strategists. "
      />
      <Box className={`${style.profile_container} profile-tabs-global`}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className={style.all_tabs}
          >
            <Tab label="Profile" />
            <Tab label="dETAILED bio" />
            <Tab label="SETTINGS" />
            <Tab label="HELP" />
            <Tab label="CERTIFICATE" />
            <Tab label="MONITOR" />
          </Tabs>
        </Box>
        <TabPanel className="p-0" value={value} index={0}>
          <Box className={style.dual_form}>
            <FormContainer title="Name/Organization" width="538.73px" >
              <ProfileTab />
            </FormContainer>
            <Box width={'100%'} display="flex" flexDirection='column' alignItems="flex-end" >
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default Profile;
