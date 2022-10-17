import React from "react";
import "./App.css";
import "./components/SearchBar/index.css";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <>
      <Sidebar
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
        isOpen={true}
      />

      <Navbar />
      <MainPage />
    </>
  );
}

export default App;
