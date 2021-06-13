import React, { Fragment, useState } from "react";
import { Toolbar } from "primereact/toolbar";
import { Link } from "react-router-dom"; 
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext"; 

const TopMenu = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const leftContents = (
    <React.Fragment>
      <div className="p-text-capitalize bags-title">Bags warehouse & more</div>
    </React.Fragment>
  );

  const rightContents = (
    <React.Fragment>
      {/* <Button icon="pi pi-search" className="p-mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" /> */}
     {/* <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} /> */}
     <div className="p-d-flex ">
                    <Button onClick={() => setActiveIndex(0)} className="p-button-text" label="Home" />
                    <Button onClick={() => setActiveIndex(1)} className="p-button-text" label="Products" />
                    <Button onClick={() => setActiveIndex(2)} className="p-button-text" label="Contact" />
                </div>
      <div className="p-inputgroup">
        <InputText placeholder="Keyword" />
        <Button icon="pi pi-search" className="p-button-warning" />
      </div>
    </React.Fragment>
  );
  return (
    <Fragment>
      <Toolbar
        style={{ borderBottom: 0 }}
        left={leftContents}
        right={rightContents}
      />
    </Fragment>
  );
};

export default TopMenu;
