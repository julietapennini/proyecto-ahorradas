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

const btnEliminarOperacion = document.getElementById('btn-eliminar-operacion');
const btnEditarOperacion = document.getElementById('btn-editar-operacion');

//Páginas
const paginaBalance = document.getElementById('pagina-balance');
const paginaNuevaOperacion = document.getElementById('pagina-nueva-operacion');
const paginaEditarOperacion = document.getElementById('pagina-editar-operacion');
const paginaCategorias = document.getElementById('pagina-categorias');
const paginaReportes = document.getElementById('pagina-reportes');
const editarCategoria = document.getElementById('editar-categoria');

//Inputs nueva operación
const inputDescripcion = document.getElementById('input-descripcion');
const inputMonto = document.getElementById('input-monto');
const inputTipo = document.getElementById('input-tipo');
const inputCategoria = document.getElementById('input-categoria');
const inputFecha = document.getElementById('input-fecha');



//Operaciones
const tablaOperaciones = document.getElementById("tabla-operaciones");
const verSinOperaciones = document.getElementById("ver-sin-operaciones");

//Pintar operacion
const pintarEnBalance = document.getElementById('escribir-operacion');

//Categorias
const categoriaInput = document.getElementById('categoria-input');
const agregarCategoria = document.getElementById('agregar-categoria-boton');
const listaCategorias = document.getElementById('lista-categorias');
const selectCategorias = document.getElementById('categoria-select');
const inputEditCategoria = document.getElementById('input-editar-categoria');
const btnCancelEditarCategoria = document.getElementById('btn-cancel-edit-category');
const btnEditarCategoria = document.getElementById('btn-edit-edit-category');
const selectCategoriasOperacion = document.getElementById('categoria-operacion-select');

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
btnCancel.addEventListener('click', () => {
  paginaBalance.style.display = 'block'
  paginaNuevaOperacion.style.display = 'none'
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


/*
 ************************************************************************************
                                    Operaciones
 ************************************************************************************
*/

//NUEVA OPERACIÓN

//Creando categorías
let categories = [
  { id: 0, name: "Servicios" },
  { id: 1, name: "Trasporte" },
  { id: 2, name: "Educación" },
  { id: 3, name: "Trabajo" },
  { id: 4, name: "Comida" },
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
  /*balanceHTML(tomarOperacionesStorage);
  paginaReportes(tomarOperacionesStorage);
  filtrarOperaciones()*/

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
        <button class="editar-op" >Editar</button>
        <button class="editar-op">Eliminar</button>
      </div>
    </div>`

    pintarEnBalance.insertAdjacentHTML('beforeend', caja)
  }
}

operaciones =
  JSON.parse(localStorage.getItem("operacionesStorage")) ?? operaciones;
escribirOperacion(operaciones);
checkearOperaciones();

/*
//EDITAR OPERACIONES
const btnOne = document.getElementById('bnt-one');

const mostrarSeccionEditarOperacion = () => {
  paginaNuevaOperacion.style.display = 'none'
  paginaBalance.style.display = 'none'
  paginaEditarOperacion.style.display = 'block'
};

const ocultarSeccionEditarOperacion = () => {
  paginaBalance.style.display = 'block'
  paginaEditarOperacion.style.display = 'none'
};

// Determinar posición en el arrego de la operación a editar
let posicion;

const editarOperacion = (operacion) => {

  ocultarSeccionEditarOperacion();

  posicion = operaciones.findIndex((elem) => elem.id === operacion);

  inputDescripcion.value = operaciones[posicion].descripcion;
  inputMonto.value = operaciones[posicion].monto;
  inputTipo.value = operaciones[posicion].tipo;
  selectCategoriasOperacion.value = operaciones[posicion].categoria;
  inputFecha.value = operaciones[posicion].fecha;

  if (inputTipo.value === "gasto") {
    inputMonto.value = Number(operaciones[posicion].monto) * -1;
  }
  return posicion;
};
*/

//Botón editar operación
btnEditarOperacion.addEventListener("click", () => {
  alert('hola boluda')
  operaciones[posicion].descripcion = inputDescripcion.value;
  operaciones[posicion].monto = inputMonto.value;
  operaciones[posicion].tipo = inputTipo.value;
  operaciones[posicion].categoria = selectCategoriasOperacion.value;
  operaciones[posicion].fecha = inputFecha.value;

  if (operaciones[posicion].tipo === "gasto") {
    operaciones[posicion].monto = Number(inputMonto.value) * -1;
  }

  localStorage.setItem("operacionesStorage", JSON.stringify(operaciones));
  escribirOperacion(operaciones);
  balanceHTML(operaciones);
  reportes(operaciones);
  filtrarOperaciones();

  ocultarSeccionEditarOperacion();
});

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
 
  for (let i = 0; i < categories.length; i++) {
    const filtroCategoria = `<option value="${categories[i].name}">${categories[i].name}</option>`
    
    selectCategorias.insertAdjacentHTML("beforeend", filtroCategoria);
    selectCategoriasOperacion.insertAdjacentHTML("beforeend", filtroCategoria);
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

//DOM Reportes
const listadoReportes = document.getElementById("listado-reportes");
const sinReportes = document.getElementById("sin-reportes");
const categoriaMayorGanancia = document.getElementById("categoria-mayor-ganancia");
const categoriaMayorGasto = document.getElementById("categoria-mayor-gasto");
const categoriaMayorBalance = document.getElementById("categoria-mayor-balance");
const mesMayorGanancia = document.getElementById("mes-mayor-ganancia");
const mesMayorGasto = document.getElementById("mes-mayor-gasto");
const reporteTotalCateg = document.getElementById("reporte-total-categorias");
const reporteTotalMes = document.getElementById("reporte-total-mes");

//Mostrar/ocultar la sección no hay reportes o la lista de reportes.
const reportes = (operaciones) => {
  if (
    pintarOperacion("ganancia", operaciones).length &&
    pintarOperacion("gasto", operaciones).length
  ) {
    sinReportes.classList.add("is-hidden");
    listadoReportes.classList.remove("is-hidden");
  } else {
    sinReportes.classList.remove("is-hidden");
    listadoReportes.classList.add("is-hidden");
  }
  gastosGananciasPorCategorias(operaciones);
  gastosGananciasMes(operaciones);
};

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


