export class Indexer {
  constructor(obj) {
    this.obj = obj;
    this.indexed = {};
    return this;
  }

  on(key) {
    const entries = Object.entries(this.obj);
    const indexed = {};

    entries.forEach(([, obj1]) => { (indexed[obj1[key]] = obj1); });
    this.indexed = indexed;
    return indexed;
  }
}

export const index = (obj) => new Indexer(obj);
