import { populateArrayOfObjects } from '..'

let customers
let contacts
let populatedContactsWithCustomerResult
let populatedContactsOnAliasWithCustomerResult

beforeEach(() => {
  customers = [
    { id: 'id1', cus_name: 'Rob Molloy' },
    { id: 'id2', cus_name: 'Judy Molloy' },
    { id: 'id3', cus_name: 'Nick Molloy' },
    { id: 'id4', cus_name: 'Someone Else' },
  ]

  contacts = [
    { id: 'idA', con_address: '+447934647667', con_cus_id: 'id1' },
    { id: 'idB', con_address: '+447801953992', con_cus_id: 'id2' },
    { id: 'idC', con_address: '+441442392719', con_cus_id: 'id2' },
    { id: 'idD', con_address: '+447708040285', con_cus_id: 'id3' },
    { id: 'idD', con_address: '+447777777777', con_cus_id: 'id5' },
  ]

  populatedContactsWithCustomerResult = [
    { id: 'idA', con_address: '+447934647667', con_cus_id: { id: 'id1', cus_name: 'Rob Molloy' } },
    { id: 'idB', con_address: '+447801953992', con_cus_id: { id: 'id2', cus_name: 'Judy Molloy' } },
    { id: 'idC', con_address: '+441442392719', con_cus_id: { id: 'id2', cus_name: 'Judy Molloy' } },
    { id: 'idD', con_address: '+447708040285', con_cus_id: { id: 'id3', cus_name: 'Nick Molloy' }, },
    { id: 'idD', con_address: '+447777777777', con_cus_id: {} },
  ]

  populatedContactsOnAliasWithCustomerResult = [
    { id: 'idA', con_address: '+447934647667', con_cus_id: 'id1', contacts: { id: 'id1', cus_name: 'Rob Molloy' } },
    { id: 'idB', con_address: '+447801953992', con_cus_id: 'id2', contacts: { id: 'id2', cus_name: 'Judy Molloy' } },
    { id: 'idC', con_address: '+441442392719', con_cus_id: 'id2', contacts: { id: 'id2', cus_name: 'Judy Molloy' } },
    { id: 'idD', con_address: '+447708040285', con_cus_id: 'id3', contacts: { id: 'id3', cus_name: 'Nick Molloy' }, },
    { id: 'idD', con_address: '+447777777777', con_cus_id: 'id5', contacts: {} },
  ]
});

test('populated contacts with customer', () => {
  const customerContacts = populateArrayOfObjects(contacts)
    .with(customers)
    .where('con_cus_id')
    .matches('id')

  expect(customerContacts).toEqual(populatedContactsWithCustomerResult)
})

test('populated contacts on alias with customer', () => {
  const customerContacts = populateArrayOfObjects(contacts, 'contacts')
    .with(customers)
    .where('con_cus_id')
    .matches('id')

  expect(customerContacts).toEqual(populatedContactsOnAliasWithCustomerResult)
})
