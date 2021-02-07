import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Comment from "./Components/Comment/Comment";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Comment />
			</div>
		</Router>
	);
}

export default App;
