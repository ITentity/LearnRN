// @flow
 export function add(a: number, b: number) {
   return a + b;
 }

// 去字符串前后的空格
 export function trim(s: string) {
   return s.replace(/(^\s+)|(\s+$)/g, '');
 }

 // 去字符串中所有的空格
 export function trimAll(s: string) {
   return s.replace(/\s/g, '');
 }
