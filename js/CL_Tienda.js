export default class CL_Tienda{
    constructor(){
        this.cntProducto = 0;
        this.cntProductosImportados = 0;
        this.acTotalVendido = 0.0;
        this.acGananciaNac = 0.0;
    }

    procesarProducto(producto){
        this.cntProducto++;

        this.acTotalVendido += Number(producto.precioVenta());


        if(producto.proveedor == 2){
            this.cntProductosImportados++;
        }

        if(producto.proveedor == 1){
            this.acGananciaNac += Number(producto.gananciaNac());
        }

    }

    cantidadProductosImportados(){
        return this.cntProductosImportados;
    }

    cantidadProductos(){
        return this.cntProducto;
    }

    porcentajeProductosImportados(){
        if(this.cntProducto > 0){
            return this.cntProductosImportados * 100 / this.cntProducto;
        }
        else{
            return 0;
        }
    }

    gananciaNacional(){
        return this.acGananciaNac;
    }

    totalVendido(){
        return this.acTotalVendido;
    }

    procentajeGananciaNacional(){
        if(this.acTotalVendido > 0){
            return this.acGananciaNac * 100 / this.acTotalVendido;
        }
        else{
            return 0;
        }
    }
}