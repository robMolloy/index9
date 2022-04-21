import { leftJoinArrayOfObjects } from '../..'

const customers = [
  { id: 'id1', name: 'Rob Molloy' },
  { id: 'id2', name: 'Judy Molloy' },
  { id: 'id3', name: 'Nick Molloy' },
  { id: 'id4', name: 'Someone Else' },
]

const contacts = [
  { id: 'idA', address: '+447934647667', cus_id: 'id1' },
  { id: 'idB', address: '+447801953992', cus_id: 'id2' },
  { id: 'idC', address: '+441442392719', cus_id: 'id2' },
  { id: 'idD', address: '+447708040285', cus_id: 'id3' },
  { id: 'idD', address: '+447777777777', cus_id: 'id5' },
]

const customerContactsResult = [
  { id: 'id1', name: 'Rob Molloy', address: '+447934647667', cus_id: 'id1' },
  { id: 'id2', name: 'Judy Molloy', address: '+447801953992', cus_id: 'id2' },
  { id: 'id2', name: 'Judy Molloy', address: '+441442392719', cus_id: 'id2' },
  { id: 'id3', name: 'Nick Molloy', address: '+447708040285', cus_id: 'id3' },
  { id: 'id4', name: 'Someone Else' },
]

const customerPrefixedContactsResult = [
  { id: 'id1', name: 'Rob Molloy', con_address: '+447934647667', con_cus_id: 'id1', con_id: 'idA' },
  { id: 'id2', name: 'Judy Molloy', con_address: '+447801953992', con_cus_id: 'id2', con_id: 'idB' },
  { id: 'id2', name: 'Judy Molloy', con_address: '+441442392719', con_cus_id: 'id2', con_id: 'idC', },
  { id: 'id3', name: 'Nick Molloy', con_address: '+447708040285', con_cus_id: 'id3', con_id: 'idD', },
  { id: 'id4', name: 'Someone Else' },
]

const prefixedCustomerPrefixedContactsResult = [
  { cus_id: 'id1', cus_name: 'Rob Molloy', con_address: '+447934647667', con_cus_id: 'id1', con_id: 'idA' },
  { cus_id: 'id2', cus_name: 'Judy Molloy', con_address: '+447801953992', con_cus_id: 'id2', con_id: 'idB' },
  { cus_id: 'id2', cus_name: 'Judy Molloy', con_address: '+441442392719', con_cus_id: 'id2', con_id: 'idC', },
  { cus_id: 'id3', cus_name: 'Nick Molloy', con_address: '+447708040285', con_cus_id: 'id3', con_id: 'idD', },
  { cus_id: 'id4', cus_name: 'Someone Else' },
]


const prefixedCustomersContactsResult = [
  { cus_id: 'id1', cus_name: 'Rob Molloy', address: '+447934647667', cus_id: 'id1', id: 'idA' },
  { cus_id: 'id2', cus_name: 'Judy Molloy', address: '+447801953992', cus_id: 'id2', id: 'idB' },
  { cus_id: 'id2', cus_name: 'Judy Molloy', address: '+441442392719', cus_id: 'id2', id: 'idC', },
  { cus_id: 'id3', cus_name: 'Nick Molloy', address: '+447708040285', cus_id: 'id3', id: 'idD', },
  { cus_id: 'id4', cus_name: 'Someone Else' },
]

test('join contacts to customers ', () => {
  const customerContacts = leftJoinArrayOfObjects(contacts)
    .to(customers,)
    .where('cus_id')
    .matches('id')

  expect(customerContacts).toEqual(customerContactsResult)
})

test('join prefixedContacts to customers ', () => {
  const customerContacts = leftJoinArrayOfObjects(contacts, 'con_')
    .to(customers)
    .where('cus_id')
    .matches('id')

  expect(customerContacts).toEqual(customerPrefixedContactsResult)
})

test('join prefixedContacts to prefixedCustomers ', () => {
  const customerContacts = leftJoinArrayOfObjects(contacts, 'con_')
    .to(customers, 'cus_')
    .where('cus_id')
    .matches('id')

  expect(customerContacts).toEqual(prefixedCustomerPrefixedContactsResult)
})

test('join contacts to prefixedCustomers ', () => {
  const customerContacts = leftJoinArrayOfObjects(contacts)
    .to(customers, 'cus_')
    .where('cus_id')
    .matches('id')

  expect(customerContacts).toEqual(prefixedCustomersContactsResult)
})
