# index9

A human-readable library to allow for the manipulation of an array of objects or an object of objects. An object of objects will be returned.

The returns of all functions will give a (semi-)immutable object. Use lodash.cloneDeep() or similar if this is not the desired result.

### Available functions

- [Index](#index)
- [Group](#group)
- [Group](#group)

## index()

Transform the countries array into an indexed object. Take care, non-unique indexes will overwrite other data.

```js
const countries = [
  { id: "id1", name: "america", pop: 300000000, continent: "NA" },
  { id: "id2", name: "colombia", pop: 100000000, continent: "SA" },
  { id: "id3", name: "UK", pop: 70000000, continent: "EUR" },
  { id: "id4", name: "France", pop: 80000000, continent: "EUR" },
];
```

### Array indexed on key with unique values

```js
import { index } from "index9";
const result = index(countries).on("id");

expect(result).toEqual(countriesIndexedOnId); // result below
```

### Object indexed on key with unique values

```js
import { index } from "index9";
const result = index(countriesIndexedOnId).on("name");

expect(result).toEqual(countriesIndexedOnName); // result below
```

### Array indexed on key with non-unique values (also works for object)

```js
import { index } from "index9";
const result = index(countriesIndexedOnId).on("continent");

expect(result).toEqual(countriesIndexedOnContinent); // result below
```

```js
const countriesIndexedOnId = {
  id1: { id: "id1", name: "america", pop: 300000000, continent: "NA" },
  id2: { id: "id2", name: "colombia", pop: 100000000, continent: "SA" },
  id3: { id: "id3", name: "UK", pop: 70000000, continent: "EUR" },
  id4: { id: "id4", name: "France", pop: 80000000, continent: "EUR" },
};

const countriesIndexedOnName = {
  america: { id: "id1", name: "america", pop: 300000000, continent: "NA" },
  colombia: { id: "id2", name: "colombia", pop: 100000000, continent: "SA" },
  UK: { id: "id3", name: "UK", pop: 70000000, continent: "EUR" },
  France: { id: "id4", name: "France", pop: 80000000, continent: "EUR" },
};

const countriesIndexedOnContinent = {
  NA: { id: "id1", name: "america", pop: 300000000, continent: "NA" },
  SA: { id: "id2", name: "colombia", pop: 100000000, continent: "SA" },
  EUR: { id: "id4", name: "France", pop: 80000000, continent: "EUR" },
};
```

## group()

Transform the countries array into an object of indexed arrays.

```js
const countries = [
  { id: "id1", name: "america", pop: 300000000, continent: "NA" },
  { id: "id2", name: "colombia", pop: 100000000, continent: "SA" },
  { id: "id3", name: "UK", pop: 70000000, continent: "EUR" },
  { id: "id4", name: "France", pop: 80000000, continent: "EUR" },
];
```

### Array grouped on key with unique values

```js
import { group } from "index9";

const result = group(countries).on("id");

expect(result).toEqual(countriesGroupedById); // result below
```

### Array grouped on key with non-unique values

```js
import { group } from "index9";

const result = group(countries).on("continent");

expect(result).toEqual(countriesGroupedByContinent); // result below
```

### Object grouped on key with unique values

```js
import { group, index } from "index9";

const countriesIndexedById = index(countries).on("id");
const result = group(countriesIndexedById).on("name");

expect(result).toEqual(countriesGroupedByName); // result below
```

### Object grouped on key with non-unique values

```js
import { group, index } from "index9";

const countriesIndexedById = index(countries).on("id");
const result = group(countriesIndexedById).on("continent");

expect(result).toEqual(countriesGroupedByContinent); // result below
```

```js
const countriesGroupedById = {
  id1: [{ id: "id1", name: "america", pop: 300000000, continent: "NA" }],
  id2: [{ id: "id2", name: "colombia", pop: 100000000, continent: "SA" }],
  id3: [{ id: "id3", name: "UK", pop: 70000000, continent: "EUR" }],
  id4: [{ id: "id4", name: "France", pop: 80000000, continent: "EUR" }],
};

const countriesGroupedByName = {
  america: [{ id: "id1", name: "america", pop: 300000000, continent: "NA" }],
  colombia: [{ id: "id2", name: "colombia", pop: 100000000, continent: "SA" }],
  UK: [{ id: "id3", name: "UK", pop: 70000000, continent: "EUR" }],
  France: [{ id: "id4", name: "France", pop: 80000000, continent: "EUR" }],
};

const countriesGroupedByContinent = {
  NA: [{ id: "id1", name: "america", pop: 300000000, continent: "NA" }],
  SA: [{ id: "id2", name: "colombia", pop: 100000000, continent: "SA" }],
  EUR: [
    { id: "id3", name: "UK", pop: 70000000, continent: "EUR" },
    { id: "id4", name: "France", pop: 80000000, continent: "EUR" },
  ],
};
```

## leftJoin()

leftJoin the countries array into an indexed object, similar to that of an SQL left join.

```js
const customers = {
  id1: { id: "id1", cus_name: "Rob Molloy" },
  id2: { id: "id2", cus_name: "Judy Molloy" },
  id3: { id: "id3", cus_name: "Nick Molloy" },
};

const contacts = {
  idA: { id: "idA", con_address: "+447934647667", con_cus_id: "id1" },
  idB: { id: "idB", con_address: "+447801953992", con_cus_id: "id2" },
  idC: { id: "idC", con_address: "+441442392719", con_cus_id: "id2" },
  idD: { id: "idD", con_address: "+447708040285", con_cus_id: "id3" },
};
```
