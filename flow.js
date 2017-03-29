// @flow
 export function add(a: number, b: number) {
   return a + b;
 }

 export function trim(s: string) {
   return s.replace(/(^\s+)|(\s+$)/g, '');
 }

 export function string2Byte(str: string) {
   const bytes = new Array();
   let len = 0;
   let c;
   len = str.length;
   for (let i = 0; i < len; i += 1) {
     c = str.charCodeAt(i);
     if (c >= 0x010000 && c <= 0x10FFFF) {
       bytes.push(((c >> 18) & 0x07) | 0xF0);
       bytes.push(((c >> 12) & 0x3F) | 0x80);
       bytes.push(((c >> 6) & 0x3F) | 0x80);
       bytes.push((c & 0x3F) | 0x80);
     } else if (c >= 0x000800 && c <= 0x00FFFF) {
       bytes.push(((c >> 12) & 0x0F) | 0xE0);
       bytes.push(((c >> 6) & 0x3F) | 0x80);
       bytes.push((c & 0x3F) | 0x80);
     } else if (c >= 0x000080 && c <= 0x0007FF) {
       bytes.push(((c >> 6) & 0x1F) | 0xC0);
       bytes.push((c & 0x3F) | 0x80);
     } else {
       bytes.push(c & 0xFF);
     }
   }
   return bytes;
 }

 export function byte2String(arr: Array<number>) {
   if (typeof arr === 'string') {
     return arr;
   }
   let str = '';
   const thisArr = arr;
   for (let i = 0; i < thisArr.length; i += 1) {
     const one = thisArr[i].toString(2);
     const v = one.match(/^1+?(?=0)/);
     if (v && one.length === 8) {
       const bytesLength = v[0].length;
       let store = thisArr[i].toString(2).slice(7 - bytesLength);
       for (let st = 1; st < bytesLength; st += 1) {
         store += thisArr[st + i].toString(2).slice(2);
       }
       str += String.fromCharCode(parseInt(store, 2));
       i += bytesLength - 1;
     } else {
       str += String.fromCharCode(thisArr[i]);
     }
   }
   return str;
 }
