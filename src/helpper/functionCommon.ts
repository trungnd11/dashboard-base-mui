export const isEmptyArray = (inputArray: any[] | any) => {
  return Array.isArray(inputArray) && inputArray.length === 0;
};

export const isEmptyObject = (inputObject: Object) => {
  return Object.keys(inputObject).length === 0;
};