import { prefixObject } from '../..'

const customer = { id: 'id1', name: 'Rob Molloy' }
const customers = [
  { id: 'id1', name: 'Rob Molloy' },
  { id: 'id2', name: 'Judy Molloy' },
  { id: 'id3', name: 'Nick Molloy' },
  { id: 'id4', name: 'Someone Else' },
]

const customerResult = { cus_id: 'id1', cus_name: 'Rob Molloy' }
const customersResult = [
  { cus_id: 'id1', cus_name: 'Rob Molloy' },
  { cus_id: 'id2', cus_name: 'Judy Molloy' },
  { cus_id: 'id3', cus_name: 'Nick Molloy' },
  { cus_id: 'id4', cus_name: 'Someone Else' },
]

test('prefix keys customers ', () => {
  const customer = prefixObject(customer).keys().with('cus_')

  expect(customer).toEqual(customerResult)
})
