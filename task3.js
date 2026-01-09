export function ageCalculator(año, mes, día) {
    // Asegurar que sean números
    año = Number(año);
    mes = Number(mes);
    día = Number(día);

    // Verificar que la conversión fue exitosa
    if (isNaN(año) || isNaN(mes) || isNaN(día)) {
        throw new Error('Los parámetros deben ser números válidos');
    
    }

    // fecha de nacimiento 
    const fechaNac = new Date(año, mes-1, día);
    //fecha ctula
    const fechaActual = new Date();
    
    // calcular diferencia en años
    let edad = fechaActual.getFullYear() -fechaNac.getFullYear();

    // calcular diferencia en meses 
    const diferenciaMeses = fechaActual.getMonth()- fechaNac.getMonth(); 

    //calcular diferencia en días
    const diferenciaDias = fechaActual.getDate() - fechaNac.getDate(); 

    // checa rsi aún no cumple años 

    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
        edad--;
    }
    
    return edad;

}


// no sé porque no me sale :( 