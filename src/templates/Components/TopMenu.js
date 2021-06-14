import React, { Fragment, useState } from "react";
import { Toolbar } from "primereact/toolbar";
import { useHistory } from "react-router-dom";
import { Button } from "primereact/button";
import classNames from "classnames";
// import {
//   isMobile, deviceType
// } from "react-device-detect";
import Sidebar from "./Sidebar";

const TopMenu = (props) => {
  const { isMobile } = props;
  const [sidebarActive, setSidebarActive] = useState(false);
  const history = useHistory();
  const [activeIndex, setActiveIndex] = useState(3);
  const switchPage = (index, page) => {
    setActiveIndex(index);
    history.push(`/${page}`);
  };
  console.log({ sidebarActive });
  const leftContents = (
    <React.Fragment>
      <div className="p-d-flex p-jc-between p-ac-between">
        <div className="p-text-capitalize bags-title">
          Bags warehouse & more
        </div>
      </div>
    </React.Fragment>
  );

  const mobileRight = (
    <React.Fragment>
      <i className="pi pi-bars p-toolbar-separator p-mr-1" onClick={() => setSidebarActive(!sidebarActive)} />
    </React.Fragment>
  );

  const rightContents = (
    <React.Fragment>
      <div className="p-d-flex  p-flex-wrap p-jc-between p-ai-between">
        <Button
          onClick={() => switchPage(0, "home")}
          className="p-button-text p-text-black "
          label="Home"
        />
        <Button
          onClick={() => switchPage(1, "products")}
          className="p-button-text p-text-black "
          label="Products"
        />
        <Button
          onClick={() => switchPage(2, "contact")}
          className="p-button-text p-text-black "
          label="Contact"
        />
        {/* <div className="p-inputgroup">
          <InputText placeholder="Keyword" />
          <Button icon="pi pi-search" className="p-button-warning" />
        </div> */}
      </div>
    </React.Fragment>
  );
  const sidebarClassName = classNames("layout-sidebar", {
    "active": sidebarActive === true 
  });
  return (
    <Fragment>
      {isMobile ? (
        <>
          <Toolbar
            className="app-header p-d-flex  p-flex-wrap p-jc-between"
            left={leftContents}
            right={mobileRight}
          />
          <div className={sidebarClassName}>
                <Sidebar />
              </div>
        </>
      ) : (
        <Toolbar
          style={{ borderBottom: 0 }}
          left={leftContents}
          right={rightContents}
          className="p-d-flex  p-flex-wrap p-jc-between"
        />
      )}
    </Fragment>
  );
};

export default TopMenu;
