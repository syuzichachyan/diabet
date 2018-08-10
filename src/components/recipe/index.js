import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './style';
class Recipe extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        recipe: PropTypes.object.isRequired
    };
    render() {
        const { recipe ,classes} = this.props;
        return (
            <div className={classes.recipe}>
                <img src={recipe.image} />
                <h3>{recipe.label}</h3>
            </div>
        );
    }
}

export default injectSheet(styles)(Recipe);
