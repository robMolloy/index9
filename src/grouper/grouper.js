export class Grouper {
  constructor(obj) {
    this.obj = obj
    this.indexed = {}
    this.orderKey = 'id'

    return this
  }

  orderValuesBy(orderKey) {
    this.orderKey = orderKey
  }

  by(key) {
    const entries = Object.entries(this.obj)
    const indexed = {}

    entries.forEach(([, obj1]) => { (indexed[obj1[key]] = {}) })
    entries.forEach(([id, obj1]) => {
      indexed[obj1[key]][id] = obj1
    })

    if (this.orderKey) {
      Object.entries(indexed).forEach(([id, obj1]) => {
        indexed[id] = Object.values(obj1).sort(
          (a, b) => a[this.orderKey] - b[this.orderKey],
        )
      })
    }

    this.indexed = indexed
    return indexed
  }

  on(key) {
    return this.by(key)
  }
}

export const group = (obj) => new Grouper(obj)
