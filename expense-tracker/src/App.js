import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-wrapper">
        <SideBar />
        <Content />
      </div>
      <div className="footer">Copyright © 2022 Expense Tracker. All rights reserved.</div>
    </div>
  );
}

export default App;
