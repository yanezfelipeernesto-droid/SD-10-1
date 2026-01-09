export function costCalculator(transactionAmount) {
    // asegurando que el monto introducido sea considerado como número y no como caracter para evitar concatenación de carácteres. 
    const monto = Number(transactionAmount);
    // tarifa fija 
    const tarifa = 3;
    // interes del 1%
    const interes = transactionAmount*0.01
    // costo total
    const totalCosto = monto + tarifa + interes; 


    return totalCosto; 
}
