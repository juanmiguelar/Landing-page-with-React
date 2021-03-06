<<<<<<< HEAD
import React from "react";

const Card = () => {
	return (
		<div className="card">
			<img
				src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
				className="card-img-top"
				alt="alt-text"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
};

export default Card;
=======
import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <a href="#" class="btn btn-primary">{props.btnLabel}</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    btnLabel: PropTypes.string,
}

export default Card;
>>>>>>> e8cdb27f20f337e1810c107946219071bf277314
