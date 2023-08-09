import React from "react";
import Theme from "./services/theme";
import Translate from "./services/translate";
import { RouterProvider } from "react-router";
import { router } from "./router";

const Root = () => {
  return (
    <Theme>
      <Translate>
        <RouterProvider router={router} />
      </Translate>
    </Theme>
  );
};

export default Root;
