import { group } from './grouper';

const leftJoiner = (left, right, leftJoinKey, rightJoinKey, aliasKey)=>{
  const isRightArray = Array.isArray(right)
  const rightGrouped = group(right).on(rightJoinKey);

  Object.values(left).forEach((leftRow) => {
    const leftGroupSelector = leftRow[leftJoinKey];
    const rightGroupSelection = rightGrouped[leftGroupSelector] 
    
    const fallback = isRightArray ? [] : {};
    leftRow[aliasKey] = rightGroupSelection || fallback;
  })
  
  return left;
}


export const leftJoin = (right) => ({
  to: (left) => ({
    where: (rightJoinKey) => ({
      matches: (leftJoinKey) => ({
        onAlias: (aliasKey) => leftJoiner(left, right, leftJoinKey, rightJoinKey, aliasKey)
      })
    })
  })
})
