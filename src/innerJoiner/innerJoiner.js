import { groupArrayOfObjects, prefixArrayOfObjects, join } from '../..'

const innerJoiner = (leftRows, rightRows, leftJoinKey, rightJoinKey, leftPrefix, rightPrefix) => {
  const rtn = []

  leftRows = prefixArrayOfObjects(leftRows).keys.with(leftPrefix)
  rightRows = prefixArrayOfObjects(rightRows).keys.with(rightPrefix)

  leftJoinKey = `${leftPrefix || ''}${leftJoinKey}`
  rightJoinKey = `${rightPrefix || ''}${rightJoinKey}`

  const rightGrouped = groupArrayOfObjects(rightRows).on(rightJoinKey)

  return join(leftRows).to(rightGrouped).where(leftJoinKey).matchesIndex().ifNoMatch()
}


export const innerJoinArrayOfObjects = (rightRows, rightPrefix) => ({
  to: (leftRows, leftPrefix) => ({
    where: (rightJoinKey) => ({
      matches: (leftJoinKey) => innerJoiner(leftRows, rightRows, leftJoinKey, rightJoinKey, leftPrefix, rightPrefix)
    })
  })
})
