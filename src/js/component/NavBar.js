import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav mr-auto"></ul>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link">Services</a>
					</li>
					<li className="nav-item">
						<a className="nav-link">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
