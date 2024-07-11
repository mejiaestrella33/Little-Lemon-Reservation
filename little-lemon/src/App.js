import "./App.css";
import { Fragment } from "react";
import Header from "./Components/Header.js";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
