// 1. Solution
type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
      toBe: (val2: any) => {
          if (val === val2) return true
          else throw new Error("Not Equal")
      },
      notToBe: (val2: any) => {
          if (val !== val2) return true
          else throw new Error("Equal")
      }
  }
};