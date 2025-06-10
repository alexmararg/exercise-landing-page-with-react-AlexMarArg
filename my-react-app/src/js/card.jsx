import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = props=>{
    return (
    <div className="card">
        <img className="card-img-top" src={props.imageUrl} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn">{props.buttonText}</a>
        </div>
    </div>
    );
};
Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string
};

export default Card;