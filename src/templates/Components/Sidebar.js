import React, { Fragment } from "react";
import { PanelMenu } from "primereact/panelmenu";
import categories from "../../engine/categories.json";
import { Ripple } from "primereact/ripple";
import classNames from "classnames";

const Sidebar = (props) => {
  const { data } = props; 
  const menuSubCategory = (slug) => {
    let items = [];
    const subs = data.filter((a) => a.category === slug);
    if (subs.length === 0) return;
    subs.map((item) => {
      const d = {
        label: item.name,
        command: () => {
          window.location.hash = `/sub-category/${slug}`;
        },
      };
      items.push(d);
    });
    return items;
  };

  const MenuGroup = () => {
    let items = [];
    categories &&
      categories.data.map((item) => {
        const sub = menuSubCategory(item.value);
        const d = {
          label: item.label,
          ...(sub && sub.length > 0
            ? {
                template: (item, options) => {
                  const toggleIcon = options.active
                    ? "pi pi-minus"
                    : "pi pi-plus";
                  const className = `${options.className}`;
                  const titleClassName = `${options.labelClassName}`;
                  return (
                    /* custom element */
                    <a href="#" className={className}  onClick={options.onClick}>
                      <span className={titleClassName}>{item.label}</span>
                      <span
                        className={classNames(
                          options.iconClassName, 'p-pl-2',
                          toggleIcon
                        )}
                        onClick={options.onClick}
                      >
                        {/* <span className={toggleIcon}></span> */}
                        <Ripple />
                      </span>
                    </a>
                  );
                },
                items: sub,
              }
            : {
                command: () => {
                  window.location.hash = `/category/${item.value}`;
                },
              }),
        };
        items.push(d);
      });
    return items;
  };
  return (
    <Fragment>
      <PanelMenu
        model={MenuGroup()}
        expandIcon="pi pi-chevron-right"
        collapseIcon="pi pi-chevron-down"
        // style={{ width: "22rem" }}
        iconPos="right"
        className="p-text-capitalize"
      />

     
    </Fragment>
  );
};

export default Sidebar;
