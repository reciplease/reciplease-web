export interface InventoryItem {
    id: string;
    name: string;
    amount: number;
    measure: string;
}

export function fetchInventoryList(): InventoryItem[] {
    return [
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
    ];
}
