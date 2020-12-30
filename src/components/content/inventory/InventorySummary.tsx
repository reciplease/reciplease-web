import React from 'react';
import {useInventoryList} from '../../../api/InventoryService';
import {InventoryItemSummary} from './InventoryItemSummary';

const InventorySummary = () => {
    const items = useInventoryList();
    return (
        <>
            {items.map(item => (
                <InventoryItemSummary key={item.id} item={item}/>
            ))}
        </>
    );
};

export default InventorySummary;
