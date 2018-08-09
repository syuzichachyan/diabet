import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Recipe from '../recipe';
import './style.css';

class Recipes extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { includes, excludes, getRecipes } = this.props;
        getRecipes(excludes, includes);
    }
    static propTypes={
        includes:PropTypes.array,
        excludes:PropTypes.array,
        getRecipes:PropTypes.func,
        isRecipesFetching:PropTypes.bool,
        recipes:PropTypes.object
    };
    static defaultProps={
        isRecipesFetching:false
    };

    render() {
        const { isRecipesFetching, recipes } = this.props;
        if (isRecipesFetching === false) {
            return (
                <div className="recipes">
                    {recipes.hits.map(recipe => {
                        return (
                            <Recipe
                                recipe={recipe.recipe}
                                key={recipe.recipe.url}
                            />
                        );
                    })}
                </div>
            );
        } else return <div>hjkh</div>;
    }
}

export default Recipes;

