# BigInt

* syntax
```javascript
var a = 14n
document.write(typeof a) //BigInt
```
> there is one more way to write this

```javascript
var a = BigInt(14)
document.write(typeof a)// BigInt
```
> there are some difference between (BigInt) and (Number)

> ___Difference Between (Number and BigInt)___ - BigInt values are similar to Number values in some ways, but also differ in a few key matters: A BigInt value cannot be used with methods in the built-in Math object and cannot be mixed with a Number value in operations; they must be coerced to the same type