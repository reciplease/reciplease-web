import React from 'react';
import styles from './content.module.css';
import FakeRecipe from './FakeRecipe';
import {Route, Switch} from 'react-router-dom';

export default () => {
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
                    <h1>Inventory</h1>
                </Route>
            </Switch>
        </article>
    );
}
