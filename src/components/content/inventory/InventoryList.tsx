import React from 'react';
import {Link} from 'react-router-dom';
import {useIngredients, useInventory} from '../../../api';

const InventoryList = () => {
    const items = useInventory();
    const ingredients = useIngredients();

    return (
        <>
            <h1>Inventory</h1>
            <ul>
                {items.map(item => (
                    <li key={item.uuid}>
                        <Link
                            to={'/inventory/' + item.uuid}>{item.amount} {item.measure.toLowerCase()} of {item.name}</Link>
                    </li>
                ))}
            </ul>
            <h1>Ingredients</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient.uuid}>
                        {ingredient.name}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default InventoryList;
