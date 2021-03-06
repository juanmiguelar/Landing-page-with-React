import React, { Fragment } from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

export function App() {
	return (
		<Fragment>
			<NavBar></NavBar>
			<div className="container">
				<Jumbotron></Jumbotron>
				<div className="row">
					<div className="col">
						<Card></Card>
					</div>
					<div className="col">
						<Card></Card>
					</div>
					<div className="col">
						<Card></Card>
					</div>
					<div className="col">
						<Card></Card>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</Fragment>
	);
}
