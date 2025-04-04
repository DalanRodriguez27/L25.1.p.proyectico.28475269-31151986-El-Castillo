import CL_Producto from "./CL_Producto.js";

export default class CL_Decoracion extends CL_Producto{
    constructor(codigo, proveedor, costoBase, color){
        super(codigo, proveedor, costoBase);
        this.color = color;
    }

    set color(color){
        return this._color = color;
    }

    get color(){
        return this._color;
    }

    incremento(){
        if(this._color == 2 && this.proveedor == 2){
            return this.costoBase * 60/100;
        }else{
            return this.costoBase * 40/100;
        
    }
    }

    gananciaNac(){
        return this.incremento();
    }

    precioVenta(){
        return this.costoBase + this.incremento();
    }
}