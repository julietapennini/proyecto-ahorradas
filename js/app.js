/*
                            Elementos
____________________________________________________________________
*/

//Botones
const btnBalance = document.getElementById('btn-balance');
const btnCategorias = document.getElementById('btn-categorias');
const btnReportes = document.getElementById('btn-reportes');
const btnNuevaOperacion = document.getElementById('btn-nuevaoperacion');
const btnCancel = document.getElementById('btn-cancel');

//Páginas
const balance = document.getElementById('balance');
const categorias = document.getElementById('categorias');
const reportes = document.getElementById('reportes');
const nuevaOperacion = document.getElementById('nueva-operacion');


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
})

//Botón categorias
btnCategorias.addEventListener('click', () => {
  balance.style.display = 'none'
  categorias.style.display = 'block'
  reportes.style.display = 'none'
})

//Botón reportes
btnReportes.addEventListener('click', () => {
  balance.style.display = 'none'
  categorias.style.display = 'none'
  reportes.style.display = 'block'
})


btnNuevaOperacion.addEventListener('click', () => {
  balance.style.display = 'none'
})

btnCancel.addEventListener('click', () => {
  nuevaOperacion.style.display = 'none'
  balance.style.display = 'block'
})
/*
const day = new Date().getDate();
let month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

console.log(new Date().getDate());
console.log(new Date().getMonth() + 1);
console.log(new Date().getFullYear());

console.log(new Date().getMonth() < 10);

inputFecha.value = `${year}-${month < 10 ? '0' + month: month}-${day}`
// yyyy-MM-dd
// yyyy-M-dd*/