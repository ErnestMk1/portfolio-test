export const race = (v1:number, v2:number, g:number): number[] => {
  const minV1 = v1 / 60;
  const minV2 = v2 / 60;

  return [1, 2, 3];
};

console.log(race(720, 850, 70));  // [0, 32, 18]
// !B has to be 70 feet more!

const a = 80 / 60 * 201.60;
const b = 91 / 60 * 201.60;
console.log(b - a);
