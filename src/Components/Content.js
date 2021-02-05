import React from "react";
import "../styles/style.css";
import Product from "./Product";

function Content({ userName }) {
	return (
		<div className="content__container">
			<div className="welcome__text">
        <h1>{!userName ? `Welcome` : `Hi, ${ userName }`}</h1>
				<p>
					Color really isn't that difficult to get right if you know where to
					start
				</p>
				<p>Learn by doing and you'll be a master in no time</p>
			</div>

			<div className="product__row">
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
}

export default Content;
