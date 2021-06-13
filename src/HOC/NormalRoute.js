import React from "react";
import { Route } from "react-router-dom";

const NormalRoute = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} {...rest} />
        </Layout>
      )}
    />
  );
};

export default NormalRoute;
