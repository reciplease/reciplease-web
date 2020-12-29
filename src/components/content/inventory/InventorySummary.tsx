import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {fetchInventoryList, InventoryItem} from '../../../api/InventoryService';

interface InventoryItemSummaryProps {
    item: InventoryItem
}

function InventoryItemSummary({item}: InventoryItemSummaryProps) {
    return (
        <Fragment key={item.id}>
            <Link to={'/inventory/' + item.id}>
                <h2>{item.name}</h2>
            </Link>
            {item.amount} {item.measure.toLowerCase()}
        </Fragment>
    );
}

const InventorySummary = () => {
    const items = fetchInventoryList();
    return (
        <>
            {items.map(item => (
                <InventoryItemSummary item={item}/>
            ))}
        </>
    );
};

export default InventorySummary;
