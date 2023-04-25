//Spread operator es utilizado para generar una copia exacta de un objeto, que no afecta la copia original

const a = { "b" : "a"}
console.log(a)


const b = a
console.log(b)

b.c = 2
console.log(b)
console.log(a)
//como se puede ver en este ejemplo, al agregar la clave c a la constante "b", también se le agrega a la constante original que es "a"

//creando una copia con spread operator
const c = { ... a } 
c.d = 15

console.log(c)
console.log(a)
console.log(b)