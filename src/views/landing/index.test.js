// Libraries
import React from "react";
import ReactDOM from "react-dom";

// Components
import Landing from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Landing />, div);
  ReactDOM.unmountComponentAtNode(div);
});
