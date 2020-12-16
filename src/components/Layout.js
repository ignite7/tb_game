// React
import React, { Fragment } from "react";
//
// Components
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <Fragment>
      <header className="header">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </Fragment>
  );
}

export default Layout;
