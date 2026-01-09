export class FriendAge {
    constructor(nombre, año, mes, día) {
        this.nombre = String(nombre);
        this.año = Number(año);
        this.mes = Number(mes);
        this.día = Number(día);
    }

    returnAge() {
        const fechaNac = new Date(this.año, this.mes - 1, this.día);
        const fechaActual = new Date();
        
        let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
        const diferenciaMeses = fechaActual.getMonth() - fechaNac.getMonth();
        const diferenciaDias = fechaActual.getDate() - fechaNac.getDate();
        
        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
            edad--;
        }
        
        return `${this.nombre} tiene ${edad} hoy!`;
    }
}