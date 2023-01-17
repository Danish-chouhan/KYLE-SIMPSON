console.log(Number(""));  // 0 // its becouse empty string is always be (0)
console.log((Number(null)));  // 0
console.log((Number(undefined))); // NaN  // its becouse we not give a value to number so it will returns us NaN
console.log(Number(([])))  // 0 // its becouse there was a array but before array it will make a empty string
console.log(Number([1, 2, 3]))  // NaN
console.log(Number([null])) // 0
console.log(Number([undefined]))  // 0
console.log(Number({}))  // NaN // object never count string property first so it will return NaN

// String Corner Coses
console.log(String(-0))  // '0' // string property ne
console.log(String(null)) // 'null'
console.log(String(undefined))  // 'undefined'
console.log(String([null])) // ''
console.log(String([undefined])) // ''

// On an Object
console.log(Boolean(new Boolean(false))) // true, we can dont give primitive value on a boolean object we just ask is it on false list or not;