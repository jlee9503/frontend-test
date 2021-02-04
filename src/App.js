import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Content from "./Components/Content";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Content />
			</div>
		</Router>
	);
}

export default App;
