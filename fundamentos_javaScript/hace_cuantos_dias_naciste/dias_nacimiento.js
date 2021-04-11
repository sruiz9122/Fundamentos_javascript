function diasEntreFechas(fecha1, fecha2) {

    const unDia = 1000 * 60 * 60 * 24 // Milisegundos*Segundos*Horas*24Horas
    const diferencia = Math.abs(fecha1 - fecha2)

    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1991, 5, 22)//Año/(Mes-1)/Día