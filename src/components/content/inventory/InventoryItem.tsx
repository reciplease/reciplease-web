import React from 'react';
import {useParams} from 'react-router-dom';

interface InventoryItemUrl {
    id: string;
}

const InventoryItem = () => {
    const {id} = useParams<InventoryItemUrl>();
    return (
        <h1>Inventory Item: {id}</h1>
    );
};

export default InventoryItem;
