import React, { Fragment } from "react";
import { Footer } from "./Components/Footer";
import TopBar from "./Components/TopBar";
import TopMenu from "./Components/TopMenu";
import PerfectScrollbar from "react-perfect-scrollbar";
const NormalLayout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <div className="layout-wrapper">
        <TopBar />
        <TopMenu />
        <PerfectScrollbar>{children}</PerfectScrollbar>
        <Footer />
      </div>
    </Fragment>
  );
};

export default NormalLayout;
