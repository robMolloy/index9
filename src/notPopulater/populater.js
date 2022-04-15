import { groupArrayOfObjects } from '../grouper/grouper'

const populater = (left, right, leftJoinKey, rightJoinKey, aliasKey)=>{
  const rightGrouped = groupArrayOfObjects(right).on(rightJoinKey)

  Object.values(left).forEach((leftRow) => {
    const leftGroupSelector = leftRow[leftJoinKey]
    const rightGroupSelection = rightGrouped[leftGroupSelector] 
    
    const fallback = []
    leftRow[aliasKey] = rightGroupSelection || fallback
  })
  
  return left
}


export const populateArrayOfObjects = (left) => ({
  in: (right) => ({
    where: (rightJoinKey) => ({
      matches: (leftJoinKey) => ({
        onAlias: (aliasKey) => populater(left, right, leftJoinKey, rightJoinKey, aliasKey)
      })
    })
  })
})
