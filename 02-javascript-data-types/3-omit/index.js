/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const entries = Object.entries(obj);
  let result = obj;
  for (let field of fields) {
    for (let entry of entries) {
      if (field === entry[0]) {
        delete result[field];
      }
    }
  }

  return result;
};
