import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useInventoryItem} from '../../../api/InventoryService';

interface InventoryItemUrl {
    uuid: string;
}

const InventoryItem = () => {
    const {uuid} = useParams<InventoryItemUrl>();
    const item = useInventoryItem(uuid);

    if (!item) {
        return <h3>Loading...</h3>;
    }

    return (
        <>
            <Link to={'/inventory/' + item.uuid}>{item.name}</Link><br/>
            {item.amount} {item.measure.toLowerCase()}, expires on {item.expiration.toDateString()}
        </>
    );
};

export default InventoryItem;
