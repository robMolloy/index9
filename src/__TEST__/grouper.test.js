import { group } from '..';

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

const countriesGroupedByContinentResult = {
  "NA": [
    { id: 'id1', name: 'america', pop: 300000000, continent: 'NA' }
  ],
  "SA": [
    { id: 'id2', name: 'colombia', pop: 100000000, continent: 'SA' }
  ],
  "EUR": [
    { id: 'id3', name: 'UK', pop: 70000000, continent: 'EUR' },
    { id: 'id4', name: 'France', pop: 80000000, continent: 'EUR' }

  ]
};

test('group countries on continent', () => {
  const countriesGroupedByContinent = group(countries).on('continent');

  expect(countriesGroupedByContinent).toEqual(countriesGroupedByContinentResult);
});


// const countriesGroupedByContinent = group(countries).on('continent');