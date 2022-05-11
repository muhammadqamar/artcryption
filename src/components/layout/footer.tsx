import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "./style/footer.module.scss";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Container sx={{ padding: "15px 70px !important" }} className="container">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" justifyContent="space-between" width="75px">
            <Image src="/facebook.svg" width={15} height={15} alt="icon" />
            <Image src="/twitter.svg" width={15} height={15} alt="icon" />
            <Image src="/Instagram.svg" width={15} height={15} alt="icon" />
          </Box>
          <Typography className={styles.web_lnc} variant="subtitle1">
            © 2022. ARTCRYPTION INC., All Rights Reserved
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="space-between" width="222px">
            <Link href="">
              <a className={styles.page_name}>PRESS</a>
            </Link>
            <Link href="">
              <a className={styles.page_name}>PRIVACY</a>
            </Link>
            <Link href="">
              <a className={styles.page_name}>TERMS</a>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
