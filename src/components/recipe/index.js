import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
class Recipe extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        recipe: PropTypes.object.isRequired
    };
    render() {
        const { recipe } = this.props;
        return (
            <div className="recipe">
                <img src={recipe.image} />
                <h3>{recipe.label}</h3>
            </div>
        );
    }
}

export default Recipe;
