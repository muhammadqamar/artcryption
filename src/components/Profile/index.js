import { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

import Banner from './banner';
import About from './about';
import ProfileForm from './ProfileForm';
import BioFrom from './BioForm';

import style from './index.module.scss';

const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
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
          <ProfileForm />
        </TabPanel>
        <TabPanel className="p-0" value={value} index={1}>
          <BioFrom />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </>
  );
};

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

function TabPanel(props) {
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
