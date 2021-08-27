import React from "react";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import reportWebVitals from "./report-web-vitals";
import * as serviceWorkerRegistration from "./service-worker-registration";
import "./styles/index.css";
import App from "./ui/app";

const Loading: React.FC = () => {
  return <div>Loading...</div>;
};

const Root: React.FC = () => {
  return (
    <React.StrictMode>
      <React.Suspense fallback={<Loading />}>
        <I18nextProvider i18n={i18n}>
          <App></App>
        </I18nextProvider>
      </React.Suspense>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
