class cl_Mobiliario {
    constructor(f, m) {
        this.factura = f
        this.madera = m
    }

    precioBase(){
        if (this.madera === 1){
            return 5000
        }
        else {
        return 3000}

        return 0
    }
}

class cl_Comedor extends cl_Mobiliario {
    constructor (f, m, s){
    super(f, m)
    this.sillaN = s
    }
    precioFinal(){
        return ((this.sillaN * 0.1) + 0.5) * this.precioBase()
    }
}

class cl_Mueble extends cl_Mobiliario{
    constructor(f, m, t){
        super(f, m)
        this.tela = t
    }
    precioFinal(){
        if (this.tela===1){
            return this.precioBase()*1.20
        }
        else if (this.tela === 2){
            return this.precioBase()* 1.30
        }
        else {
            return this.precioBase() * 1.40
        }
    }
}

 class cl_Muebleria{
    constructor(f, m){
        this.contTotal = 0;
        this.contComedor = 0;
        this.contMuebles = 0;
        this.acuTotal = 0
    }
    procesar(Mobiliario){
        console.log("procesar")
        this.acuTotal += Mobiliario.precioFinal()
        this.contTotal ++
        if (Mobiliario instanceof cl_Comedor){
        this.contComedor ++
    }
        
    }
    porcComedores(){
        return (this.contComedor / this.contTotal) * 100
 }
 }

function main(){
let salida=document.getElementById("salida")

//programa
let mobiliario1 = new cl_Comedor(222, 2, 3)
let mobiliario2 = new cl_Comedor(111, 1, 2)
let mobiliario3 = new cl_Comedor(555,1, 4)
let mobiliario5 = new cl_Mueble(444, 1, 2)
let muebleria = new cl_Muebleria()
muebleria.procesar(mobiliario1)
muebleria.procesar(mobiliario2)
muebleria.procesar(mobiliario3)
muebleria.procesar(mobiliario5)

salida.innerHTML += ` factura: ${mobiliario1.factura} tipo de madera: ${mobiliario1.madera} precio final: ${mobiliario1.precioFinal()} cantidad de sillas: ${mobiliario1.sillaN}<br>`
salida.innerHTML += ` factura: ${mobiliario2.factura} tipo de madera: ${mobiliario2.madera} precio final: ${mobiliario2.precioFinal()} cantidad de sillas: ${mobiliario2.sillaN}<br>`
salida.innerHTML += ` factura: ${mobiliario3.factura} tipo de madera: ${mobiliario3.madera} precio final: ${mobiliario3.precioFinal()} cantidad de sillas: ${mobiliario3.sillaN}<br>`
salida.innerHTML += ` factura: ${mobiliario5.factura} tipo de madera: ${mobiliario5.madera} precio final: ${mobiliario5.precioFinal()} cantidad de sillas: ${mobiliario1.sillaN}<br>`

salida.innerHTML += `monto total vendido: ${muebleria.acuTotal}<br>`
salida.innerHTML += `porcentaje de comedor vendido: ${muebleria.porcComedores()}%<br>`

//+= de suma

}



main()