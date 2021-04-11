//ir a https://jquery.com/
//dar clic en Download jquery
//buscar Using jQuery with a CDN
//Dentro de CDN buscar by visiting https://code.jquery.com 
//CDN Conten delivery network: Servidor que sirve el archivo desde la locación del planeta mas cercano a nosotros
//Descargamos la version 3 - minified
//copiamos el codigo en el archivo html antes de el enlace a nuestro archivo .js
// en consola poner $ con esto validamos que este implementado jquery
// jquery sirve para hacer request a la pagina swapi.dev

const API_URL = 'https://swapi.dev/api/'
const PEPLE_URL = 'people/:id'

//const lukeUrl = `${API_URL}${PEPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true }

//Buscar documentación en Jquery 
//apidocumentation
//buscar jQuery.get()
//Buscar success - Ejecuta el callback function
//para saber los argumentos dentro de la funcion agregar: console.log(arguments)

/* const onPeopleResponse = function (persona) {//esta constante la dejamos dentro de la función obtenerPersonaje y agregamos parametro entrada callback
    //console.log(arguments)
    console.log(`Hola, yo soy ${persona.name}`)
} */

//Obtener datos individual
//$.get(lukeUrl, opts, onPeopleResponse )

//Obtener multiples datos
function obtenerPersonaje(id, callback) {
    //promesas
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEPLE_URL.replace(':id', id)}`

        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))

    })

    //$.get(url, opts, onPeopleResponse) Modificamos esta lina al agregar el parametro entrada callback
    /* $.get(url, opts, function (persona) {
        //console.log(arguments)
        console.log(`Hola, yo soy ${persona.name}`)

        if (callback){
            callback()
        }
    }) *///sintetizamos más el código

    //Con las siguientes lineas se puede hacer un control de errores para callbacks
    //para probar ir al navegador Inspeccionar o f12
    //Clic en la pestaña Network - XHR
    //Desabilitar la cache
    //Refrescamos la página con Ctrl+Shift+R
    //Nos marcamos cómo offline mientras está haciendo el response
    //En consola podemos ver el error

    /* $
        .get(url, opts, callback)
        .fail(() => { //Array function
        console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
    }) */

}

//F12
//Clic en la pestaña Network - XHR
//Desabilitar la cache
//Refrescamos la página con Ctrl+Shift+R
//Nos marcamos cómo offline mientras está haciendo el response
//En consola podemos ver el error
function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes() {
    //Otra forma de llamar el callback de forma paralela, y ordenada. Optimiza tiempos de respuesta
    var ids = [1, 2, 3, 4, 5, 6, 7]

    /* var promesas = ids.map(function (id){
        return obtenerPersonaje(id)
    }) */

    //Forma más ordenada que la anterior línea
    var promesas = ids.map(id => obtenerPersonaje(id))

    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }

    /* Promise
        .all(promesas)
        .then(personajes => console.log(personajes))
        .catch(onError) */
}

obtenerPersonajes()

//Obtenere callback de manera secuencial y ordenada
/* obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })

    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)
    })

    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4)
    })

    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`)
        return obtenerPersonaje(5)
    })

    .then(personaje => {
        console.log(`El personaje 5 es ${personaje.name}`)
        return obtenerPersonaje(6)
    })

    .then(personaje => {
        console.log(`El personaje 6 es ${personaje.name}`)
        return obtenerPersonaje(7)
    })

    .then(personaje => {
        console.log(`El personaje 7 es ${personaje.name}`)

    })

    .catch(onError)
 */


//asincronismo, no sabemos en que orden js nos mostrara la info
/* console.log(`Asincronismo en desorden`)
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
 */

/*
//asincronismo ordenado - Pedir datos en serie y no en paralelo (Callback hell "Infierno de los callbacks")
console.log(`Asincronismo en orden`)

obtenerPersonaje(1, function( personaje ){
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje){
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje){
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function(personaje){
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function(personaje){
                        console.log(`Hola, yo soy ${personaje.name}`)

                       obtenerPersonaje(7, function(personaje){
                            console.log(`Hola, yo soy ${personaje.name}`)

                           obtenerPersonaje(8, function(personaje){
                                console.log(`Hola, yo soy ${personaje.name}`)

                           })
                       })
                    })
                })
            })
        })
    })
})
 */


