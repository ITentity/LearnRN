// @flow
 export function add(a: number, b: number) {
   return a + b;
 }

 export function trim(s: string) {
   return s.replace(/(^\s+)|(\s+$)/g, '');
 }
