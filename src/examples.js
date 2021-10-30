import { index, group, join } from "./index";

const countries = {
  id1: { id: "id1", name: "america", pop: 300000000, continent: "NA" },
  id2: { id: "id2", name: "colombia", pop: 100000000, continent: "SA" },
  id3: { id: "id3", name: "UK", pop: 70000000, continent: "EUR" },
  id4: { id: "id4", name: "France", pop: 80000000, continent: "EUR" }
};

const customers = {
  id1: { id: "id1", cus_name: "Rob Molloy" },
  id2: { id: "id2", cus_name: "Judy Molloy" },
  id3: { id: "id3", cus_name: "Nick Molloy" }
};

const contacts = {
  idA: { id: "idA", con_address: "+447934647667", con_cus_id: "id1" },
  idB: { id: "idB", con_address: "+447801953992", con_cus_id: "id2" },
  idC: { id: "idC", con_address: "+441442392719", con_cus_id: "id2" },
  idD: { id: "idD", con_address: "+447708040285", con_cus_id: "id3" }
};

const contactsOnCustomers1 = {
  id1: {
    id: "id1",
    cus_name: "Rob Molloy",
    contacts: {
      idA: { id: "idA", con_address: "+447934647667", con_cus_id: "id1" }
    }
  },
  id2: {
    id: "id2",
    cus_name: "Judy Molloy",
    contacts: {
      idB: { id: "idB", con_address: "+447801953992", con_cus_id: "id2" },
      idC: { id: "idC", con_address: "+441442392719", con_cus_id: "id2" }
    }
  },
  id3: {
    id: "id3",
    cus_name: "Nick Molloy",
    contacts: {
      idD: { id: "idD", con_address: "+447708040285", con_cus_id: "id3" }
    }
  }
};

const countriesIndexedOnName = index(countries).on("name");
const countriesGroupedByContinent = group(countries).on("continent");
console.log(countriesIndexedOnName);
console.log(countriesGroupedByName);

// parents        children     joinKey                   child
const customerContacts = join(customers)
  .with(contacts)
  .on("contacts")
  .whereIdMatches("con_cus_id");

console.log(customerContacts);

join(customers, "cus_con_id", "contacts").to(contacts, "con_id");
