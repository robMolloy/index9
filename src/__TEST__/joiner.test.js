import { join } from '..';

const customers = {
  id1: { id: 'id1', cus_name: 'Rob Molloy' },
  id2: { id: 'id2', cus_name: 'Judy Molloy' },
  id3: { id: 'id3', cus_name: 'Nick Molloy' },
};

const contacts = {
  idA: { id: 'idA', con_address: '+447934647667', con_cus_id: 'id1' },
  idB: { id: 'idB', con_address: '+447801953992', con_cus_id: 'id2' },
  idC: { id: 'idC', con_address: '+441442392719', con_cus_id: 'id2' },
  idD: { id: 'idD', con_address: '+447708040285', con_cus_id: 'id3' },
};


const customerContactsResult = {
  id1: {
    id: 'id1',
    cus_name: 'Rob Molloy',
    contacts: [
      { id: 'idA', con_address: '+447934647667', con_cus_id: 'id1' },
    ]
  },
  id2: {
    id: 'id2',
    cus_name: 'Judy Molloy',
    contacts: [
      { id: 'idB', con_address: '+447801953992', con_cus_id: 'id2' },
      { id: 'idC', con_address: '+441442392719', con_cus_id: 'id2' },
    ]
  },
  id3: {
    id: 'id3',
    cus_name: 'Nick Molloy',
    contacts: [
      { id: 'idD', con_address: '+447708040285', con_cus_id: 'id3' },
    ]
  },
};

test('join contacts to customers ', () => {
  const customerContacts = join(customers)
    .to(contacts)
    .on('contacts')
    .whereIdMatches('con_cus_id');

  expect(customerContacts).toEqual(customerContactsResult);
});
