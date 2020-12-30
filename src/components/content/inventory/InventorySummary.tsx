import React from 'react';
import {useInventoryList} from '../../../api/InventoryService';
import {InventoryItemSummary} from './InventoryItemSummary';

const InventorySummary = () => {
    const items = useInventoryList();
    return (
        <ul>
            {items.map(item => (
                <li key={item.uuid}>
                    <InventoryItemSummary key={item.uuid} item={item}/>
                </li>
            ))}
        </ul>
    );
};

export default InventorySummary;
