import React, { useState } from "react";
import "../../styles/header.css";
import "../../styles/mediaQueries.css";
import "./NavMenuData.js";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import GoogleLogin from "react-google-login";
import { NavMenuData } from "./NavMenuData.js";

function Header() {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const closeNavMenu = () => {
		setClick(false);
	};

	const responseGoogle = (response) => {
		console.log(response);
	};

	return (
		<div className="header__container">
			<div className="navIcon">
				<Link to="/">
					<img
						src={process.env.PUBLIC_URL + "/images/bytelion-logo.png"}
						alt="ByteLion"
						className="logo__mobile"
					/>
				</Link>

				<div className="menuIcon" onClick={handleClick}>
					{click ? (
						<CloseIcon style={{ fontSize: "35px" }} />
					) : (
						<MenuIcon style={{ fontSize: "35px" }} />
					)}
				</div>
			</div>

			<div className={click ? "navMenu__active" : "navMenu"}>
				<ul className="navMenu__list">
					{NavMenuData.map((item, idx) => {
						return (
							<li key={idx}>
								<Link to={item.url} className="navLink" onClick={closeNavMenu}>
									{item.title}
								</Link>
							</li>
						);
					})}
				</ul>

				<div className="loginBtn">
					<GoogleLogin
						clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
						buttonText="Sign in with Google"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={"single_host_origin"}
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
