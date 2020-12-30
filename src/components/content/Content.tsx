import React from 'react';
import styles from './content.module.css';
import {Route, Switch} from 'react-router-dom';
import InventoryList from './inventory/InventoryList';
import InventoryItem from './inventory/InventoryItem';
import RecipeList from './recipe/RecipeList';
import Recipe from './recipe/Recipe';

const Content = () => {
    return (
        <article className={styles.article}>
            <Switch>
                <Route exact path='/recipes'>
                    <RecipeList/>
                </Route>
                <Route path='/recipes/:uuid'>
                    <Recipe/>
                </Route>
                <Route exact path='/planner'>
                    <h1>Planner</h1>
                </Route>
                <Route exact path='/inventory'>
                    <InventoryList/>
                </Route>
                <Route path='/inventory/:uuid'>
                    <InventoryItem/>
                </Route>
                <Route exact path='/'>
                    <h1>Welcome</h1>
                </Route>
                <Route exact path='*'>
                    <h1>Oops! This page doesn't exist</h1>
                </Route>
            </Switch>
        </article>
    );
};

export default Content;
