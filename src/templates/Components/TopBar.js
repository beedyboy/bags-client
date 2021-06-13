import React from "react";
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
      {/* <Button icon="pi pi-search" className="p-mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" /> */}

      <div className="p-text-lowercase">wishlist</div>
    </React.Fragment>
  );
  return (
    <div>
      <Toolbar className="app-header" left={leftContents} right={rightContents} />
    </div>
  );
};

export default TopBar;
