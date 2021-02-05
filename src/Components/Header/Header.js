import React, { useState } from "react";
import "../../styles/style.css";
import "./NavMenuData.js";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { NavMenuData } from "./NavMenuData.js";
import Content from "../Content";

function Header() {
	const [click, setClick] = useState(false);
	const [userName, setUserName] = useState("");
	const [login, setLogin] = useState({
		isLogin: false,
		accessToken: "",
	});

	const handleClick = () => {
		setClick(!click);
	};

	const closeNavMenu = () => {
		setClick(false);
	};

	const loginSucess = (response) => {
		setUserName(response.profileObj.name);
		setLogin({
			isLogin: true,
			accessToken: response.accessToken,
		});
	};

	const loginFailure = (response) => {
		alert("Failed to Log in");
	};

	const logoutSucess = (response) => {
		setLogin({
			isLogin: false,
			accessToken: "",
		});
	};

	const logoutFailure = (response) => {
		alert("Failed to Log out");
	};

	return (
		<div>
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
									<Link
										to={item.url}
										className="navLink"
										onClick={closeNavMenu}
									>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>

					<div className="loginBtn">
						{login.isLogin ? (
							<GoogleLogout
								clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
								buttonText="Sign out"
								onSuccess={logoutSucess}
								onFailure={logoutFailure}
							/>
						) : (
							<GoogleLogin
								clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
								buttonText="Sign in with Google"
								onSuccess={loginSucess}
								onFailure={loginFailure}
								cookiePolicy={"single_host_origin"}
							/>
						)}
					</div>
				</div>
			</div>

			<Content userName={userName} />
		</div>
	);
}

export default Header;
