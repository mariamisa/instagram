import React from "react";
import PropTypes from "prop-types";
// import { Layout, Spin } from "antd";
// import Footer from "../../Components/Footer";
// import Header from "../../Components/NavBar";

// import { AuthContext } from "../../Context/Authentication";

import "./style.css";

// const { Content } = Layout;

const LayoutPage = ({ children }) => {
  // const { authLoading } = useContext(AuthContext);

  return (
    <>
      {/* {authLoading ? (
        <Spin size="large" className="loading" />
      ) : (
        <>
          <Header />
          <Content className="page">{children}</Content>
          <Footer />
        </>
      )} */}
      <h1>hi from layout page</h1>
    </>
  );
};

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPage;
