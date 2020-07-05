import React from 'react';

function Body() {
  return (
    <section>
      <Navigation/>
      <Content/>
    </section>
  )
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="#">Ingredients</a></li>
        <li><a href="#">Inventory</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Planner</a></li>
      </ul>
    </nav>
  )
}


function Content() {
  return (
    <article>
      <h1>Lorem ipsum</h1>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
        tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
        semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
        tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
        semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien
        ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec
        non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque
        egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
        porttitor, facilisis luctus, metus.</p>
    </article>
  )
}

export default Body;
