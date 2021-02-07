import React from "react";
import "../../styles/style.css";
import { productData } from "./productData";

function Product() {
	return (
		<div className="product__container">
			{productData.map((data, idx) => {
				return (
					<div className="product" key={idx}>
						<img
							src={process.env.PUBLIC_URL + `${data.imgURL}`}
							alt="productImg"
							className="productImg"
						/>
						<div className="product__info">
							<p className="title">{data.title}</p>
							<p className="description">{data.description}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Product;
