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
      <div className="p-d-flex p-jc-between p-ac-between">
        <a target="_blank" href="/facebook">
          {" "}
          <i className="pi pi-facebook" />
        </a>
        <a target="_blank" href="/twitter">
          {" "}
          <i className="pi pi-twitter" />
        </a>
      </div>
    </React.Fragment>
  );
  return (
    <Fragment>
      <Toolbar
        className="app-header"
        left={leftContents}
        right={rightContents}
      />
    </Fragment>
  );
};

export default TopBar;
