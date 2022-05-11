import React from "react";
import Footer from "./footer";
import Navbar from "./toNavbar";

const Index = ({ ...props }: any) => {
  return (
    <>
      <Navbar />
      <div {...props} />
      <Footer />
    </>
  );
};

export default Index;
