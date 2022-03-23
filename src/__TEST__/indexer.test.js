import { index } from '..';

const countries = {
  id1: {
    id: 'id1', name: 'america', pop: 300000000, continent: 'NA',
  },
  id2: {
    id: 'id2', name: 'colombia', pop: 100000000, continent: 'SA',
  },
  id3: {
    id: 'id3', name: 'UK', pop: 70000000, continent: 'EUR',
  },
  id4: {
    id: 'id4', name: 'France', pop: 80000000, continent: 'EUR',
  },
};

const countriesIndexedOnNameResult = {
  "america": {
    id: 'id1', name: 'america', pop: 300000000, continent: 'NA',
  },
  "colombia": {
    id: 'id2', name: 'colombia', pop: 100000000, continent: 'SA',
  },
  "UK": {
    id: 'id3', name: 'UK', pop: 70000000, continent: 'EUR',
  },
  "France": {
    id: 'id4', name: 'France', pop: 80000000, continent: 'EUR',
  },
};

test('index countries on name', () => {
  const countriesIndexedOnName = index(countries).on('name');

  expect(countriesIndexedOnName).toEqual(countriesIndexedOnNameResult);
});
