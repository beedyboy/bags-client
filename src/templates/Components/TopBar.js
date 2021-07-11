import React, { Fragment } from "react";
import { Toolbar } from "primereact/toolbar";
 
const TopBar = () => {
  const leftContents = (
    <React.Fragment>
      <i className="pi pi-envelope p-toolbar-separator p-mr-1" />
      <div className="p-text-lowercase">bagswarehouse@yahoo.com</div>
      <i className="pi pi-phone p-toolbar-separator p-mr-1" />
      <div className="p-text-lowercase">+ (234) 8181575752</div>
    </React.Fragment>
  );
  const rightContents = (
    <React.Fragment>
      {/* <div className="p-d-flex p-jc-between p-ac-between"> */}
        <a target="_blank" href="/facebook">
          {" "}
          <i className="fa fa-facebook fa-fw" />
        </a>
        <a target="_blank" href="/twitter">
          {" "}
          <i className="fa fa-twitter fa-fw" />
        </a>
        <a target="_blank" href="/twitter">
          {" "}
          <i className="fa fa-instagram fa-fw" />
        </a>
      {/* </div> */}
    </React.Fragment>
  );
  return (
    <Fragment>
      <Toolbar
            className="app-header p-d-flex  p-flex-wrap p-jc-between"
        left={leftContents}
        right={rightContents}
      />
    </Fragment>
  );
};

export default TopBar;
