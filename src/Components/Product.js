import React from "react";
import "../styles/style.css";

function Product() {
	return (
		<div className="product">
			<img
				src={process.env.PUBLIC_URL + "/images/pane-1-icon.png"}
				alt="productImg"
			/>

			<div className="product__info">
				<p className="title">Blue</p>
				<p className="description">
					Blue is the color of the sky and sea. It is often associated with
					depth and stability. It symbolizes trust, loyalty, wisdom, confidence,
					intelligence, faith, truth, and heaven
				</p>
			</div>
		</div>
	);
}

export default Product;
