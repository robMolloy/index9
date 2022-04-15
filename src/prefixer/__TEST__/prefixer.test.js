import { prefixObject } from "../";
import { prefixArrayOfObjects } from "../prefixer";

const customer = { id: 'id1', name: 'Rob Molloy' }
const customerWithPrefixedKey = { cus_id: 'id1', cus_name: 'Rob Molloy' }
const customerWithPrefixedValue = { id: 'cus_id1', name: 'cus_Rob Molloy' }

const customers = [
  { id: 'id1', name: 'Rob Molloy' },
  { id: 'id2', name: 'Judy Molloy' },
  { id: 'id3', name: 'Nick Molloy' },
  { id: 'id4', name: 'Someone Else' },
]
const customersWithPrefixedKey = [
  { cus_id: 'id1', cus_name: 'Rob Molloy' },
  { cus_id: 'id2', cus_name: 'Judy Molloy' },
  { cus_id: 'id3', cus_name: 'Nick Molloy' },
  { cus_id: 'id4', cus_name: 'Someone Else' },
]
const customersWithPrefixedValue = [
  { id: 'cus_id1', name: 'cus_Rob Molloy' },
  { id: 'cus_id2', name: 'cus_Judy Molloy' },
  { id: 'cus_id3', name: 'cus_Nick Molloy' },
  { id: 'cus_id4', name: 'cus_Someone Else' },
]

test('prefix keys customer', () => {
  const result = prefixObject(customer).keys.with('cus_')

  expect(result).toEqual(customerWithPrefixedKey)
})

test('prefix values customer', () => {
  const result = prefixObject(customer).values.with('cus_')

  expect(result).toEqual(customerWithPrefixedValue)
})

test('prefix keys customers', () => {
  const result = prefixArrayOfObjects(customers).keys.with('cus_')

  expect(result).toEqual(customersWithPrefixedKey)
})

test('prefix values customers', () => {
  const result = prefixArrayOfObjects(customers).values.with('cus_')

  expect(result).toEqual(customersWithPrefixedValue)
})