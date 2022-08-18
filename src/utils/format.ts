export const padZero = (
  str: string,
  len: number = 2
): string => {
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
};