import "./App.css";
import { Fragment } from "react";
import Header from "./Components/Header.js";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <Fragment class="page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Markazi+Text:wght@400..700&display=swap"
        rel="stylesheet"
      ></link>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
