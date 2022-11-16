// Ejercicio 1

doubleNum = num => num*2;
console.log(doubleNum(5))

//Ejercicio 2

cuadrado = num => num*num;
console.log(cuadrado(10))

//Ejercicio 3

areaRectangulo = (base,altura) => base * altura;
console.log('El área del cuadrado es: ' + areaRectangulo(43,20))

// Ejercicio 4

parImpar = num => {
    if (num % 2 === 0) {
        console.log('El número es par')
    } else {
        console.log('El numero es impar')
    }
}
parImpar(5)

// Ejercicio 5 1parte ok / Segunda y tercera ????
// array dado
const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
];

//Apuntes de js
// personas.forEach(elemento =>{
//     if (elemento.edad >= 18) {
//         console.log(elemento.nombre + ' es mayor de edad')
//     }
// })
// function personasMayores(personas){
//     const mayores = []
//     if(personas.edad >= 18){
//         mayores.push(personas.nombre)
//     }
//     return mayores
// }
// console.log(personasMayores(personas))
//CORREGIDO
function mayoresDeEdad(personas) {
    const mayores = [];
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].edad >= 18) {
        mayores.push(personas[i]);
      }
    }
    return mayores;
  }
  console.log(mayoresDeEdad(personas));

  function masJoven(personas) {
    let masJoven = personas[0];
    for (let i = 1; i < personas.length; i++) {
      if (personas[i].edad < masJoven.edad) {
        masJoven = personas[i];
      }
    }
    return masJoven;
  }
  console.log(masJoven(personas))
  function masMayor(personas) {
    let masMayor = personas[0];
    for (let i = 1; i < personas.length; i++) {
      if (personas[i].edad > masMayor.edad) {
        masMayor = personas[i];
      }
    }
    return masMayor;
  }
  console.log(masMayor(personas))
// mayoresDeEdad = persona => {
//     if (persona.edad >= 18) {
//         console.log(persona.nombre + ' es mayor de de edad')
//     }
// }

// mayoresDeEdad(personas)

// Ejercicio 6

const pokemons = [
    {nombre: 'Pikachu', tipo: 'rayo'},
    {nombre: 'Pidgey', tipo: 'volador'},
    {nombre: 'Rapidash', tipo: 'fuego'},
    {nombre: 'Celebi', tipo: 'planta'},
    {nombre: 'Groudon', tipo: 'fuego'}
]
pokemons.forEach(pokemon =>{
    console.log(pokemon.nombre)
})
pokemons.forEach(pokemon => {
    if(pokemon.tipo == 'fuego'){
        console.log(pokemon.nombre + ' es de tipo fuego')
    }
})


  

