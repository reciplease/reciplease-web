import React from 'react';
import {Route, Switch} from 'react-router-dom';

import styles from './content.module.css';

import FakeRecipe from '../FakeRecipe/FakeRecipe';

const Content : React.FunctionComponent = () => {
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

export default Content;