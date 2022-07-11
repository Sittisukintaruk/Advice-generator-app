import React from "react";
import Advice from "./component/Advice";
import GlobalStyles from "./component/style/globalStyles";
import { Themestyle } from "./component/style/themestyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Themestyle>
        <Advice />
      </Themestyle>
    </React.Fragment>
  );
}

export default App;
