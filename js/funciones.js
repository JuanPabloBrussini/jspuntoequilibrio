console.log('desde funciones')

//Razon Social y Provincia de la Empresa
function Empresas (razonSocial, provincia) {
  this.razonSocial = prompt('Razon Social').toUpperCase();
  this.provincia = prompt('Provincia').toUpperCase();
  
  }
const companias  = new Empresas('Razon Social', 'Provincia' )
console.log(companias)

//Marca y Rubro de las Pymes
class Pymes {
constructor(marca, rubro) {
    this.marca = prompt('Marca').toUpperCase();
    this.rubro = prompt('Rubro').toUpperCase();
}
}

const pequeñasEmpresas = []

//fn para obterner todas las marcas y rubros

const getAll = () => {
return pequeñasEmpresas
}
const create = (pyme) => { 
pequeñasEmpresas.push(pyme)
}
const pyme1 = new Pymes ('Marca', 'Rubro')
create(pyme1)
//const pyme2 = new Pymes ('Marca', 'Rubro')
//create(pyme2)

console.log(getAll())

//funcion para calcular el punto de equilibrio
function point () {

//funcio para calcular los costos fijos mensuales
function cfm (){ 

let alquiler = parseInt (prompt('Alquiler Mensual $'));
let servicios = parseInt (prompt('Servicios Mensuales (Luz,Internet,etc) $'));
let sueldos = parseInt (prompt('Sueldos Brutos Mensuales $'));
let honorariosProf = parseInt (prompt('Honorarios Prof Mensuales $'));
let honorariosGer = parseInt (prompt('Honorarios Gerenciales Mensuales $'));


const arrayDatosIngresadosFijos = [ alquiler, servicios, sueldos, honorariosProf, honorariosGer];
console.log( arrayDatosIngresadosFijos.length );
//es posible que mas adelante utilice estos datos para trabajar en optimizar el simulador agregandole la inflacion
const masInflacionMensual   = arrayDatosIngresadosFijos.map(x => x * 1.03);
console.log( masInflacionMensual );

function suma(alquiler, servicios, sueldos, honorariosProf, honorariosGer) {
   return alquiler + servicios + sueldos + honorariosProf + honorariosGer
}
let costosFijos = suma(alquiler,servicios,sueldos,honorariosProf,honorariosGer);
alert('Los costos fijos mensuales son $ ' + costosFijos.toLocaleString("es-ES"));

//funcion para calcular los costos variables por unidad
function cvu () {
  let precioVenta = parseInt (prompt('Precio de Venta Unitario Promedio $'));   
  let cmv = 50 / 100;
  let comisiones = parseInt (prompt('Tasa de comisiones por venta % (0 al 100)'));
  let iibb = 4 / 100;
  let gcias = 5 /100;
  let gsadm = 2 / 100;
  let gsvs = 2 / 100;  
  let percent = 100;

//luego es posible que muestre estos valores en el HTML
const arraySupuestosPymes = [ cmv, iibb, gcias, gsadm, gsvs];
console.log( arraySupuestosPymes.length );
const porCien   = arraySupuestosPymes.map(x => x * 100);
console.log( porCien );

//luego es posible que utilice estos datos
const arrayDatosIngresadosVariables = [ precioVenta, comisiones];
console.log( arrayDatosIngresadosVariables.length );


//funcion para obtener el costo variable unitario
  function mas (precioVenta, cmv, comisiones, iibb, gcias, gsadm, gsvs ) {
  return precioVenta * cmv + precioVenta * comisiones / percent + precioVenta * iibb + precioVenta * gcias + precioVenta * gsadm + precioVenta * gsvs

  }
  let costoVariable = mas(precioVenta, cmv, comisiones, iibb, gcias, gsadm, gsvs );
  alert('Los costos variables por producto son $' + costoVariable.toLocaleString("es-ES"));

  //funcion para obtener el margen bruto unitario
  function margenu () {
  
    function maru (precioVenta, costoVariable ) {
    return precioVenta - costoVariable
  
    }
    let margenUnitario = maru(precioVenta, costoVariable );
    //alert('El margen bruto unitario es ' + margenUnitario);
  
  //calculo del punto de equilibrio mensual en unidades
  function pointEq () {
  
    function equi (costosFijos, margenUnitario ) {
    return costosFijos / margenUnitario
  
    }
    let puntoEqUni = parseInt (equi(costosFijos, margenUnitario ));
    alert('El punto de equilibrio de ventas mensuales en unidades es ' + puntoEqUni);
  

  //calculo del punto de equilibrio mensual en ingresos $

    function pointVentasmes () {
  
      function equil (puntoEqUni, precioVenta ) {
      return puntoEqUni * precioVenta
    
      }
      let puntoEqMes = parseInt (equil (puntoEqUni, precioVenta ));
    
      alert('El punto de equilibrio de ventas mensuales es $ ' + puntoEqMes.toLocaleString("es-ES"));
  

//calculo del punto de equilibrio anual en ingresos $
  function pointVentasanual () {
  
    let meses = 12
    function equili (puntoEqMes, meses ) {
    return puntoEqMes * meses
  
    }
    let puntoEqAn = parseInt (equili (puntoEqMes, meses ));
  
    alert('El punto de equilibrio de ventas anuales es $ ' + puntoEqAn.toLocaleString("es-ES"));


}

pointVentasanual()
    }

    pointVentasmes()


}
pointEq()

  }
margenu()
}
cvu()
}
cfm()
}

point()
