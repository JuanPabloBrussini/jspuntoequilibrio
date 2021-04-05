console.log('desde funciones')

function point () {

function cfm (){ 

let alquiler = parseInt (prompt('Alquiler Mensual $'));
let servicios = parseInt (prompt('Servicios Mensuales (Luz,Internet,etc) $'));
let sueldos = parseInt (prompt('Sueldos Brutos Mensuales $'));
let honorariosProf = parseInt (prompt('Honorarios Prof Mensuales $'));
let honorariosGer = parseInt (prompt('Honorarios Gerenciales Mensuales $'));

function suma(alquiler, servicios, sueldos, honorariosProf, honorariosGer) {
   return alquiler + servicios + sueldos + honorariosProf + honorariosGer
}
let costosFijos = suma(alquiler,servicios,sueldos,honorariosProf,honorariosGer);
alert('Los costos fijos mensuales son $ ' + costosFijos.toLocaleString("es-ES"));

function cvu () {
  let precioVenta = parseInt (prompt('Precio de Venta Unitario Promedio $'));
  let cmv = 50 / 100;
  let comisiones = parseInt (prompt('Tasa de comisiones por venta % (0 al 100)'));
  let iibb = 4 / 100;
  let gcias = 5 /100;
  let gsadm = 2 / 100;
  let gsvs = 2 / 100;  
  let percent = 100;

  function mas (precioVenta, cmv, comisiones, iibb, gcias, gsadm, gsvs ) {
  return precioVenta * cmv + precioVenta * comisiones / percent + precioVenta * iibb + precioVenta * gcias + precioVenta * gsadm + precioVenta * gsvs

  }
  let costoVariable = mas(precioVenta, cmv, comisiones, iibb, gcias, gsadm, gsvs );
  alert('Los costos variables por producto son $' + costoVariable.toLocaleString("es-ES"));

  function margenu () {
  
    function maru (precioVenta, costoVariable ) {
    return precioVenta - costoVariable
  
    }
    let margenUnitario = maru(precioVenta, costoVariable );
    //alert('El margen bruto unitario es ' + margenUnitario);
  
  
  function pointEq () {
  
    function equi (costosFijos, margenUnitario ) {
    return costosFijos / margenUnitario
  
    }
    let puntoEqUni = parseInt (equi(costosFijos, margenUnitario ));
    alert('El punto de equilibrio de ventas mensuales en unidades es ' + puntoEqUni);
  

    function pointVentasmes () {
  
      function equil (puntoEqUni, precioVenta ) {
      return puntoEqUni * precioVenta
    
      }
      let puntoEqMes = parseInt (equil (puntoEqUni, precioVenta ));
    
      alert('El punto de equilibrio de ventas mensuales es $ ' + puntoEqMes.toLocaleString("es-ES"));
  


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
