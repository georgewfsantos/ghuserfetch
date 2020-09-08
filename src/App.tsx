import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import GlobaStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobaStyle />
      <ToastContainer />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
