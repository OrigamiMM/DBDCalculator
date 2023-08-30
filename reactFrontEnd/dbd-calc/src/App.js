import React from "react";

import Header from "./components/UI/Header";
import Main from "./components/Layouts/Main";
import Card from "./components/UI/Card";
import LoadoutBuilder from "./components/Selector/Loadouts/LoadoutBuilder";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <LoadoutBuilder />
      </Main>
    </React.Fragment>
  );
}

export default App;
