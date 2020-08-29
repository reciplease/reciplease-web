import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

export default () => {
  const items = [
    {
      id: 1,
      name: 'apple',
      amount: 5.0,
      measure: 'ITEMS'
    },
    {
      id: 2,
      name: 'pears',
      amount: 6.0,
      measure: 'ITEMS'
    },
  ];

  return (
    <>
      {items.map(item => (
        <Fragment key={item.id}>
          <Link to={'/inventory/' + item.id}><h2>{item.name}</h2></Link>
          {item.amount} {item.measure.toLowerCase()}
        </Fragment>
      ))}
    </>
  );
}
