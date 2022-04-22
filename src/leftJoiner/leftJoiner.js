import { groupArrayOfObjects, prefixArrayOfObjects, join } from '..'

const leftJoiner = (leftRows, rightRows, leftJoinKey, rightJoinKey, leftPrefix, rightPrefix) => {
  const rtn = []

  leftRows = prefixArrayOfObjects(leftRows).keys.with(leftPrefix)
  rightRows = prefixArrayOfObjects(rightRows).keys.with(rightPrefix)

  leftJoinKey = `${leftPrefix || ''}${leftJoinKey}`
  rightJoinKey = `${rightPrefix || ''}${rightJoinKey}`

  const rightGrouped = groupArrayOfObjects(rightRows).on(rightJoinKey)

  return join(leftRows).to(rightGrouped).where(leftJoinKey).matchesIndex().ifNoMatch((row)=>[{...row}])
}


export const leftJoinArrayOfObjects = (rightRows, rightPrefix) => ({
  to: (leftRows, leftPrefix) => ({
    where: (rightJoinKey) => ({
      matches: (leftJoinKey) => leftJoiner(leftRows, rightRows, leftJoinKey, rightJoinKey, leftPrefix, rightPrefix)
    })
  })
})
