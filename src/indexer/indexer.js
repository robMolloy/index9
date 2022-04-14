const indexer = (arrayOfObjects, key) => {
  const indexed = {}
  arrayOfObjects.forEach((item) => {
    const newIndex = item[key]
    indexed[newIndex] = item 
  })
  return indexed
}

const objectIndexer = (objectOfObjects, key) => {
  return indexer(Object.values(objectOfObjects), key)
}

export const indexArrayOfObjects = (arrayOfObjects) => ({
  on: (key) => {
    return indexer(arrayOfObjects, key)   
  }
})

export const indexObjectOfObjects = (objectOfObjects) => ({
  on: (key) => {
    return objectIndexer(objectOfObjects, key)   
  }
})
