import React, { Fragment } from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
<<<<<<< HEAD
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
=======

export function App() {

    const getCards = () => {
        const Cards = [];

        const CardInfo = {
            title="Card title",
            description="Some quick example text to build on the card title and make up the bulk of the card's content.",
            btnLabel="Go somewhere"
        }

        for (let index = 0; index < 4; index++) {
            const element = <Card title={CardInfo.title} description={CardInfo.description} btnLabel={CardInfo.btnLabel}></Card>;
            Cards.push(element);
        }

        return Cards;
    }

    return (
        <Fragment>
            <NavBar></NavBar>
            <div className="container">
                <Jumbotron></Jumbotron>
                {getCards()}
            </div>
        </Fragment>
    );
>>>>>>> e8cdb27f20f337e1810c107946219071bf277314
}
