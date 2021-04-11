function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    if (this.altura > 1.8) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura} mts. Me considero una persona Alta`)
    } else {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura} mts. Me considero una persona Baja`)
    }
}

//Forma A de hacerlo
Persona.prototype.soyAlto = function(){
    return this.altura > 1.8
}

//Forma B de hacerlo - Array function
//en este arreglo lapalabra this toma el valor windows por tanto el valor no tendria definición 
// Persona.prototype.soyAlto = () => {
//     debugger
//     return this.altura > 1.8
// }

//Herencia prototipal
function Desarrollador (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un Desarrollador`)
}



// var sergio = new Persona('Sergio', 'Ruiz', 1.80)
// var erika = new Persona('Erika', 'Ruiz', 1.70)
// var arturito = new Persona('Arturito', 'Ruiz', 1.90)

// sergio.saludar()
// erika.saludar()
// arturito.saludar()




