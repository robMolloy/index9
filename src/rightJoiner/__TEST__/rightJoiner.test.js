import { rightJoinArrayOfObjects } from '../..'

const customers = [
  { id: 'id1', name: 'Rob Molloy' },
  { id: 'id2', name: 'Judy Molloy' },
  { id: 'id3', name: 'Nick Molloy' },
  { id: 'id4', name: 'Someone Else' },
  { id: 'id5', name: 'Another Person' },
]

const contacts = [
  { id: 'idA', address: '+447934647667', cus_id: 'id1' },
  { id: 'idB', address: '+447801953992', cus_id: 'id2' },
  { id: 'idC', address: '+441442392719', cus_id: 'id2' },
  { id: 'idD', address: '+447708040285', cus_id: 'id3' },
  { id: 'idE', address: '+447777777777', cus_id: 'id5' },
]

const customerContactsResult = [
  { id: 'idA', name: 'Rob Molloy', address: '+447934647667', cus_id: 'id1' },
  { id: 'idB', name: 'Judy Molloy', address: '+447801953992', cus_id: 'id2' },
  { id: 'idC', name: 'Judy Molloy', address: '+441442392719', cus_id: 'id2' },
  { id: 'idD', name: 'Nick Molloy', address: '+447708040285', cus_id: 'id3' },
  { id: 'idE', name: 'Another Person', address: '+447777777777', cus_id: 'id5' },
]

const customerPrefixedContactsResult = [
  { con_id: 'idA', id: 'id1', name: 'Rob Molloy', con_address: '+447934647667', con_cus_id: 'id1' },
  { con_id: 'idB', id: 'id2', name: 'Judy Molloy', con_address: '+447801953992', con_cus_id: 'id2' },
  { con_id: 'idC', id: 'id2', name: 'Judy Molloy', con_address: '+441442392719', con_cus_id: 'id2' },
  { con_id: 'idD', id: 'id3', name: 'Nick Molloy', con_address: '+447708040285', con_cus_id: 'id3' },
  { con_id: 'idE', id: 'id5', name: 'Another Person', con_address: '+447777777777', con_cus_id: 'id5' },
]

const prefixedCustomerPrefixedContactsResult = [
  { con_id: 'idA', cus_id: 'id1', cus_name: 'Rob Molloy', con_address: '+447934647667', con_cus_id: 'id1' },
  { con_id: 'idB', cus_id: 'id2', cus_name: 'Judy Molloy', con_address: '+447801953992', con_cus_id: 'id2' },
  { con_id: 'idC', cus_id: 'id2', cus_name: 'Judy Molloy', con_address: '+441442392719', con_cus_id: 'id2' },
  { con_id: 'idD', cus_id: 'id3', cus_name: 'Nick Molloy', con_address: '+447708040285', con_cus_id: 'id3' },
  { con_id: 'idE', cus_id: 'id5', cus_name: 'Another Person', con_address: '+447777777777', con_cus_id: 'id5' },
]

const prefixedCustomersContactsResult = [
  { id: 'idA', cus_id: 'id1', cus_name: 'Rob Molloy', address: '+447934647667', cus_id: 'id1' },
  { id: 'idB', cus_id: 'id2', cus_name: 'Judy Molloy', address: '+447801953992', cus_id: 'id2' },
  { id: 'idC', cus_id: 'id2', cus_name: 'Judy Molloy', address: '+441442392719', cus_id: 'id2' },
  { id: 'idD', cus_id: 'id3', cus_name: 'Nick Molloy', address: '+447708040285', cus_id: 'id3' },
  { id: 'idE', cus_id: 'id5', cus_name: 'Another Person', address: '+447777777777', cus_id: 'id5' },
]

test('rightJoin contacts to customers ', () => {
  const customerContacts = rightJoinArrayOfObjects(contacts)
    .to(customers)
    .where('cus_id')
    .matches('id')

  expect(customerContacts).toEqual(customerContactsResult)
})

test('rightJoin prefixedContacts to customers ', () => {
  const customerContacts = rightJoinArrayOfObjects(contacts, 'con_')
    .to(customers)
    .where('cus_id')
    .matches('id')

  expect(customerContacts).toEqual(customerPrefixedContactsResult)
})

test('rightJoin contacts to prefixedCustomers ', () => {
  const customerContacts = rightJoinArrayOfObjects(contacts)
    .to(customers, 'cus_')
    .where('cus_id')
    .matches('id')
    
  expect(customerContacts).toEqual(prefixedCustomersContactsResult)
})
  
test('rightJoin prefixedContacts to prefixedCustomers ', () => {
  const customerContacts = rightJoinArrayOfObjects(contacts, 'con_')
    .to(customers, 'cus_')
    .where('cus_id')
    .matches('id')

  expect(customerContacts).toEqual(prefixedCustomerPrefixedContactsResult)
})