/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useContext, useEffect } from "react";
import { Footer } from "./Components/Footer";
import TopBar from "./Components/TopBar";
import TopMenu from "./Components/TopMenu";
import PerfectScrollbar from "react-perfect-scrollbar";
import Sidebar from "./Components/Sidebar";
import "./responsive.css";
import SubCategoryStore from "../store/SubCategoryStore";
import { observer } from "mobx-react-lite";

import { useMediaQuery } from "react-responsive";
const MainLayout = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 799 });
  const { children } = props;
  const catStore = useContext(SubCategoryStore);
  const { getSubCategories, subcategory } = catStore;
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 800 });
    return isDesktop ? children : null;
  };

  useEffect(() => {
    getSubCategories();
  }, []);
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
          <TopMenu isMobile={isMobile} data={subcategory} />
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

export default observer(MainLayout);
