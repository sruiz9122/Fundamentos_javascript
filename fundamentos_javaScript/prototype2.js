class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(){
        if (this.altura > 1.8) {
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura} mts. Me considero una persona Alta`)
        } else {
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura} mts. Me considero una persona Baja`)
        }
    }
    
    soyAlto() {
        return this.altura > 1.8
    }
}

//Clase hereda clase - Herencia prototipal
class Desarrollador extends Persona {
    constructor (nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un Desarrollador/a`)
    }
}

//Crear las variables para ejecutar los objetos.
//var sacha = new Desarrollador ('Sacha', 'lifszyc', 1.72)
//var arturo = new Persona ('Arturo', 'lifszyc', 1.92)

//Mostrar resultado en consola.
//sacha.saludar()
//arturo.saludar()







