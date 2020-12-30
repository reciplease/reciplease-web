import {useState} from 'react';

export interface InventoryItem {
    uuid: string;
    ingredientUuid: string;
    name: string;
    amount: number;
    measure: string;
    expiration: Date;
}

export const useInventoryList = (): InventoryItem[] => {
    const [items] = useState([
        {
            uuid: '1',
            ingredientUuid: 'apple-uuid',
            name: 'apple',
            amount: 5.0,
            measure: 'ITEMS',
            expiration: new Date('2020-12-30')
        },
        {
            uuid: '2',
            ingredientUuid: 'apple-uuid',
            name: 'pear',
            amount: 6.0,
            measure: 'ITEMS',
            expiration: new Date('2020-12-30')
        },
    ]);
    return items;
};

export const useInventoryItem = (uuid: string): InventoryItem => {
    const items = useInventoryList();
    return items.find(value => value.uuid === uuid) as InventoryItem;
};
