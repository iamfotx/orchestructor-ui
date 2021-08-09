import { atom, selector } from 'recoil';
import jsonata from 'jsonata';
import { stringify } from '../utils';

export const originState = atom({
  key: 'origin',
  default: {
    title: 'Software Engineer',
    firstName: 'Ahmad',
    lastName: 'Raza',
    age: 20,
  },
});

export const computedState = atom({
  key: 'computed',
  default: {
    title: '',
    name: '',
    age: 0,
  },
});

export const destinationState = selector({
  key: 'destination',
  get: ({ get }) => {
    const computed = get(computedState);
    const origin = get(originState);
    const query = stringify(computed);
    const expression = jsonata(query);
    return expression.evaluate(origin);
  },
});
