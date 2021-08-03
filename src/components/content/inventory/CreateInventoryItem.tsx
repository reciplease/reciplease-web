import React, { ChangeEvent, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { createInventoryItem } from '../../../api/InventoryService';
import { useIngredients } from '../../../api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateInventoryItem: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const ingredients = useIngredients();
  const [inventoryItem, setInventoryItem] = useState<CreateInventoryItem>({
    expiration: new Date(),
    amount: 0, ingredientUuid: ''
  });

  useEffect(() => {
    setInventoryItem((i) => ({ ...i, ingredientUuid: ingredients[0].uuid }));
  }, [ingredients]);

  const ingredientOptions = ingredients.map(ingredient => {
    return <option key={ingredient.uuid} value={ingredient.uuid}>{ingredient.name}</option>;
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createInventoryItem(inventoryItem);
    history.push('/inventory');
  };

  const onChange = (key: keyof CreateInventoryItem) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    setInventoryItem({ ...inventoryItem, [key]: e.target.value });
  };

  return (
    <>
      <h1>Create Ingredient</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor={'inventory-item-ingredient'}>Ingredient</label>
        <select id={'inventory-item-ingredient'} value={inventoryItem.ingredientUuid}
                onChange={onChange('ingredientUuid')}>
          {ingredientOptions}
        </select>
        <label htmlFor={'inventory-item-amount'}>Amount</label>
        <input id={'inventory-item-amount'} value={inventoryItem.amount} type={'number'}
               onChange={onChange('amount')} />
        <label htmlFor={'inventory-item-expiration'}>Expiration</label>
        <DatePicker selected={inventoryItem.expiration}
                    onChange={(date: Date) => setInventoryItem(i => ({ ...i, expiration: date }))} />
        <button type={'submit'}>Create</button>
      </form>
    </>
  );
};

export default withRouter(CreateInventoryItem);
