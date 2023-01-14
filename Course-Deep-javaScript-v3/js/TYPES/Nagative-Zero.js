// ----***----

var danish = -0
console.log(danish === -0) 

console.log(danish.toString());

console.log(danish === 0) // thriple equal always says lies
console.log(danish < 0); // -0 is not a less then or greter then 0
console.log(danish > 0);

console.log(Object.is(danish,-0)) // this will count like this hw makes two parameter and it will give you 1st parameter name and secound is value if they both are equal then it will show you true
console.log(Object.is(danish,0));