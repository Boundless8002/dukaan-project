import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      {/* <Main /> */}

      <Header />
      <LeftSidebar />
    </div>
  );
}

export default App;
