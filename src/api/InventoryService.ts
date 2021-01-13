import {useEffect} from 'react';
import {API_ROOT} from './config';
import {useRecoilState} from 'recoil';
import * as atoms from '../state/atoms';

export const useInventoryList = (): InventoryItem[] | undefined => {
    const [items, setItems] = useRecoilState(atoms.inventoryItems);

    useEffect(() => {
        fetch(`${API_ROOT}/api/inventory`, {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then((response: InventoryItem[]) => {
                response.forEach(item => item.expiration = new Date(item.expiration));
                setItems(response);
            });
    }, [setItems]);

    return items;
};

export const useInventoryItem = (uuid: string): InventoryItem | undefined => {
    const [item, setItem] = useRecoilState(atoms.inventoryItem(uuid));

    useEffect(() => {
        fetch(`${API_ROOT}/api/inventory/${uuid}`, {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then((item: InventoryItem) => {
                item.expiration = new Date(item.expiration);
                setItem(item);
            });
    }, [uuid, setItem]);

    return item;
};
