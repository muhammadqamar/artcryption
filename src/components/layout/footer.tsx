import { Container, Box } from "@mui/material";
import Image from "next/image";
import styles from "./style/footer.module.scss";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Container sx={{ paddind: "15px 70px !important" }} className="container">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Image src="/facebook.svg" width={15} height={15} alt="icon" />
            <Image src="/twitter.svg" width={15} height={15} alt="icon" />
            <Image src="/Instagram.svg" width={15} height={15} alt="icon" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
