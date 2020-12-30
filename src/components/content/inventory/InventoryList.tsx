import React from 'react';
import {useInventoryList} from '../../../api/InventoryService';
import {Link} from 'react-router-dom';

const InventoryList = () => {
    const items = useInventoryList();

    if (!items) {
        return <h3>Loading...</h3>;
    }

    return (
        <>
            <h1>Inventory</h1>
            <ul>
                {items.map(item => (
                    <li key={item.uuid}>
                        <Link to={'/inventory/' + item.uuid}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default InventoryList;
