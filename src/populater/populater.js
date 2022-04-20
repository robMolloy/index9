import { indexArrayOfObjects } from '../..'

const populater = (left, right, leftJoinKey, rightJoinKey, aliasKey)=>{
  const rightIndexed = indexArrayOfObjects(right).on(rightJoinKey)
  aliasKey = aliasKey || leftJoinKey

  Object.values(left).forEach((leftRow) => {
    const leftItemSelector = leftRow[leftJoinKey]
    const rightItemSelection = rightIndexed[leftItemSelector] 

    const fallback = {}
    leftRow[aliasKey] = rightItemSelection || fallback
  })
  
  return left
}


export const populateArrayOfObjects = (left, aliasKey) => ({
  with: (right) => ({
    where: (leftJoinKey) => ({
      matches: (rightJoinKey) => populater(left, right, leftJoinKey, rightJoinKey, aliasKey)
    })
  })
})
