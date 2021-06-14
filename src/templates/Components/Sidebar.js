import React, { Fragment } from "react"; 
import { Accordion, AccordionTab } from 'primereact/accordion';
import { PanelMenu } from "primereact/panelmenu";

const Sidebar = () => {
  const items = [
    {
      label: "File",
      items: [
        {
          label: "New",
          items: [
            {
              label: "Bookmark",
            },
            {
              label: "Video",
            },
          ],
        },
        {
          label: "Delete",
        },
        {
          label: "Export",
        },
      ],
    },
    {
      label: "Edit",
      items: [
        {
          label: "Left",
        },
        {
          label: "Right",
        },
        {
          label: "Center",
        },
      ],
    },
  ];
  return (
    <Fragment>
      {/* <PanelMenu model={items} style={{ width: "22rem" }} />
       */}
       <Accordion>
           
       </Accordion>
    </Fragment>
  );
};

export default Sidebar;
