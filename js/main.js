// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");

// function saludar(nombre) {
//     console.log("Bienvenido " + nombre);
//     alert("bienvenido " + nombre +"!")
// }

// saludar(nombre + " " + apellido);
// let reserva = prompt("¿Desea reservar una cena?");

// if (reserva.toLowerCase() === "si") {
//     alert("Gracias por la reserva.");
//     console.log("Mensaje de reserva aprobada.");
// }
// else{
//     alert("en otro mometo sera");
// }

// let menu = prompt("decide un menu camarones o salmon ")
//     switch (menu) {
        
//         case "camarones":
//             alert("has elejido camarones ")
//             adultosCamarones = parseInt(prompt("¿Cuántos adultos serán para la cena de camarones?"));
//             ninosCamarones = parseInt(prompt("¿Cuántos niños serán para la cena de camarones?"));
//             let totalCamarones = adultosCamarones + ninosCamarones;
//             console.log("Total de platos de camarones reservados:", totalCamarones);
//             alert("Su total de platos reservados de camarones es " + totalCamarones);
            
//             break;
            
//             case "salmon":
//                 alert("has elejido salmon ")
//                 adultosSalmones = parseInt(prompt("¿Cuántos adultos serán para la cena de salmones?"));
//                 ninosSalmones = parseInt(prompt("¿Cuántos niños serán para la cena de salmones?"));
//                 let totalSalmones = adultosSalmones + ninosSalmones;
//                 console.log("Total de platos de salmones reservados:", totalSalmones);
//                 alert("Su total de platos reservados de salmones es " + totalSalmones);

            
//             break;
    
//         default:
//             alert("son las opciones disponibles")
//             break;
//     }





alert (new Date())
    const reserva1 = {
        nombreDeReserva: prompt("Ingrese el nombre de la reserva:"),
        fechaDeReserva: prompt("Ingrese la fecha de la reserva:"),
        ubicacion: prompt("Ingrese la ubicación:")
    };

    console.log(reserva1);
    alert(reserva1)


    const platosEntrada = [
        { nombre: 'queso', precio: 1000 },
        { nombre: 'salamin', precio: 1500 },
        { nombre: 'papas', precio: 500 },
        { nombre: 'guacamole', precio: 1000 },
        { nombre: 'empanadas', precio: 1500 },
        { nombre: 'camarones', precio: 2000 }
    ];
    
    const platosPrincipales = [
        { nombre: 'salmon', precio: 1500 },
        { nombre: 'camarones', precio: 1200 },
        { nombre: 'entraña', precio: 1800 },
        { nombre: 'vacio', precio: 20000 },
        { nombre: 'bacalao', precio: 1600 }
    ];
    
    platosPrincipales.splice(2, 5);
    platosEntrada.slice(1, 5);
    platosPrincipales.unshift({ nombre: 'asado', precio: 2200});
    
    const totalDePlatos = platosEntrada.concat(platosPrincipales);
    
    console.log(totalDePlatos);
    
    
    console.log(platosEntrada.length);
    console.log(platosPrincipales.length);
    console.log(totalDePlatos);

    const menorPresio = totalDePlatos.filter(platos => platos.precio < 1800)
console.log(menorPresio)


const platosMasEconominos = menorPresio.map(menorPresio => menorPresio.nombre)
console.log(platosMasEconominos);


let precioFinal = 0; 
for (let plato of menorPresio) {
    precioFinal += plato.precio;
}

console.log(precioFinal);







































































