import React from 'react';
import {useParams} from 'react-router-dom';

interface InventoryItemUrl {
    id: string;
}

export default () => {
    const {id} = useParams<InventoryItemUrl>();
    return (
        <h1>Inventory Item: {id}</h1>
    );
}
