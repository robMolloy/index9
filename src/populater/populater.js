import { group } from '../grouper/grouper'

const populater = (left, right, leftJoinKey, rightJoinKey, aliasKey)=>{
  const isRightArray = Array.isArray(right)
  const rightGrouped = group(right).on(rightJoinKey)

  Object.values(left).forEach((leftRow) => {
    const leftGroupSelector = leftRow[leftJoinKey]
    const rightGroupSelection = rightGrouped[leftGroupSelector] 
    
    const fallback = isRightArray ? [] : {}
    leftRow[aliasKey] = rightGroupSelection || fallback
  })
  
  return left
}


export const populate = (left) => ({
  in: (right) => ({
    where: (rightJoinKey) => ({
      matches: (leftJoinKey) => ({
        onAlias: (aliasKey) => populater(left, right, leftJoinKey, rightJoinKey, aliasKey)
      })
    })
  })
})
