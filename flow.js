// @flow
 export function add(a: number, b: number) {
   return a + b;
 }

 export function trim(s: string) {
   return s.replace(/(^\s+)|(\s+$)/g, '');
 }

// 字符串s1以s2开头
 export function startWith(s1: string, s2: string) {
   const reg = new RegExp(`^${s2}`);
   return reg.test(s1);
 }
 // 字符串s1以s2结尾
 export function endWith(s1: string, s2: string) {
   const reg = new RegExp(`${s2}$`);
   return reg.test(s1);
 }
