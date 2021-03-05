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