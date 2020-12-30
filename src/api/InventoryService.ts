import {useEffect, useState} from 'react';
import {API_ROOT} from './config';

export const useInventoryList = (): InventoryItem[] | undefined => {
    const [items, setItems] = useState<InventoryItem[] | undefined>(undefined);

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
