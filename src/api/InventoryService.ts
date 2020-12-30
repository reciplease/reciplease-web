import {useEffect, useState} from 'react';

const API_ROOT = process.env.REACT_APP_API_ROOT

export interface InventoryItem {
    uuid: string;
    ingredientUuid: string;
    name: string;
    amount: number;
    measure: string;
    expiration: Date;
}

export const useInventoryList = (): InventoryItem[] => {
    const [items, setItems] = useState<InventoryItem[]>([]);

    useEffect(() => {
        fetch(`${API_ROOT}/api/inventory`, {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then((response: InventoryItem[]) => {
                response.forEach(item => item.expiration = new Date(item.expiration));
                setItems(response);
            });
    }, []);

    return items;
};

export const useInventoryItem = (uuid: string): InventoryItem | undefined => {
    const [item, setItem] = useState<InventoryItem | undefined>(undefined);

    useEffect(() => {
        fetch(`${API_ROOT}/api/inventory/${uuid}`, {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then((item: InventoryItem) => {
                item.expiration = new Date(item.expiration);
                setItem(item);
            });
    }, [uuid]);

    return item;
};
