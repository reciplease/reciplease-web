import {API_ROOT} from './config';
import {selector, selectorFamily} from 'recoil';

const getInventoryList = async (): Promise<InventoryItem[]> => {
    const response = await fetch(`${API_ROOT}/api/inventory`, {headers: {Accept: 'application/json'}});
    const inventoryItems = await response.json();
    inventoryItems.forEach((item: InventoryItem) => item.expiration = new Date(item.expiration));
    return inventoryItems;
};

export const inventoryItems = selector<InventoryItem[]>({
    key: 'InventoryItems',
    get: getInventoryList
});

const getInventoryItem = async (uuid: string): Promise<InventoryItem> => {
    const response = await fetch(`${API_ROOT}/api/inventory/${uuid}`, {headers: {Accept: 'application/json'}});
    const item = await response.json();
    item.expiration = new Date(item.expiration);
    return item;
};

export const inventoryItem = selectorFamily<InventoryItem, string>({
    key: 'InventoryItem',
    get: uuid => () => getInventoryItem(uuid)
});
