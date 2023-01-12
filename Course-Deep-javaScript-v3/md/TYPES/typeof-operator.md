# typeof-Operator

> first we learn about object and not an object

```javascript
// PRIMITIVE TYPES / non objects
var a;
document.write(typeof a + "<br>") // "undifined"  // people think that this is a difined for parmanent its not a parmanent its a temprorly not defined when it will defined then it will not a undifined

a = 17
document.write(typeof a + "<br>") // "Number"

a = "Danish"
document.write(typeof a + "<br>") // "String"

a = {}
document.write(typeof a + "<br>") // "object"

a = true
document.write(typeof a + "<br>") // "bulleon"

a = Symbol()
document.write(typeof a + "<br>") // "symbol"
```

> in this you may see that all typeof retuns types in string if it will return all in string that's is the confirm that this is a sort EnomList

> what is EnomList? = enum is a special "class" that represents a group of constants (unchangeable variables). Enums come in two flavors string and numeric .

> these all are behave like an object but these are not an object

> the real object is
```javascript
// nonPrimitive types/ objects

document.write(typeof doesntexist + "<br>")

v = null
document.write(typeof v + "<br>")

v = function(){}

document.write(typeof v + "<br>")

v = [1,2,3,4,5]

document.write(typeof v + "<br>")
```
> these are objects