//Activar el formulario
let formEqui = document.getElementById('formEqui') 
formEqui = addEventListener('submit', pointEq)


//funcion para obtener los valores
function valores() {

let marcas = document.getElementById('marca').value;
let alquiler = document.getElementById('alquileres').value;
let servicios = document.getElementById('servicio').value;
let sueldos = document.getElementById('sueldo').value;
let honorariosProf = document.getElementById('honorariosPro').value;
let honorariosGer = document.getElementById('honorariosGe').value;
let precioVenta = document.getElementById('preciovent').value; 
let comisiones = document.getElementById('comisione').value;
let percent = 100;
  


return {marcas, alquiler, servicios, sueldos, honorariosProf, honorariosGer, precioVenta, comisiones, percent}

}


//funcion para calcular el punto de equilibrio

  

function pointEq(event) {
  event.preventDefault();

  const rubros = document.getElementById('rubros');
  
  if (rubros.value == 'minorista') {
  
    let cmv = 50 / 100;
    let iibb = 4 / 100;
    let gcias = 5 /100;
    let gsadm = 2 / 100;
    let gsvs = 2 / 100;  
    

    const {marcas, rubros, alquiler, servicios, sueldos, honorariosProf, honorariosGer, precioVenta, comisiones, percent} = valores();

    
    //obtencion de costos fijos
let costosFijos = parseInt(alquiler) + parseInt(servicios) + parseInt(sueldos) + parseInt(honorariosProf) + parseInt(honorariosGer);
function mas (precioVenta, cmv, comisiones, iibb, gcias, gsadm, gsvs ) {
  return precioVenta * cmv + precioVenta * comisiones / percent + precioVenta * iibb + precioVenta * gcias + precioVenta * gsadm + precioVenta * gsvs

  }
  //obtencion de costos variables
  let costoVariable = mas(precioVenta, cmv, comisiones, iibb, gcias, gsadm, gsvs );

  function maru (precioVenta, costoVariable ) {
    return precioVenta - costoVariable
  
    }
    //obtencion de margen unitario
    let margenUnitario = maru(precioVenta, costoVariable );

    function equi (costosFijos, margenUnitario ) {
      return costosFijos / margenUnitario
    
      }
      //obtencion de punto de Equilibrio Unitario mensual
      let puntoEqUni = parseInt (equi(costosFijos, margenUnitario ));
  
      function equil (puntoEqUni, precioVenta ) {
        return puntoEqUni * precioVenta
      
        }
        //obtencion de punto de Equilibrio de Ventas en $  mensuales
        let puntoEqMes = parseInt (equil (puntoEqUni, precioVenta ));
  
        let meses = 12

        
        //obtencion de punto de Equilibrio de Ventas en $  anuales
        function equili (puntoEqMes, meses ) {
        return puntoEqMes * meses
              }
        let puntoEqAn = parseInt (equili (puntoEqMes, meses ));

     
        //Almacenar Marca y Rubro para luego mostrar en resultado
      localStorage.setItem('marcas', marcas)
      localStorage.setItem('rubros', rubros)
      let marcaLocal = localStorage.getItem('marcas')
      let rubroLocal = localStorage.getItem('rubros')
        

resulting(marcaLocal, rubroLocal, costoVariable, costosFijos, puntoEqAn, puntoEqMes, puntoEqUni)


}

else {
  

  let cmv = 60 / 100;
  let iibb = 3.5 / 100;
  let gcias = 4 /100;
  let gsadm = 2 / 100;
  let gsvs = 1 / 100;  

  const {marcas, rubros, alquiler, servicios, sueldos, honorariosProf, honorariosGer, precioVenta, comisiones, percent} = valores();

  //obtencion de costos fijos
  let costosFijos = parseInt(alquiler) + parseInt(servicios) + parseInt(sueldos) + parseInt(honorariosProf) + parseInt(honorariosGer);
  function mas (precioVenta, cmv, comisiones, iibb, gcias, gsadm, gsvs ) {
    return precioVenta * cmv + precioVenta * comisiones / percent + precioVenta * iibb + precioVenta * gcias + precioVenta * gsadm + precioVenta * gsvs
  
    }
    //obtencion de costos variables
    let costoVariable = mas(precioVenta, cmv, comisiones, iibb, gcias, gsadm, gsvs );
  
    function maru (precioVenta, costoVariable ) {
      return precioVenta - costoVariable
    
      }
      //obtencion de margen unitario
      let margenUnitario = maru(precioVenta, costoVariable );
  
      function equi (costosFijos, margenUnitario ) {
        return costosFijos / margenUnitario
      
        }
        //obtencion de punto de Equilibrio Unitario mensual
        let puntoEqUni = parseInt (equi(costosFijos, margenUnitario ));
    
        function equil (puntoEqUni, precioVenta ) {
          return puntoEqUni * precioVenta
        
          }
          //obtencion de punto de Equilibrio de Ventas en $  mensuales
          let puntoEqMes = parseInt (equil (puntoEqUni, precioVenta ));
    
          let meses = 12
  
          
          //obtencion de punto de Equilibrio de Ventas en $  anuales
          function equili (puntoEqMes, meses ) {
          return puntoEqMes * meses
                }
          let puntoEqAn = parseInt (equili (puntoEqMes, meses ));
  
       
          //Almacenar Marca y Rubro para luego mostrar en resultado
        localStorage.setItem('marcas', marcas)
        localStorage.setItem('rubros', rubros)
        let marcaLocal = localStorage.getItem('marcas')
        let rubroLocal = localStorage.getItem('rubros')
          
  
  resulting(marcaLocal, rubroLocal, costoVariable, costosFijos, puntoEqAn, puntoEqMes, puntoEqUni)
  
  
  }

}

//Funcion para insertar en HTML los resultados obtenidos en el simulador
function resulting(marcaLocal, rubroLocal, costoVariable, costosFijos, puntoEqAn, puntoEqMes, puntoEqUni) {
let result = document.getElementById(`result`)
let print = document.createElement(`div`)

print.innerHTML = `
<section id="containerd"> 
<div class="container-data row">
<div class="col s4">
<h5 class=puntounid>Punto de Equilibrio Ventas Unitario Mes es ${puntoEqUni.toLocaleString("es-ES")}</h5>
</div>
<div class="col s4">
<h5 class=puntovtam>Punto de Equilibrio Ventas por Mes es $ ${puntoEqMes.toLocaleString("es-ES")}</h6>
</div>  
<div class="col s4">
<h5 class=puntovtaa>Punto de Equilibrio Ventas   Anuales   es     $  ${puntoEqAn.toLocaleString("es-ES")}</h5>
</div>

</div>
<div>
<h6 class=marca> ${marcaLocal}<h6>
<h6 class=costof> Costos Fijos $ ${costosFijos.toLocaleString("es-ES")}<h6>
<h6 class=costov> Costo Variable $ ${costoVariable.toLocaleString("es-ES")} x unidad <h6>
</div>
<div>


<img src="multimedia/puntodeeq.jpg" class="img1" alt="punto de equilibrio">

</div>
</section>

`  
  result.appendChild(print)
  reset();

}

//Funcion para resetear los datos ingresados en el formulario
function reset() {
document.getElementById('formEqui').reset()  
} 
