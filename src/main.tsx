import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { Helmet } from 'react-helmet';
import Logo from "./assets/images/Logo-Light.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <Helmet>
        <title>Adnane BENAZZOU</title>
        <meta name="description" content={"Adnane Benazzou's Portfolio website"} />
        <meta property="og:title" content={"Adnane BENAZZOU"} />
        <meta property="og:description" content={"Adnane Benazzou's Portfolio website"} />
        <meta property="og:image" content={Logo} />
        <meta property="og:url" content={"portfolio.abenazzou.com"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={"Adnane BENAZZOU"} />
        <meta name="twitter:description" content={"Adnane Benazzou's Portfolio website"} />
        <meta name="twitter:image" content={Logo} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <App />
    </React.StrictMode>
  </Provider>
);
