var Sergio = {
    nombre: 'Sergio',
    apellido: 'Ruiz',
    altura: 1.80
};

var andres = {
    nombre: 'andres',
    apellido: 'Ruiz',
    altura: 1.79
};

var camila = {
    nombre: 'camila',
    apellido: 'Ruiz',
    altura: 1.70
};

var sara = {
    nombre: 'sara',
    apellido: 'Ruiz',
    altura: 1.81
};

var eneida = {
    nombre: 'eneida',
    apellido: 'Ruiz',
    altura: 1.60
};

var otobebe = {
    nombre: 'otobebe',
    apellido: 'Ruiz',
    altura: 0.10
};
const esBaja = persona => {
    return persona.altura < 1.8
};

var personas = [Sergio, andres, camila, sara, eneida, otobebe];
console.log(`Personas del arreglo`);
console.log(personas);

console.log(`Personas que miden menos de 1.8 cm`);
var personasBajas = personas.filter(esBaja);

console.log(personasBajas);

console.log(`Modifica arreglo pasando de metros a centimetros, sin afectar arreglo original`);

//Forma A
const pasarAlturaACm = (persona) => (
    {
        ...persona,
        altura: persona.altura * 100
    }
);

//Forma B
/*const pasarAlturaACm = (persona) => {
    return {
        ...persona,
        altura: persona.altura * 100
    }
};*/

var personasCms = personas.map(pasarAlturaACm);
console.log(personasCms);

