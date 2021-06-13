import React, { Fragment } from 'react';
import TopBar from './Components/TopBar';

const MainLayout = (props) => {
    const { children } = props;
    return (
        <Fragment>
        <div className="layout-wrapper">
          <TopBar />
          {children}
        </div>
      </Fragment>
    );
};

export default MainLayout;