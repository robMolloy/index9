export const index = (obj) => {
  const on = (key) => {
    const indexed = {};
    const values = Object.values(obj);

    values.forEach((obj1) => { 
      indexed[obj1[key]] = obj1
    });
    return indexed;
  };

  return { on };
};
