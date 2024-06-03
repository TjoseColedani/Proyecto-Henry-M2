class CarritoCompra {
    constructor(){
        this.nombre = []
    }

    agregarProducto(...productos){
        this.nombre.push(...productos)
    }

    calcularTotal(){
        let total = this.nombre.reduce((total,producto) => { return total + producto.precio * producto.cantidad},0);
        return total;
    }

    aplicarDescuento(descuento){
        let total = this.calcularTotal();
        let descuentoSobrePrecio = total * descuento / 100;
        let totalConDescuento = total - descuentoSobrePrecio;
        return totalConDescuento;
    }
}

module.exports = {CarritoCompra};