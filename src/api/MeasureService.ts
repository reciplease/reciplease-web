import { API_ROOT } from './config';
import { selector } from 'recoil';

const getMeasures = async (): Promise<string[]> => {
  const response = await fetch(`${API_ROOT}/api/measures`, { headers: { Accept: 'application/json' } });
  return await response.json();
};

export const measures = selector<string[]>({
  key: 'Measures',
  get: getMeasures
});
