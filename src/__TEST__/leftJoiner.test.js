import { leftJoin } from '..';

const customers = [
  { id: 'id1', cus_name: 'Rob Molloy' },
  { id: 'id2', cus_name: 'Judy Molloy' },
  { id: 'id3', cus_name: 'Nick Molloy' },
  { id: 'id4', cus_name: 'Someone Else' },
]

const contacts = [
  { id: 'idA', con_address: '+447934647667', con_cus_id: 'id1' },
  { id: 'idB', con_address: '+447801953992', con_cus_id: 'id2' },
  { id: 'idC', con_address: '+441442392719', con_cus_id: 'id2' },
  { id: 'idD', con_address: '+447708040285', con_cus_id: 'id3' },
  { id: 'idD', con_address: '+447777777777', con_cus_id: 'id5' },
]

const customerContactsResult = [
  {
    id: 'id1',
    cus_name: 'Rob Molloy',
    contacts: [
      { id: 'idA', con_address: '+447934647667', con_cus_id: 'id1' },
    ]
  },
  {
    id: 'id2',
    cus_name: 'Judy Molloy',
    contacts: [
      { id: 'idB', con_address: '+447801953992', con_cus_id: 'id2' },
      { id: 'idC', con_address: '+441442392719', con_cus_id: 'id2' },
    ]
  },
  {
    id: 'id3',
    cus_name: 'Nick Molloy',
    contacts: [
      { id: 'idD', con_address: '+447708040285', con_cus_id: 'id3' },
    ]
  },
  {
    id: 'id4',
    cus_name: 'Someone Else',
    contacts: []
  },
];


test('join contacts to customers ', () => {
  const customerContacts = leftJoin(contacts)
    .to(customers)
    .where('con_cus_id')
    .matches('id')
    .onAlias('contacts');

  expect(customerContacts).toEqual(customerContactsResult);
});
