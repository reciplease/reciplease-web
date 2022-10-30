import React, { ChangeEvent, useEffect, useState } from 'react';
import { useMeasures } from '../../../api';
import { createIngredient } from '../../../api/IngredientService';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const CreateIngredient: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const [ingredient, setIngredient] = useState<CreateIngredient>({ measure: '', name: '' });
  const measures = useMeasures();

  useEffect(() => {
    setIngredient((ingredient) => ({ ...ingredient, measure: measures[0] }));
  }, [measures]);

  const measureOptions = measures.map(measure => {
    return <option key={measure} value={measure}>{measure.toLowerCase()}</option>;
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createIngredient(ingredient);
    history.push('/inventory');
  };

  const onChange = (key: keyof CreateIngredient) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    setIngredient({ ...ingredient, [key]: e.target.value });
  };

  return (
    <>
      <h1>Create Ingredient</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor={'ingredient-name'}>Name</label>
        <input id={'ingredient-name'} value={ingredient.name} onChange={onChange('name')} />
        <label htmlFor={'ingredient-measure'}>Measure</label>
        <select id={'ingredient-measure'} value={ingredient.measure} onChange={onChange('measure')}>
          {measureOptions}
        </select>
        <button type={'submit'}>Create</button>
      </form>
    </>
  );
};

export default withRouter(CreateIngredient);
