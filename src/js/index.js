//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { App } from "./component/App";

//render your react application
<<<<<<< HEAD
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.querySelector("#app")
);
=======
ReactDOM.render(<App />, document.querySelector("#app"));
>>>>>>> e8cdb27f20f337e1810c107946219071bf277314
