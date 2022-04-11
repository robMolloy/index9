import { index } from '..';

const countries = [
  { id: 'id1', name: 'america', pop: 300000000, continent: 'NA', },
  { id: 'id2', name: 'colombia', pop: 100000000, continent: 'SA', },
  { id: 'id3', name: 'UK', pop: 70000000, continent: 'EUR', },
  { id: 'id4', name: 'France', pop: 80000000, continent: 'EUR', }
]

const countriesIndexedOnId = {
  id1: { id: 'id1', name: 'america', pop: 300000000, continent: 'NA' },
  id2: { id: 'id2', name: 'colombia', pop: 100000000, continent: 'SA' },
  id3: { id: 'id3', name: 'UK', pop: 70000000, continent: 'EUR' },
  id4: { id: 'id4', name: 'France', pop: 80000000, continent: 'EUR' }
};

const countriesIndexedOnName = {
  america: { id: 'id1', name: 'america', pop: 300000000, continent: 'NA' },
  colombia: { id: 'id2', name: 'colombia', pop: 100000000, continent: 'SA' },
  UK: { id: 'id3', name: 'UK', pop: 70000000, continent: 'EUR' },
  France: { id: 'id4', name: 'France', pop: 80000000, continent: 'EUR' },
};

const countriesIndexedOnContinent = {
  NA: { id: 'id1', name: 'america', pop: 300000000, continent: 'NA' },
  SA: { id: 'id2', name: 'colombia', pop: 100000000, continent: 'SA' },
  EUR: { id: 'id4', name: 'France', pop: 80000000, continent: 'EUR' },
};

test('Array indexed on key with unique values - index countries on id', () => {
  const result = index(countries).on('id');

  expect(result).toEqual(countriesIndexedOnId);
});

test('Array indexed on key with unique values2 - index countries on name', () => {
  const result = index(countries).on('name');

  expect(result).toEqual(countriesIndexedOnName);
});

test('Object indexed on key with unique values - index countriesIndexedOnId on name', () => {
  const result = index(countriesIndexedOnId).on('name');

  expect(result).toEqual(countriesIndexedOnName);
});

test('Array indexed on key with non-unique values - index countries on continent', () => {
  const result = index(countriesIndexedOnId).on('continent');

  expect(result).toEqual(countriesIndexedOnContinent);
});
