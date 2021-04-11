const opts = { crossDomain: true }

const API_URL = 'https://swapi.dev/api/'
const PEPLE_URL = 'people/:id'

function obtenerPersonaje(id, callback) {

    return new Promise((resolve, reject) => {

        const url = `${API_URL}${PEPLE_URL.replace(':id', id)}`

        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))

    })

}

function onError(id) {

    console.log(`Sucedio un error al obtener el personaje ${id}`)

}

async function obtenerPersonajes() {

    var ids = [1, 2, 3, 4, 5, 6, 7]

    var promesas = ids.map(id => obtenerPersonaje(id))

    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }

}

obtenerPersonajes()