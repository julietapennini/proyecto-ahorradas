/*
                            Elementos
____________________________________________________________________
*/

//Botones
const btnBalance = document.getElementById('btn-balance');
const btnNuevaOperacion = document.getElementById('btn-nuevaoperacion');
const btnCancel = document.getElementById('btn-cancel');
const btnAgregar = document.getElementById('btn-agregar');

const btnCategorias = document.getElementById('btn-categorias');
const btnReportes = document.getElementById('btn-reportes');


//Páginas
const balance = document.getElementById('balance');
const nuevaOperacion = document.getElementById('nueva-operacion');
const editarOperacion = document.getElementById('editar-operacion');
const categorias = document.getElementById('categorias');
const reportes = document.getElementById('reportes');

//Inputs
const inputDescripcion = document.getElementById('input-descripcion');
const inputMonto = document.getElementById('input-monto');
const inputTipo = document.getElementById('input-tipo');
const inputCategoria = document.getElementById('input-categoria');
const inputFecha = document.getElementById('input-fecha');


/*
                            Funcionalidades
____________________________________________________________________
*/

//--------------Botones que llevan a nueva página-------------------

//Botón balance
btnBalance.addEventListener('click', () => {
  balance.style.display = 'block'
  categorias.style.display = 'none'
  reportes.style.display = 'none'
  nuevaOperacion.style.display = 'none'
  editarOperacion.style.display = 'none'

})

//Botón categorias
btnCategorias.addEventListener('click', () => {
  balance.style.display = 'none'
  categorias.style.display = 'block'
  reportes.style.display = 'none'
  nuevaOperacion.style.display = 'none'
  editarOperacion.style.display = 'none'
})

//Botón reportes
btnReportes.addEventListener('click', () => {
  balance.style.display = 'none'
  categorias.style.display = 'none'
  reportes.style.display = 'block'
  nuevaOperacion.style.display = 'none'
  editarOperacion.style.display = 'none'
})

//Botón nueva operación
btnNuevaOperacion.addEventListener('click', () => {
  balance.style.display = 'none'
  nuevaOperacion.style.display = 'block'
})

//Botón cancelar
btnCancel.addEventListener('click', () => {
  balance.style.display = 'block'
  nuevaOperacion.style.display = 'none'
})


//--------------Input FECHA-------------------

//Input Fecha
const day = new Date().getDate();
let month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

inputFecha.value = `${year}-${month < 10 ? '0' + month: month}-${day}`

//--------------Input FECHA-------------------

const operaciones = [];

btnAgregar.addEventListener('click', () => {
  console.log(inputDescripcion.value)
   const nuevaOperacion = {
     descripción:lñkl,
     monto:lñklñ,
     tipo:lñkñ,
     categoria:kñkl,
     fecha:
   }
})