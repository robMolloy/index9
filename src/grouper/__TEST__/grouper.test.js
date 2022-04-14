import { group, groupObjects, index } from '../../'


const countries = [
  { id: 'id1', name: 'america', pop: 300000000, continent: 'NA', },
  { id: 'id2', name: 'colombia', pop: 100000000, continent: 'SA', },
  { id: 'id3', name: 'UK', pop: 70000000, continent: 'EUR', },
  { id: 'id4', name: 'France', pop: 80000000, continent: 'EUR', }
]

const countriesGroupedById = {
  id1: [ { id: 'id1', name: 'america', pop: 300000000, continent: 'NA' } ],
  id2: [ { id: 'id2', name: 'colombia', pop: 100000000, continent: 'SA' } ],
  id3: [ { id: 'id3', name: 'UK', pop: 70000000, continent: 'EUR' } ],
  id4: [ { id: 'id4', name: 'France', pop: 80000000, continent: 'EUR' } ],
}

const countriesGroupedByName = {
  america: [ { id: 'id1', name: 'america', pop: 300000000, continent: 'NA' } ],
  colombia: [ { id: 'id2', name: 'colombia', pop: 100000000, continent: 'SA' } ],
  UK: [ { id: 'id3', name: 'UK', pop: 70000000, continent: 'EUR' } ],
  France: [ { id: 'id4', name: 'France', pop: 80000000, continent: 'EUR' } ],
}

const countriesGroupedByContinent = {
  NA: [ { id: 'id1', name: 'america', pop: 300000000, continent: 'NA' } ],
  SA: [ { id: 'id2', name: 'colombia', pop: 100000000, continent: 'SA' } ],
  EUR: [
    { id: 'id3', name: 'UK', pop: 70000000, continent: 'EUR' },
    { id: 'id4', name: 'France', pop: 80000000, continent: 'EUR' } 
  ],
}


test('Array grouped on key with unique values - group countries on id', () => {
  const result = group(countries).on('id')

  expect(result).toEqual(countriesGroupedById)
})

test('Array grouped on key with non-unique values - group countries on continent', () => {
  const result = group(countries).on('continent')

  expect(result).toEqual(countriesGroupedByContinent)
})

test('Object grouped on key with unique values - group countriesIndexedById on name', () => {
  const countriesIndexedById = index(countries).on('id')
  const result = groupObjects(countriesIndexedById).on('name')

  expect(result).toEqual(countriesGroupedByName)
})

test('Object grouped on key with non-unique values - group countriesIndexedById on continent', () => {
  const countriesIndexedById = index(countries).on('id')
  const result = groupObjects(countriesIndexedById).on('continent')

  expect(result).toEqual(countriesGroupedByContinent)
})
