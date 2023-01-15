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

# Example with math.sing()

# Syntax

```javascript

console.log(Math.sign(-3));
console.log(Math.sign(3))
console.log(Math.sign(-0));
console.log(Math.sign(0));

function chouhan(x){
    return x !== 0 ? Math.sign(x) : Object.is(x,-0)? -1 : 1;
}

console.log(chouhan(-3));
console.log(chouhan(3));
console.log(chouhan(0));
console.log(chouhan(-0))
```
> the math sing mathod always returns you (1) or (0)
if we give value of number upon 1 then it will returns us 1 this will not give you exit value it will changed by one if we putted value in 0 zeros then it will be zero becouse math.sing always returns (0,1) if we putted value in negative form then it will returns you in nagative like -0 , -1 

---

# Example in arrrow form

# Syntax

```javascript
function DanishChouhan(z){
    var direction = 
    (z < 0 || Object.is(z,-0)) ? "⇓" : "⇑"; // these arrowa are png only
    return `${direction} ${Math.abs(z)}`
}
console.log(DanishChouhan(-3))
console.log(DanishChouhan(3))
console.log(DanishChouhan(-0))
console.log(DanishChouhan(0))
```

> I test -0 with the help of logical operator,object.is,math.abs methods
so i m going to tell you how is this method

> in line no (1st) a maked a functon names (DanishChouhan) and give him a parameter name (z)

> in line number (2nd) i make a variable named direction 

> in line number (3rd) i maked logical operator (z < 0 || Object.is(z,-0)) ? "⇓" : "⇑";
these is saying if the parameter z is less then 0 then paste down word arraw and if parameter z is greter then 0 then returns up word arrow

> then i return them i returns 1st variable then i want abolute value 

> in calling i gived -3 in parameter then it will returns me down words arrow and then absolute value

# THE END