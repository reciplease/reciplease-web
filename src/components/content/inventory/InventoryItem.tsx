import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useInventoryItem} from '../../../api';

interface InventoryItemUrl {
    uuid: string;
}

const InventoryItem = () => {
    const {uuid} = useParams<InventoryItemUrl>();
    const item = useInventoryItem(uuid);

    return (
        <>
            <Link to={'/inventory/' + item.uuid}>{item.name}</Link><br/>
            {item.amount} {item.measure.toLowerCase()}, expires on {item.expiration.toDateString()}
        </>
    );
};

export default InventoryItem;
