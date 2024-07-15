import "./App.css";
import { Fragment } from "react";
import Header from "./Components/Header.js";
import Nav from "./Components/Nav";
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
      <Nav />
      <Main />
      <Footer />
      <h1> Title </h1>
      <h2> subtitle </h2>
      <h3>section title</h3>
      <h4>card title</h4>
      <p>paragraph text</p>
    </Fragment>
  );
}

export default App;
