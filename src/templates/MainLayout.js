import React, { Fragment } from "react";
import { Footer } from "./Components/Footer";
import TopBar from "./Components/TopBar";
import TopMenu from "./Components/TopMenu";
import PerfectScrollbar from "react-perfect-scrollbar";
import Sidebar from "./Components/Sidebar";
import "./responsive.css";
import { isMobile } from "react-device-detect";

import { useMediaQuery } from "react-responsive";
const MainLayout = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 799 });
  const { children } = props;
  const Mobile = ({ children }) => {
    return isMobile ? children : null;
  };

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 800 });
    return isDesktop ? children : null;
  };

  return (
    <Fragment>
      <div className="layout-wrapper">
        <PerfectScrollbar>
          {/* <div className="p-d-none  p-d-md-block" style={{ width: "100%" }}> */}
          <Desktop>
            {" "}
            <TopBar isMobile={isMobile} />
          </Desktop>

          {/* </div> */}
          <TopMenu isMobile={isMobile} />
          <div className="p-d-flex p-mb-4">
            <Desktop>
              <div className="layout-sidebar inactive p-mr-2">
                <Sidebar />
              </div>
            </Desktop>

            <div className="d-flex d-flex-column p-p-2">{children}</div>
          </div>
          <Footer />
        </PerfectScrollbar>
      </div>
    </Fragment>
  );
};

export default MainLayout;
