import React from 'react';
import styles from './content.module.css';
import FakeRecipe from './FakeRecipe';
import {Route, Switch} from 'react-router-dom';
import InventorySummary from './inventory/InventorySummary';
import InventoryItem from './inventory/InventoryItem';

const Content = () => {
    return (
        <article className={styles.article}>
            <Switch>
                <Route exact path='/recipes'>
                    <FakeRecipe steps={20}/>
                </Route>
                <Route exact path='/planner'>
                    <h1>Planner</h1>
                </Route>
                <Route exact path='/inventory'>
                    <InventorySummary/>
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
