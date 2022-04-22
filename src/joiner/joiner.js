export join = (object1) => ({
  to: (object2) => ({
    where: () => ({
      matches: () => ({
        ifUndefined: (fnOnUndefined) => {
          fnOnUndefined = fnOnUndefined || () => ({})
          
        }
      })
    })
  })
})