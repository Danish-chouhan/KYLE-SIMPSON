# NaN - isNaN
### syntax

```javascript
var myAge = Number("0o21")
console.log(myAge);

var myNextAge = Number("0o22")
console.log(myNextAge);

var myCatsAge = Number("n")
console.log(myCatsAge);

console.log(myAge - "danish");

console.log(myCatsAge === myCatsAge);

console.log(isNaN(myAge));

console.log(isNaN(myCatsAge));

console.log(isNaN("Danish"));

console.log(Number.isNaN(myCatsAge));
console.log(Number.isNaN("Danish-chouhan"));
```
> in line (1) i represent the number in octal but this will number so it will returns you value in number

> in line no (6) this is also a number in octal so this will returns you value in number

> in line no (7) i give a string in number method so this will returns you a (NaN) - not a number(invalid-number)

> in line n (10) i give mynus (-) in between myAge and string value so it will be (NaN) becouse (-) mynus wants a value in number if you dont give a number then it will be (NaN)

> in line no (12) i maked triple equal (===) you no that === wants all two values equal if two values are same then it will gave you true but in this (NaN) is not equal to him so thats the reason it will give you false

> now we come to (isNaN) in line no 14 i asked that my age variable is a invalid number then it will returns false becouse i putted number in myAge variable is this will a valid number so this will show you false

> now we comes to (NUMBER.isNaN) this will show you that the value inside NUMBER is a NaN or not so this is why this will show you true becouse the value inside number is a NaN(invalid number)