import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {InventoryItem} from '../../../api/InventoryService';

interface InventoryItemSummaryProps {
    item: InventoryItem
}

export function InventoryItemSummary({item}: InventoryItemSummaryProps) {
    return (
        <>
            <Link to={'/inventory/' + item.id}>
                <h2>{item.name}</h2>
            </Link>
            {item.amount} {item.measure.toLowerCase()}
        </>
    );
}
