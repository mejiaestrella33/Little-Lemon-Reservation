import "./App.css";
import { Fragment } from "react";
import Header from "./Components/Header.js";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import BookingPage from "./Components/BookingPage.js";
import { Routes, Route } from "react-router-dom";

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

      <Routes>
         
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Main />
              <Footer />
            </div>
          }
        ></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
