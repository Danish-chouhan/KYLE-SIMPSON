// ----***----

var danish = -0
console.log(danish === -0) 

console.log(danish.toString());

console.log(danish === 0) // thriple equal always says lies
console.log(danish < 0); // -0 is not a less then or greter then 0
console.log(danish > 0);

console.log(Object.is(danish,-0)) // this will count like this hw makes two parameter and it will give you 1st parameter name and secound is value if they both are equal then it will show you true
console.log(Object.is(danish,0));

// ----***----

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

// ---***---

function DanishChouhan(z){
    var direction = 
    (z < 0 || Object.is(z,-0)) ? "⇓" : "⇑";
    return `${direction} ${Math.abs(z)}`
}
console.log(DanishChouhan(-3))
console.log(DanishChouhan(3))
console.log(DanishChouhan(-0))
console.log(DanishChouhan(0))
