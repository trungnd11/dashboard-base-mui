export const isArray = (data: unknown) => Array.isArray(data);

export const isEmptyArray = (inputArray: any[] | any) => {
  return Array.isArray(inputArray) && inputArray.length === 0;
};

export const isEmptyObject = (inputObject: Record<string, unknown>) => {
  return Object.keys(inputObject).length === 0;
};

export const toNumber = (num?: number) => num ? parseInt(num.toString()) : 0;
