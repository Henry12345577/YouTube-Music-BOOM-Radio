/**
 * This is a plain JS function, but it can have types associated by using JSDoc comments like this one.
 * @param {number} arg
 */
export function someJsdocFunction(arg) {
  console.log("Hello from JS!", Math.pow(arg, 2));
  return 1;
}

// The argument of this function will be typed as `any` in TypeScript.
export function somePlainFunction(arg) {
  console.log("Hello from JS!", arg);
  return 1;
}
