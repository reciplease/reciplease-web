import React from 'react';
import {useParams} from 'react-router-dom';
import {InventoryItemSummary} from './InventoryItemSummary';
import {useInventoryItem} from '../../../api/InventoryService';

interface InventoryItemUrl {
    uuid: string;
}

const InventoryItem = () => {
    const {uuid} = useParams<InventoryItemUrl>();
    const item = useInventoryItem(uuid);
    if (item) {
        return <InventoryItemSummary item={item}/>;
    } else {
        return <h3>Loading...</h3>;
    }
};

export default InventoryItem;
