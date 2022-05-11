import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Box, AppBar, Toolbar, Typography } from "@mui/material";

import styles from "./style/topnav.module.scss";

const TopNavbar = () => {
  return (
    <AppBar className={styles.top_nav} position="static">
      <Container sx={{ padding: "0 !important" }} className="container">
        <Toolbar className={styles.nav_tool_bar}>
          <Box display="flex">
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Image src="/web-Logo.svg" width={36} height={52} alt="logo" />
            </Box>
            <Typography variant="h6" className={styles.logo_name}>
              artcryption
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link href="">
              <a className={styles.page_name}>How it works</a>
            </Link>
            <Link href="">
              <a className={styles.page_name}>Feed</a>
            </Link>
            <Link href="">
              <a className={styles.page_name}>Curator</a>
            </Link>
            <Link href="">
              <a className={styles.page_name}>Blog</a>
            </Link>
          </Box>
          <Box sx={{ ml: "auto", flexGrow: 0, display: "flex", alignItems: "center" }}>
            <img className={styles.search_img} src="/search.svg" alt="logo" />
            <img className={styles.notifi_img} src="/notification.svg" alt="logo" />
            <div
              className={styles.user_img}
              style={{
                backgroundImage: "url(/user.svg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <img className={styles.mobile_opener} src="/Mobile-opener.svg" alt="logo" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNavbar;
