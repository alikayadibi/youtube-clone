import React from "react";

import "./App.scss";
import { Navbar, Menu, VideoContainer } from "./containers";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Menu />
         <VideoContainer />
      </div>
   );
}

export default App;
