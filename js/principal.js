import CL_Tienda from "./CL_Tienda.js";
import CL_Juguete from "./CL_Juguete.js";
import CL_Decoracion from "./CL_Decoracion.js";


let juguete1 = new CL_Juguete(11, 1, 10, "No");
let juguete2 = new CL_Juguete(77, 1, 20, "Si");
let juguete3 = new CL_Juguete(55, 1, 25, "Si");
let juguete4 = new CL_Juguete(66, 2, 15, "No");

let decoracion1 = new CL_Decoracion(22, 2, 30, 3);
let decoracion2 = new CL_Decoracion(44, 1, 20, 2);
let decoracion3 = new CL_Decoracion(33, 1, 15, 2);
let decoracion4 = new CL_Decoracion(88, 2, 25, 1);

let tienda = new CL_Tienda();

tienda.procesarProducto(juguete1);
tienda.procesarProducto(juguete2);
tienda.procesarProducto(juguete3);
tienda.procesarProducto(juguete4);

tienda.procesarProducto(decoracion1);
tienda.procesarProducto(decoracion2);
tienda.procesarProducto(decoracion3);
tienda.procesarProducto(decoracion4);

let salida = document.getElementById("salida");


let mostrarJuguete = (producto) => {
    return `
    <tr>
        <td>${producto.codigo}</td>
        <td>${producto.proveedor}</td>
        <td>${producto.costoBase}</td>
        <td>${producto.bateria}</td>
        <td>${producto.incremento()}</td>
        <td>${producto.gananciaNac()}</td>
        <td>${producto.precioVenta()}</td>
    </tr>`;
};

let mostrarDecoracion = (producto) => {
    return `
    <tr>
        <td>${producto.codigo}</td>
        <td>${producto.proveedor}</td>
        <td>${producto.costoBase}</td>
        <td>${producto.color}</td>
        <td>${producto.incremento()}</td>
        <td>${producto.gananciaNac()}</td>
        <td>${producto.precioVenta()}</td>
    </tr>`;
};

salida.innerHTML = `
<br>Tabla Juguetes
<table>
    <tr>
        <td>Codigo</td>
        <td>Proveedor</td>
        <td>Costo Base</td>
        <td>Bateria</td>
        <td>Incremento</td>
        <td>Ganancia proveedor nacional</td>
        <td>Precio Venta</td>
    </tr>
    ${mostrarJuguete(juguete1)}
    ${mostrarJuguete(juguete2)}
    ${mostrarJuguete(juguete3)}
    ${mostrarJuguete(juguete4)}
</table>
<br>Tabla Decoracion
<table>
    <tr>
        <td>Codigo</td>
        <td>Proveedor</td>
        <td>Costo Base</td>
        <td>Color</td>
        <td>Incremento</td>
        <td>Ganancia proveedor nacional</td>
        <td>Precio Venta</td>
    </tr>
    ${mostrarDecoracion(decoracion1)}
    ${mostrarDecoracion(decoracion2)}
    ${mostrarDecoracion(decoracion3)}
    ${mostrarDecoracion(decoracion4)}
</table>
<br>Cantidad de productos: ${tienda.cantidadProductos()}<br>
Cantidad de productos importados: ${tienda.cantidadProductosImportados()}<br>
Porcentaje de productos importados: ${tienda.porcentajeProductosImportados()}<br>
<br>Total vendido: ${tienda.totalVendido()}<br>
Ganancia nacional: ${tienda.gananciaNacional()}<br>
Porcentaje de ganancia nacional: ${tienda.procentajeGananciaNacional().toFixed(2)}<br>`;