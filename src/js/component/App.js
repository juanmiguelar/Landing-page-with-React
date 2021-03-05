import React, { Fragment } from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

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
}
