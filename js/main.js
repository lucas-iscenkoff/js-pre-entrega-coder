let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

function saludar(nombre) {
    console.log("Bienvenido " + nombre);
    alert("bienvenido " + nombre +"!")
}

saludar(nombre + " " + apellido);
let reserva = prompt("¿Desea reservar una cena?");

if (reserva.toLowerCase() === "si") {
    alert("Gracias por la reserva.");
    console.log("Mensaje de reserva aprobada.");
}
else{
    alert("en otro mometo sera");
}

let menu = prompt("decide un menu camarones o salmon ")
    switch (menu) {
        
        case "camarones":
            alert("has elejido camarones ")
            adultosCamarones = parseInt(prompt("¿Cuántos adultos serán para la cena de camarones?"));
            ninosCamarones = parseInt(prompt("¿Cuántos niños serán para la cena de camarones?"));
            let totalCamarones = adultosCamarones + ninosCamarones;
            console.log("Total de platos de camarones reservados:", totalCamarones);
            alert("Su total de platos reservados de camarones es " + totalCamarones);
            
            break;
            
            case "salmon":
                alert("has elejido salmon ")
                adultosSalmones = parseInt(prompt("¿Cuántos adultos serán para la cena de salmones?"));
                ninosSalmones = parseInt(prompt("¿Cuántos niños serán para la cena de salmones?"));
                let totalSalmones = adultosSalmones + ninosSalmones;
                console.log("Total de platos de salmones reservados:", totalSalmones);
                alert("Su total de platos reservados de salmones es " + totalSalmones);

            
            break;
    
        default:
            alert("son las opciones disponibles")
            break;
    }








    
