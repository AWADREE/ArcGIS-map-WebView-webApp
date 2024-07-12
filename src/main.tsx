import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router basename="/">
    <App />
  </Router>,

  document.getElementById("root")
);

//"homepage": "https://AWADREE.github.io/ArcGIS-map-WebView-webApp",
