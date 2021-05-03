/*
                            Elementos
____________________________________________________________________
*/

//Botones
const btnBalance = document.getElementById('btn-balance');
const btnCategorias = document.getElementById('btn-categorias');
const btnReportes = document.getElementById('btn-reportes');

//Páginas
const paginaBalance = document.getElementById('pagina-balance');
const paginaNuevaOperacion = document.getElementById('pagina-nueva-operacion');
const paginaEditarOperacion = document.getElementById('pagina-editar-operacion');
const paginaCategorias = document.getElementById('pagina-categorias');
const paginaReportes = document.getElementById('pagina-reportes');
const editarCategoria = document.getElementById('editar-categoria');

//Categorias
const categoriaInput = document.getElementById('categoria-input');
const agregarCategoria = document.getElementById('agregar-categoria-boton');
const listaCategorias = document.getElementById('lista-categorias');
const selectCategorias = document.getElementById('categoria-select');
const inputEditCategoria = document.getElementById('input-editar-categoria');
const btnCancelEditarCategoria = document.getElementById('btn-cancel-edit-category');
const btnEditarCategoria = document.getElementById('btn-edit-edit-category');
const selectCategoriasOperacion = document.getElementById('categoria-operacion-select');

//Botón nueva operación
const btnNuevaOperacion = document.getElementById('btn-nuevaoperacion');

//Inputs nueva operación
const inputDescripcion = document.getElementById('input-descripcion');
const inputMonto = document.getElementById('input-monto');
const inputTipo = document.getElementById('input-tipo');
const inputCategoria = document.getElementById('input-categoria');
const inputFecha = document.getElementById('input-fecha');

//Botón agregar-cancelar en nueva operación
const btnCancelar = document.getElementById('btn-cancelar');
const btnAgregar = document.getElementById('btn-agregar');

//Operaciones
const tablaOperaciones = document.getElementById("tabla-operaciones");
const verSinOperaciones = document.getElementById("ver-sin-operaciones");

//Pintar operacion
const pintarEnBalance = document.getElementById('escribir-operacion');

//Botones editar-eliminar en balance
const btnEliminarOperacion = document.getElementById('btn-eliminar-operacion');
const btnEditarOperacion = document.getElementById('btn-editar-operacion');

//Inputs editar operación
const inputEditarDescripcion = document.getElementById('input-editar-descripcion');
const inputEditarMonto = document.getElementById('input-editar-monto');
const inputEditarTipo = document.getElementById('input-editar-tipo');
const inputEditarCategoria = document.getElementById('categoria-operacion-editar-select');
const inputEditarFecha = document.getElementById('input-editar-fecha');

//Botones editar-cancelar editar operación
const btnCancelarEditar = document.getElementById('btn-cancelar-editar');
const btnEditarEditar = document.getElementById('btn-editar-editar');

//Filtros
const inputFechaFiltros = document.getElementById('input-fecha-filtros');

//Balance
const balanceGanancia = document.getElementById("balance-ganancias");
const balanceGasto = document.getElementById("balance-gastos");
const balanceTotal = document.getElementById("balance-total");


/*
                            Funcionalidades
____________________________________________________________________
*/

//--------------Botones-------------------

//Botón balance
btnBalance.addEventListener('click', () => {
  paginaBalance.style.display = 'block'
  paginaCategorias.style.display = 'none'
  paginaReportes.style.display = 'none'
  paginaNuevaOperacion.style.display = 'none'
  paginaEditarOperacion.style.display = 'none'
})

//Botón categorias
btnCategorias.addEventListener('click', () => {
  paginaBalance.style.display = 'none'
  paginaCategorias.style.display = 'block'
  paginaReportes.style.display = 'none'
  paginaNuevaOperacion.style.display = 'none'
  paginaEditarOperacion.style.display = 'none'
})

//Botón reportes
btnReportes.addEventListener('click', () => {
  paginaBalance.style.display = 'none'
  paginaCategorias.style.display = 'none'
  paginaReportes.style.display = 'block'
  paginaNuevaOperacion.style.display = 'none'
  paginaEditarOperacion.style.display = 'none'
})

//Botón nueva operación
btnNuevaOperacion.addEventListener('click', () => {
  paginaBalance.style.display = 'none'
  paginaNuevaOperacion.style.display = 'block'
})

//Botón cancelar
btnCancelar.addEventListener('click', () => {
  paginaBalance.style.display = 'block'
  paginaNuevaOperacion.style.display = 'none'
})

//Botón editar-cancelar
btnCancelarEditar.addEventListener('click', () => {
  paginaBalance.style.display = 'block'
  paginaEditarOperacion.style.display = 'none'
})

//--------------Input FECHA-------------------

//Input Fecha

const date = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
};

inputFecha.value = date();
inputFechaFiltros.value = date();
inputEditarFecha.value = inputFecha.value;


/*
 ************************************************************************************
                                    Operaciones
 ************************************************************************************
*/

//NUEVA OPERACIÓN

//Creando categorías
let categories = [
  { id: uuid.v4(), name: "Servicios" },
  { id: uuid.v4(), name: "Trasporte" },
  { id: uuid.v4(), name: "Educación" },
  { id: uuid.v4(), name: "Trabajo" },
  { id: uuid.v4(), name: "Comida" },
];

//Formulario Operaciones valores predeterminados
const operacionResetearFormulario = () => {
  inputDescripcion.value = "";
  inputMonto.value = 0;
  inputTipo.value = "gasto";
  selectCategoriasOperacion.value = categories[0].name;
  inputFecha.value = date();
};


//Ocultar imagen - mostrar tabla
const checkearOperaciones = (arrOperaciones) => {
  for (let i = 0; i < operaciones.length; i++) {
  //Si no hay operaciones, ocultar tabla y mostrar imagen.
  if (arrOperaciones === 0){
    tablaOperaciones.classList.add("is-hidden");
    verSinOperaciones.classList.remove("is-hidden");
  //Si hay operaciones, mostrar tabla y ocultar imagen. 
  } else {
    verSinOperaciones.classList.add("is-hidden");
    tablaOperaciones.classList.remove("is-hidden");
  }
}};


//AGREGAR OPERACIÓN
let operaciones = [];

//Botón agregar operación
btnAgregar.addEventListener('click', () => {

  const pintarOperacion = {
    id: uuid.v4(),
    descripcion: inputDescripcion.value,
    monto: inputMonto.value,
    tipo: inputTipo.value,
    categoria: selectCategoriasOperacion.value,
    fecha: inputFecha.value,
  }

  operaciones.push(pintarOperacion);
  localStorage.setItem('operacionesStorage', JSON.stringify(operaciones));
  const tomarOperacionesStorage = JSON.parse(
    localStorage.getItem('operacionesStorage')
  );

  operacionResetearFormulario()
  escribirOperacion(tomarOperacionesStorage);
  balanceHTML(tomarOperacionesStorage);
  /*paginaReportes(tomarOperacionesStorage);
  filtrarOperaciones();*/

  //Volver a Balance
  paginaBalance.style.display = 'block'
  paginaNuevaOperacion.style.display = 'none'  
});

//PINTAR OPERACIÓN
const escribirOperacion = (operaciones) => {
  pintarEnBalance.innerHTML = '';
  checkearOperaciones(operaciones)
  for (let i = 0; i < operaciones.length; i++) {
    const caja =
    `<div id="${operaciones[i].id}" class="columns">
      <div class="column is-3 estilo-descripcion">${operaciones[i].descripcion}</div>
      <div class="column is-2 estilo-categoria">${operaciones[i].categoria}</div>
      <div class="column is-3 has-text-right">${operaciones[i].fecha}</div>
      <div class="column is-2 has-text-right ${operaciones[i].tipo === 'ganancia' ? 'estilo-ganancia' : 'estilo-gasto'}">${operaciones[i].tipo === 'ganancia' ? '+' : '-'}${operaciones[i].monto}</div>
      <div class="column is-2 has-text-right">
        <button class="button is-info is-inverted is-small" onclick="editarOperacion('${operaciones[i].id}')">Editar</button>
        <button class="button is-danger is-inverted is-small" onclick="eliminarOperacion('${operaciones[i].id}')">Eliminar</button>
      </div>
    </div>`

    pintarEnBalance.insertAdjacentHTML('beforeend', caja)
  }
}

operaciones = JSON.parse(localStorage.getItem("operacionesStorage")) ?? operaciones;
escribirOperacion(operaciones);
checkearOperaciones();

//EDITAR OPERACIONES

// posición en el arrego de la operación a editar
let posicion;

const editarOperacion = (operacion) => {

  paginaBalance.style.display = 'none';
  paginaEditarOperacion.style.display = 'block'

  posicion = operaciones.findIndex((elem) => elem.id === operacion);

  inputEditarDescripcion.value = operaciones[posicion].descripcion;
  inputEditarMonto.value = operaciones[posicion].monto;
  inputEditarTipo.value = operaciones[posicion].tipo;
  inputEditarCategoria.value = operaciones[posicion].categoria;
  inputEditarFecha.value = operaciones[posicion].fecha;


  return posicion;
};

// Botón editar operación
btnEditarEditar.addEventListener("click", () => {
  operaciones[posicion].descripcion = inputEditarDescripcion.value;
  operaciones[posicion].monto = inputEditarMonto.value;
  operaciones[posicion].tipo = inputEditarTipo.value;
  operaciones[posicion].categoria = inputEditarCategoria.value;
  operaciones[posicion].fecha = inputEditarFecha.value;

  
  localStorage.setItem("operacionesStorage", JSON.stringify(operaciones));
  escribirOperacion(operaciones);

  balanceHTML(operaciones);
  /*reportes(operaciones);
  filtrarOperaciones();*/
  
  //volver a balance
  paginaBalance.style.display = 'block';
  paginaEditarOperacion.style.display = 'none'
});

//Eliminar Operaciones
const eliminarOperacion = (operacion) => {

  const value = operaciones.findIndex((elem) => elem.id === operacion);
  
  if (value >= 0) {
    operaciones.splice(value, 1);
    localStorage.setItem("operacionesStorage", JSON.stringify(operaciones));
    escribirOperacion(operaciones);
    balanceHTML(operaciones);
    /*reportes(operations);
    filtrarOperaciones();*/
  }
};




/*
 ************************************************************************************
                                    Categorías
 ************************************************************************************
*/

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
let i;
const editCategory = (category) => {
  editarCategoria.style.display = 'block'
  paginaCategorias.style.display = 'none'

  i = categories.findIndex((e) => e.id === Number(category));
  inputEditCategoria.value = categories[i].name
  return i
};

//Botón editar categorías
btnEditarCategoria.addEventListener("click", () => {
  categories[i].name = inputEditCategoria.value;
  localStorage.setItem("categorias", JSON.stringify(categories));
  categoriesFromList(categories);
  setValueCategoriesSelect(categories);
  editarCategoria.style.display = 'none'
  paginaCategorias.style.display = 'block'
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
    `<section class="mb-3">
     <article class="columns is-vcentered is-mobile">
      <article class="column">
          <span class="tag is-primary is-light">${category.name}</span>
      </article>
      <article class="column is-narrow has-text">
          <a href="#" class="mr-4 is-size-7 edit-link" onclick="editCategory(${category.id})">Editar</a>
          <a href="#" class="is-size-7 delete-link" onclick="deleteCategory(${category.id})">Eliminar</a>
          <p></p>
      </article>
      </article>
    </section>`;

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
  inputEditarCategoria.innerHTML = "";

  for (let i = 0; i < categories.length; i++) {
    const filtroCategoria = `<option value="${categories[i].name}">${categories[i].name}</option>`
    
    selectCategorias.insertAdjacentHTML("beforeend", filtroCategoria);
    selectCategoriasOperacion.insertAdjacentHTML("beforeend", filtroCategoria);
    inputEditarCategoria.insertAdjacentHTML("beforeend", filtroCategoria);
  };  
};

//Función de carga inicial de values y categorías
const main = () => {
  setValueCategoriesSelect();
  categoriesFromList();
  imprimirCategorias()
};

main();

/*
 ************************************************************************************
                                    Reportes
 ************************************************************************************
*/

//Reporte elementos
const gananciaSumar = operaciones.some(el => el.tipo === 'ganancia');
const gastoRestar = operaciones.some(el => el.tipo === 'gasto');



/*
 ************************************************************************************
                                    Filtros
 ************************************************************************************
*/

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


// filtros "Tipo" y "Categoría"
/*let filtrosOperaciones = [...operaciones];

const filtros = (e) =>{
  let atr = '';
  if(e.target.id === 'input-tipo'){
    filtrosOperaciones = [...operaciones];
    selectCategoriasOperacion.value = 'todos';
    atr = 'tipo';
  } else {
    inputTipo.value = 'todos';
    atr = 'categoría'
  }

filtrosOperaciones = filtrosOperaciones.filter(operaciones => operaciones[atr] === e.target.value);
e.target.value === 'todos' ? escribirOperacion (operaciones) : escribirOperacion (filtrosOperaciones);
}

selectCategoriasOperacion.addEventListener('change', (e) => {filtros(e)});
inputTipo.addEventListener('change', (e) => {filtros(e)});
*/
// Filtros fecha

inputFechaFiltros.addEventListener('change', (e) =>{
  let resultado = operaciones.filter(operaciones => operaciones.fecha === e.target.value);
  escribirOperacion(resultado);
})

// Ordenar por
const ordernarSelect = document.getElementById('ordenar-select');

ordernarSelect.addEventListener('change', ()=>{
  let ordernarPor = [...operaciones];

  if(ordernarSelect.value === 'a-z'){
    ordernarPor.sort((a, b) => a.inputDescripcion > b.inputDescripcion ? 1 : -1)
  }

  if(ordernarSelect.value === 'z-a'){
    ordernarPor.sort((a, b) => a.inputDescripcion < b.inputDescripcion ? 1 : -1)
  }

  if(ordernarSelect.value === 'mas-reciente'){
    ordernarPor.sort((a, b) => a.inputFecha < b.inputFecha ? 1 : -1)
  }

  if(ordernarSelect.value === 'menos-reciente'){
    ordernarPor.sort((a, b) => a.inputFecha > b.inputFecha ? 1 : -1)
  }

  if(ordernarSelect.value === 'mayor-monto'){
    ordernarPor.sort((a, b) => Number(a.inputMonto) < Number(b.inputMonto) ? 1 : -1)
  }

  if(ordernarSelect.value === 'menos-monto'){
    ordernarPor.sort((a, b) => Number(a.inputMonto) > Number(b.inputMonto) ? 1 : -1)
  }

  escribirOperacion(ordernarPor)
})

/*
 ************************************************************************************
                                    Balance
 ************************************************************************************
*/

const balanceData = (operaciones) => {
  return operaciones.reduce(
    (balance, operacion) => {
      if (operacion.tipo === "ganancia") {
        return {
          //Entrar al array operaciones, buscar la operación, buscar balance
          ...balance,
          ganancia: Number(balance.ganancia) + Number(operacion.monto),
          total: Number(balance.total) + Number(operacion.monto),
        };
      }

      if (operacion.tipo === "gasto") {
        return {
          ...balance,
          gasto: Number(balance.gasto) + Number(operacion.monto),
          total: Number(balance.total) + Number(operacion.monto),
        };
      }
    },
    {
      ganancia: 0,
      gasto: 0,
      total: 0,
    }
  );
};

// Pintar balance

const balanceHTML = (operaciones) => {
  const objBalance = balanceData(operaciones);

  balanceTotal.classList.remove("has-text-danger", "has-text-success");

  if (objBalance.total > 0) {
    balanceTotal.classList.add("has-text-success");
  }
  if (objBalance.total < 0) {
    balanceTotal.classList.add("has-text-danger");
  }

  balanceGanancia.innerHTML = `$${objBalance["ganancias"]}`;
  balanceGasto.innerHTML = `$${objBalance["gastos"]}`;
  balanceTotal.innerHTML = `$${objBalance["total"]}`;
};