export default class CL_Producto{
    constructor(codigo, proveedor, costoBase){
        this.codigo = codigo;
        this.proveedor = proveedor;
        this.costoBase = costoBase;
    }

    set codigo(codigo){
        this._codigo = codigo;
    }

    get codigo(){
        return this._codigo;
    }

    set proveedor(proveedor){
        this._proveedor = proveedor;
    }

    get proveedor(){
        return this._proveedor;
    }

    set costoBase(costoBase){   
        return this._costoBase = +costoBase;
}

    get costoBase(){
        return this._costoBase;
    }
}