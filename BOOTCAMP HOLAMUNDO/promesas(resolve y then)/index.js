// una promesa es un valor que se va resolver eventualmente en el futuro


const x = Promise.resolve(2)
console.log(x)


const y = Promise.resolve(5) 
            .then(valor => console.log(valor))



const a = Promise.resolve(7) 
            .then(valor => valor + 1)
            .then(valor => console.log(valor))



const b = Promise.reject(9) 
            .then(valor => valor + 1)
            .then(valor => console.log(valor))
            .catch(e => console.error(e))