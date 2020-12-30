import {useState} from 'react';

export interface InventoryItem {
    id: string;
    name: string;
    amount: number;
    measure: string;
}

export const useInventoryList = (): InventoryItem[] => {
    const [items] = useState([
        {
            id: '1',
            name: 'apple',
            amount: 5.0,
            measure: 'ITEMS'
        },
        {
            id: '2',
            name: 'pears',
            amount: 6.0,
            measure: 'ITEMS'
        },
    ]);
    return items;
};

export const useInventoryItem = (id: string): InventoryItem => {
    const items = useInventoryList();
    return items.find(value => value.id === id) as InventoryItem;
};
