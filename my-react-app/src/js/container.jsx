import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Jumbotron from "./jumbotrom";
import Card from "./card";

const Container = () => {
    return (
    <div className="container p-2">
        <div className="row p-2">
            <Jumbotron/>
        </div>
        <div className="row p-2">
            <div className="col p-2">
                <Card imageUrl="https://www.artofmtg.com/wp-content/uploads/2024/01/Hedge-Maze-Murders-at-Karlov-Manor-MtG-Art.jpg" title="Título 1" text="Texto de ejemplo para la tarjeta 1." buttonUrl="#" buttonText="Button 1"/>
            </div>
            <div className="col p-2">
                <Card imageUrl="https://www.artofmtg.com/wp-content/uploads/2022/09/Tidepool-Turtle-Dominaria-United-MtG-Art.jpg" title="Título 2" text="Texto de ejemplo para la tarjeta 2." buttonUrl="#" buttonText="Button 2"/>
            </div>
            <div className="col p-2">
                <Card imageUrl="https://www.artofmtg.com/wp-content/uploads/2021/06/Kaleidoscorch-Modern-Horizons-2-MtG-Art.jpg" title="Título 3" text="Texto de ejemplo para la tarjeta 3." buttonUrl="#" buttonText="Button 3"/>
            </div>
            <div className="col p-2">
                <Card imageUrl="https://www.artofmtg.com/wp-content/uploads/2021/02/Brainstorm-Signature-Spellbook-Jace-MtG-Art.jpg" title="Título 4" text="Texto de ejemplo para la tarjeta 4." buttonUrl="#" buttonText="Button 4"/>
            </div>
        </div>
    </div>
 );
};

export default Container;