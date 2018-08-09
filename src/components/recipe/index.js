import React, { Component } from 'react';
import './style.css';
class Recipe extends Component {
    constructor(props) {
        super(props);
    }
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
