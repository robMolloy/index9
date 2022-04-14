const grouper = (arrayOfObjects, key) => {
  const grouped = {}

  arrayOfObjects.forEach((object) => { 
    const newIndex = object[key]
    grouped[newIndex] = []
  })
  arrayOfObjects.forEach((object) => {
    const newIndex = object[key]
    grouped[newIndex].push(object)
  })

  return grouped
}

const objectGrouper = (objectOfObjects, key) => {
  return grouper(Object.values(objectOfObjects), key)
}

export const group = (arrayOfObjects) => ({
  on: (key) => {
    return grouper(arrayOfObjects, key)   
  }
})

export const groupObjects = (objectOfObjects) => ({
  on: (key) => {
    return objectGrouper(objectOfObjects, key)   
  }
})
