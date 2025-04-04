import CL_Producto from "./CL_Producto.js";

export default class CL_Juguete extends CL_Producto{
    constructor(codigo, proveedor, costoBase, bateria){
        super(codigo, proveedor, costoBase);
        this.bateria = bateria;
    }

    set bateria(bateria){
        return this._bateria = bateria;
    }

    get bateria(){
        return this._bateria;
    }

    incremento(){
        if(this._bateria == "Si"){
            return this.costoBase * 50/100
        }
        else if(this._bateria == "No"){
            return this.costoBase * 30/100
        }
    }

    gananciaNac(){
        return this.incremento();
    }

    precioVenta(){
        return this.costoBase + this.incremento();
    }
}  