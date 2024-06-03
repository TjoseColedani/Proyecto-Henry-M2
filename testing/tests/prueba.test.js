const {CarritoCompra} = require("./index")

describe("Class CarritoCompra",() => {
    it("debe estar definido",() => {
        expect(CarritoCompra).toBeDefined();
    })
})

describe("contructor",() => {
    it("debe crear una instancia con una propiedad CarritoCompra que debe contener un array vacio", () => {
        const carrito1 = new CarritoCompra();
        expect(carrito1).toEqual({nombre:[]});
    })
})

describe("agregarProducto",() => {
    it("esta funcion agrega un producto", () => {
        const carrito1 = new CarritoCompra();
        carrito1.agregarProducto({nombre: "Remera"});
        expect(carrito1.nombre).toEqual([{nombre: "Remera"}])
    })
})

describe("calcularTotal", () => {
    it("calcula el precio total", () => {
        const carrito1 = new CarritoCompra();
        carrito1.agregarProducto({nombre: "Pantalon", precio: 50, cantidad: 2},{nombre: "Zapatillas", precio: 65, cantidad: 1});
        expect(carrito1.calcularTotal()).toEqual(165)
    })
})

describe("aplicarDescuento", () => {
    it("aplica descuento al total de la compra segun el porcentaje especificado", () => {
        const carrito1 = new CarritoCompra();
        carrito1.agregarProducto({nombre: "Pantalon", precio: 50, cantidad: 2},{nombre: "Zapatillas", precio: 65, cantidad: 1});
        expect(carrito1.aplicarDescuento(10)).toEqual(148.5)
    })
})


