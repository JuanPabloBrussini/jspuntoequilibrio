console.log('ok')

$( document ).ready(function() 
{
   console.log( "El DOM esta listo" );
});


let formEqui = document.getElementById('formEqui');
formEqui = addEventListener('submit', pointEq)


function valores() {

let marcas = document.getElementById('marca').value;
let alquiler = document.getElementById('alquileres').value;
let servicios = document.getElementById('servicio').value;
let sueldos = document.getElementById('sueldo').value;
let honorariosProf = document.getElementById('honorariosPro').value;
let honorariosGer = document.getElementById('honorariosGe').value;
let precioVenta = document.getElementById('preciovent').value; 
let comisiones = document.getElementById('comisiones').value;
let percent = 100;



return {marcas, alquiler, servicios, sueldos, honorariosProf, honorariosGer, precioVenta, comisiones, percent }

}


  

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

    
  
let costosFijos = parseInt(alquiler) + parseInt(servicios) + parseInt(sueldos) + parseInt(honorariosProf) + parseInt(honorariosGer);
function mas (precioVenta, cmv, comisiones, iibb, gcias, gsadm, gsvs ) {
  return precioVenta * cmv + precioVenta * comisiones / percent + precioVenta * iibb + precioVenta * gcias + precioVenta * gsadm + precioVenta * gsvs

  }
  
  let costoVariable = mas(precioVenta, cmv, comisiones, iibb, gcias, gsadm, gsvs );

  function maru (precioVenta, costoVariable ) {
    return precioVenta - costoVariable
  
    }
        let margenUnitario = maru(precioVenta, costoVariable );

    function equi (costosFijos, margenUnitario ) {
      return costosFijos / margenUnitario
    
      }


      let puntoEqUni = (equi(costosFijos, margenUnitario ));
  
      function equil (puntoEqUni, precioVenta ) {
        return puntoEqUni * precioVenta
      
        }

        let puntoEqMes = parseInt (equil (puntoEqUni, precioVenta ));
  
        let meses = 12

        
        function equili (puntoEqMes, meses ) {
        return puntoEqMes * meses
              }
        let puntoEqAn =  (equili (puntoEqMes, meses ));

     
      localStorage.setItem('marcas', marcas)
      localStorage.setItem('rubros', rubros)
      let marcaLocal = localStorage.getItem('marcas')
      let rubroLocal = localStorage.getItem('rubros')
        

resulting(marcaLocal, rubroLocal, costoVariable, costosFijos, puntoEqAn, puntoEqMes, puntoEqUni)


}

else {
  

  let cmv = 66.66666 / 100;
  let iibb = 3.5 / 100;
  let gcias = 4 /100;
  let gsadm = 2 / 100;
  let gsvs = 1 / 100;  

  const {marcas, rubros, alquiler, servicios, sueldos, honorariosProf, honorariosGer, precioVenta, comisiones, percent} = valores();

  let costosFijos = parseInt(alquiler) + parseInt(servicios) + parseInt(sueldos) + parseInt(honorariosProf) + parseInt(honorariosGer);
  function mas (precioVenta, cmv, comisiones, iibb, gcias, gsadm, gsvs ) {
    return precioVenta * cmv + precioVenta * comisiones / percent + precioVenta * iibb + precioVenta * gcias + precioVenta * gsadm + precioVenta * gsvs
  
    }

    let costoVariable = mas(precioVenta, cmv, comisiones, iibb, gcias, gsadm, gsvs );
  
    function maru (precioVenta, costoVariable ) {
      return precioVenta - costoVariable
    
      }

      let margenUnitario = maru(precioVenta, costoVariable );
  
      function equi (costosFijos, margenUnitario ) {
        return costosFijos / margenUnitario
      
        }

        let puntoEqUni = parseInt (equi(costosFijos, margenUnitario ));
    
        function equil (puntoEqUni, precioVenta ) {
          return puntoEqUni * precioVenta
        
          }

          let puntoEqMes = parseInt (equil (puntoEqUni, precioVenta ));
    
          let meses = 12
  
          
          
          function equili (puntoEqMes, meses ) {
          return puntoEqMes * meses
                }
          let puntoEqAn = parseInt (equili (puntoEqMes, meses ));
          
  

        localStorage.setItem('marcas', marcas)
        localStorage.setItem('rubros', rubros)
        let marcaLocal = localStorage.getItem('marcas')
        let rubroLocal = localStorage.getItem('rubros')
          
  
  resulting(marcaLocal, rubroLocal, costoVariable, costosFijos, puntoEqAn, puntoEqMes, puntoEqUni)
  
  
  }
}

function resulting(marcaLocal, rubroLocal, costoVariable, costosFijos, puntoEqAn, puntoEqMes, puntoEqUni) {
let result = document.getElementById(`result`)
let print = document.createElement(`div`)

print.innerHTML = `
<section class="mb-3 mb-lg-5">
<h4>Puntos de Equilibrio</h4>
<div class="row">
<div class="col-xl-3 col-md-6 mb-4">
    <div class="card-widget h-100">
      <div class="card-widget-body">
        <div class="dot me-3 bg-indigo"></div>
        <div class="text">
          <h6 class="mb-0">Ventas Mes</h6><span class="text-gray-500">${puntoEqUni.toFixed(2)} unidades</span>
        </div>
      </div>
      <div class="icon text-white bg-indigo"><i class="fas fa-balance-scale"></i></div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card-widget h-100">
      <div class="card-widget-body">
        <div class="dot me-3 bg-blue"></div>
        <div class="text">
          <h6 class="mb-0">Ventas Mes $</h6><span class="text-gray-500">${puntoEqMes.toLocaleString("es-ES")}</span>
        </div>
      </div>
      <div class="icon text-white bg-blue"><i class="fas fa-chart-line"></i></i></div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card-widget h-100">
      <div class="card-widget-body">
        <div class="dot me-3 bg-blue"></div>
        <div class="text">
          <h6 class="mb-0">Ventas Anuales $</h6><span class="text-gray-500">${puntoEqAn.toLocaleString("es-ES")}</span>
        </div>
      </div>
      <div class="icon text-white bg-blue"><i class="fas fa-calculator"></i></div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card-widget h-80">
      <div class="card-widget-body">
        <div class="dot me-3 bg-red"></div>
        <div class="text">
          <h6 class="mb-0">Costos Fijos Anuales</h6><span class="text-gray-500">$${(costosFijos*12).toLocaleString("es-ES") } </span>
        </div>
      </div>
      <div class="icon text-white bg-red"><i class="fas fa-donate"></i></div>
    </div>
  </div>
</div>
</section>
<section class="mb-4 mb-lg-5">
<h2 class="section-heading section-heading-ms mb-4 mb-lg-5"> ${marcaLocal}</h2>
<div class="row">
  <div class="col-lg-7 mb-4 mb-lg-0">
    <div class="card h-100">
      <div class="card-header">
        <h4 class="card-heading">Punto de Equilibrio</h4>
      </div>
      <div class="card-body">
        <div class="chart-holder w-100">
        <img src="multimedia/puntodeeq.jpg" class="img21" alt="punto de equilibrio">

        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-5 mb-4 mb-lg-0">
    <div class="h-40 pb-4 pb-lg-2">
      <div class="card h-50">
        <div class="card-body d-flex">
          <div class="row w-75 align-items-center">
            <div class="col-sm-5 mb-4 mb-sm-0">
              <h2 class="mb-0 d-flex align-items-center"><span>$ ${costosFijos.toLocaleString("es-ES")}</span><span class="dot bg-red d-inline-block ms-3"></span></h2><span class="text-muted">Costos Fijos Mensuales</span>
              <hr><small class="text-muted"></small>
            </div>
            <div class="col-sm-4">
              <canvas id="pieChartHome1"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-40 pt-lg-2">
      <div class="card h-50">
        <div class="card-body d-flex">
          <div class="row w-75 align-items-center">
            <div class="col-sm-5 mb-4 mb-sm-0">
              <h2 class="mb-0 d-flex align-items-center"><span>$${costoVariable.toFixed(2)}</span><span class="dot bg-yellow d-inline-block ms-3"></span></h2><span class="text-muted">Costos Variables Unitarios</span>
              <hr><small class="text-muted"></small>
            </div>
            <div class="col-sm-4">
              <canvas id="pieChartHome2"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>



`  

  result.appendChild(print)
  result.scrollIntoView({block: "end"});
  reset()
   
   
   containerd.scrollIntoView({block: "start"});
   reset()

   $('body').append('<div id="toTop" class="toTop"><i class="fa fa-angle-up"></i></div>');
   $(window).on('scroll', function () {
       if ($(this).scrollTop() != 0) {
           $('#toTop').fadeIn();
       } else {
           $('#toTop').fadeOut();
       }
   }); 
    $('#toTop').on('click', function(){
               $("html, body").animate({ scrollTop: 0 }, 600);
               return false;
           });



}

function reset() {
document.getElementById('formEqui').reset()  
} 


$("#btn1").click(function () { 

  swal({
title: "Contactanos",
text: "info@bitpointconsulting.com",

}); 
});
       