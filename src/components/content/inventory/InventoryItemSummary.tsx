import React from 'react';
import {Link} from 'react-router-dom';
import {InventoryItem} from '../../../api/InventoryService';

interface InventoryItemSummaryProps {
    item: InventoryItem
}

export function InventoryItemSummary({item}: InventoryItemSummaryProps) {
    return (
        <>
            <Link to={'/inventory/' + item.uuid}>{item.name}</Link><br/>
            {item.amount} {item.measure.toLowerCase()}, expires on {item.expiration.toDateString()}
        </>
    );
}
