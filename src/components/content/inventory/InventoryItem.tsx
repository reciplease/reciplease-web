import React from 'react';
import {useParams} from 'react-router-dom';
import {InventoryItemSummary} from './InventoryItemSummary';
import {useInventoryItem} from '../../../api/InventoryService';

interface InventoryItemUrl {
    id: string;
}

const InventoryItem = () => {
    const {id} = useParams<InventoryItemUrl>();
    const item = useInventoryItem(id);
    return (
        <InventoryItemSummary item={item}/>
    );
};

export default InventoryItem;
