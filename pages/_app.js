import "tailwindcss/tailwind.css";
import React from "react";
import "../style/app.css";
import "aos/dist/aos.css";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <div id="modalRoot" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
