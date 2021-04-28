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
const editarCategoria = document.getElementById('editar-categoria');

//Inputs
const inputDescripcion = document.getElementById('input-descripcion');
const inputMonto = document.getElementById('input-monto');
const inputTipo = document.getElementById('input-tipo');
const inputCategoria = document.getElementById('input-categoria');
const inputFecha = document.getElementById('input-fecha');


//Pintar formulario
const pintarEnBalance = document.getElementById('escribir-operacion');

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

inputFecha.value = `${year}-${month < 10 ? '0' + month: month}-${day < 10 ? '0' + day: day}`


//--------------Sumar operaciones-------------------

let operaciones = [];

const escribirOperacion = (operaciones) => {

  pintarEnBalance.innerHTML = '';

  for (let index = 0; index < operaciones.length; index++) {
    const caja =
    `<div =${operaciones[index].id}>
      <span>${operaciones[index].descripción} </span>
      <span>${operaciones[index].monto} </span>
      <span>${operaciones[index].tipo} </span>
      <span>${operaciones[index].categoría} </span>
      <span>${operaciones[index].fecha} </span>
      <a>Editar</a>
      <a>Eliminar</a>
    </div>`

    pintarEnBalance.insertAdjacentHTML('beforeend', caja)
  }
}

//Botón agregar operación
btnAgregar.addEventListener('click', (e) => {
  e.preventDefault() 

  const pintarOperacion = {
    descripción: inputDescripcion.value,
    monto: inputMonto.value,
    tipo: inputTipo.value,
    categoría: inputCategoria.value,
    fecha: inputFecha.value,
  }

  operaciones.push(pintarOperacion)
  localStorage.setItem('operaciones', JSON.stringify(operaciones))
  operaciones = JSON.parse(localStorage.getItem('operaciones'))
  escribirOperacion(operaciones)

  //Volver a Balance
  balance.style.display = 'block'
  nuevaOperacion.style.display = 'none'  
});

JSON.parse(localStorage.getItem('operaciones')) == null ? escribirOperacion(operaciones) : escribirOperacion(JSON.parse(localStorage.getItem('operaciones')))


//Botón ocultar/mostrar filtros
const ocultarFiltros = document.getElementById('ocultar-filtros');
const filtros = document.getElementById('filtros')

ocultarFiltros.addEventListener('click', () => {
  if (ocultarFiltros.innerText === 'Ocultar filtros') {
    ocultarFiltros.innerText = 'Mostrar filtros'
    filtros.classList.add('is-hidden')
  } else {
    ocultarFiltros.innerText = 'Ocultar filtros'
    filtros.classList.remove('is-hidden')
  }
});


//Añadir categoria
const categoriaInput = document.getElementById('categoria-input');
const agregarCategoria = document.getElementById('agregar-categoria-boton');
const listaCategorias = document.getElementById('lista-categorias');
const selectCategorias = document.getElementById('categoria-select');
const inputEditCategoria = document.getElementById('input-editar-categoria');
const btnCancelEditarCategoria = document.getElementById('btn-cancel-edit-category');
const btnEditarCategoria = document.getElementById('btn-edit-edit-category');
const selectCategoriasOperacion = document.getElementById('categoria-operacion-select');

let categories = [
  { id: 0, name: "Servicios" },
  { id: 1, name: "Trasporte" },
  { id: 2, name: "Educación" },
  { id: 3, name: "Trabajo" },
  { id: 4, name: "Comida" },
];

//Añadir categorías a local storage
const addCategories = () => {
  if (categoriaInput.value != "") {
    categories.push({ id: categories.length, name: categoriaInput.value });
    setValueCategoriesSelect();
    categoriesFromList();
    categoriaInput.value = "";
  }
  localStorage.setItem('categorias', JSON.stringify(categories))
  categories = JSON.parse(localStorage.getItem('categorias'))
};

//Editar categorías
let index;
const editCategory = (category) => {
  editarCategoria.style.display = 'block'
  categorias.style.display = 'none'

  index = categories.findIndex((e) => e.id === Number(category));
  inputEditCategoria.value = categories[index].name
  return index
};

//Botón editar categorías
btnEditarCategoria.addEventListener("click", () => {
  categories[index].name = inputEditCategoria.value;
  localStorage.setItem("categorias", JSON.stringify(categories));
  categoriesFromList(categories);
  setValueCategoriesSelect(categories);
  editarCategoria.style.display = 'none'
  categorias.style.display = 'block'
});


//Eliminar categorías
const deleteCategory = (category) => {
  const value = categories.findIndex((e) => e.id == category);
  if (value >= 0) {
    categories.splice(value, 1);
    categoriesFromList();
    setValueCategoriesSelect();
    localStorage.setItem("categorias", JSON.stringify(categories));    
  };
};

//Botón eliminar categorías
btnCancelEditarCategoria.addEventListener('click', () => {
  editarCategoria.style.display = 'none'
  categorias.style.display = 'block'
});

//Añadir categorías a HTML
const categoriesFromList = () => {
  listaCategorias.innerHTML = "";
  tagsCategories = "";
  categories.forEach((category) => {
     
    let node =
     `<div class="mb-3">
     <div class="columns is-vcentered is-mobile">
      <div class="column">
          <span class="tag is-primary is-light">${category.name}</span>
      </div>
      <div class="column is-narrow has-text">
          <a href="#" class="mr-4 is-size-7 edit-link" onclick="editCategory(${category.id})">Editar</a>
          <a href="#" class="is-size-7 delete-link" onclick="deleteCategory(${category.id})">Eliminar</a>
          <p></p>
      </div>
     </div>
   </div>`;

    tagsCategories += node;
  });
  listaCategorias.innerHTML = tagsCategories;
};

//Imprimir categorías
const imprimirCategorias = () => {
  let storedList = localStorage.getItem('categorias');
  
  if (storedList !== null) {
    categories = JSON.parse(storedList)
  } 
  return categories
}
imprimirCategorias()

//Añadir categorías a los select de filtros y de nueva operación
const setValueCategoriesSelect = () => {
  selectCategoriasOperacion.innerHTML = "";
  selectCategorias.innerHTML = `<option value="Todas">Todas</option>`;
 
  for (let i = 0; i < categories.length; i++) {
    const categoria = `<option value="${categories[i].id}">${categories[i].name}</option>`
    
    selectCategorias.insertAdjacentHTML("beforeend", categoria);
    selectCategoriasOperacion.insertAdjacentHTML("beforeend", categoria);
  };  
};

//Función de carga inicial de values y categorías
const main = () => {
  setValueCategoriesSelect();
  categoriesFromList();
  imprimirCategorias()
};

main();

//prueba de nuevo