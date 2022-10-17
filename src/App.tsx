import React from "react";
import "./App.css";
import "./components/SearchBar/index.css";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import Main from "./layouts/Main";
function App() {
  return (
    <div style={{ background: "#0c0d21" }}>
      <Sidebar
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
        isOpen={true}
      />

      <Navbar />
      <div style={{ marginLeft: "400px" }}>
        <Main />
      </div>
    </div>
  );
}

export default App;
