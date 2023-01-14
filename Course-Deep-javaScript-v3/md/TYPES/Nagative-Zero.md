# -0

---
# syntax
```javascript

var danish = -0
console.log(danish === -0) // true

console.log(danish.toString()); // "0"

console.log(danish === 0) // true
console.log(danish < 0); // false
console.log(danish > 0); // false

console.log(Object.is(danish,-0)) //true
console.log(Object.is(danish,0)); // false
```
> now i tell you in best way what is -0 (nagative zero)

> in line no (1) i make a variable and assign a nagetive zero (-0)

> in line number (2) i ask that variable is equals to -0 then he said that (true) (remember that triple equal always laies) thus this is equal to -0 but if i ask in line number (6) variable is equal to 0 then it also returns true i said you that triple equal always lies

> in line number (7) and (8) i asked that the -0 is less then or greter then 0 then it will always returns false becouse -0 is not a less then or greter then 0 but if you see like matamatician that is less then 0

> now i telling you about (object.is(,)) method it will returns you two parameter (nameOfVariable,value)

> in line number 10 i ask that variable is equals to -0 then it returns true

---
