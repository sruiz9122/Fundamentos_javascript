var Sergio = {
    nombre: 'Sergio',
    apellido: 'Ruiz',
    altura: 1.80,
    cantidadLibros: 80
}

var andres = {
    nombre: 'andres',
    apellido: 'Ruiz',
    altura: 1.79,
    cantidadLibros: 90
}

var camila = {
    nombre: 'camila',
    apellido: 'Ruiz',
    altura: 1.70,
    cantidadLibros: 100
}

var sara = {
    nombre: 'sara',
    apellido: 'Ruiz',
    altura: 1.81,
    cantidadLibros:110
}

var eneida = {
    nombre: 'eneida',
    apellido: 'Ruiz',
    altura: 1.60,
    cantidadLibros: 120
}

var otobebe = {
    nombre: 'otobebe',
    apellido: 'Ruiz',
    altura: 0.10,
    cantidadLibros: 130
}
var personas = [Sergio, andres, camila, sara, eneida, otobebe]

//Forma A
/* console.log(`Forma A usando for`)
var acum = 0
for (var i = 0 ; i < personas.length; i++){
    acum = acum + personas[i].cantidadLibros
} 
console.log(`En total todos tienen ${acum} libros`)
*/

console.log(`Forma B usando reduce`)
//Forma A de la funcion
/* const reducer = (acum, persona) => {
    return acum + persona.cantidadLibros
} */

//Forma B de la funcion
const reducer = (acum, {cantidadLibros}) => acum + cantidadLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)