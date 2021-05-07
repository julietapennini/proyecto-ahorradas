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

const inputEditCategoria = document.getElementById('input-editar-categoria');
const btnCancelEditarCategoria = document.getElementById('btn-cancel-edit-category');
const btnEditarCategoria = document.getElementById('btn-edit-edit-category');
const selectCategoriasOperacion = document.getElementById('categoria-operacion-select');

//Botón nueva operación
const btnNuevaOperacion = document.getElementById('btn-nueva-operacion');

//Inputs nueva operación
const inputDescripcion = document.getElementById('input-descripcion');
const inputMonto = document.getElementById('input-monto');
const inputTipo = document.getElementById('input-tipo');
const inputCategoria = document.getElementById('input-categoria');
const inputFecha = document.getElementById('input-fecha');

//Botón agregar-cancelar en nueva operación
const btnCancelar = document.getElementById('btn-cancelar');
const btnAgregar = document.getElementById('btn-agregar');

//TTabla peraciones
const tablaOperaciones = document.getElementById("tabla-operaciones");
const verSinOperaciones = document.getElementById("ver-sin-operaciones");

//Pintar operacion
const pintarEnBalance = document.getElementById('escribir-operacion');

//Botones editar-eliminar en página balance
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

//Botón ocultar/mostrar filtros
const btnOcultarFiltros = document.getElementById('btn-ocultar-filtros');
const filtros = document.getElementById('filtros');

//Filtros
const filtroTipo = document.getElementById('filtro-tipo');
const selectCategorias = document.getElementById('filtro-categoria');
const filtroFecha = document.getElementById('filtro-fecha');
const filtroOrdenar = document.getElementById('filtro-ordenar');

//Balance
const balanceGanancias = document.getElementById("balance-ganancias");
const balanceGastos = document.getElementById("balance-gastos");
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
  editarCategoria.style.display = 'none'
})

//Botón categorias
btnCategorias.addEventListener('click', () => {
  paginaBalance.style.display = 'none'
  paginaCategorias.style.display = 'block'
  paginaReportes.style.display = 'none'
  paginaNuevaOperacion.style.display = 'none'
  paginaEditarOperacion.style.display = 'none'
  editarCategoria.style.display = 'none'
})

//Botón reportes
btnReportes.addEventListener('click', () => {
  paginaBalance.style.display = 'none'
  paginaCategorias.style.display = 'none'
  paginaReportes.style.display = 'block'
  paginaNuevaOperacion.style.display = 'none'
  paginaEditarOperacion.style.display = 'none'
  editarCategoria.style.display = 'none'
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
filtroFecha.value = date();
inputEditarFecha.value = inputFecha.value;


/*
 ************************************************************************************
                                    Operaciones
 ************************************************************************************
*/
const generateId = () => {
  let p1 = Math.floor(Math.random() * 0x10000);
  //console.log(p1, p1.toString(16));
  let p2 = new Date().getTime();
  return `${p1}${p2}`;
};

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
const checkearOperaciones = (operaciones) => {
    //Si no hay operaciones, ocultar tabla y mostrar imagen.
  if (operaciones == 0){
    tablaOperaciones.style.display = 'none' ;
    verSinOperaciones.style.display = 'block' ;
    //Si hay operaciones, mostrar tabla y ocultar imagen. 
  } else {
    tablaOperaciones.style.display = 'block' ;
    verSinOperaciones.style.display = 'none' ;
  }
};

let operaciones = [];

//AGREGAR OPERACIÓN


//Botón agregar operación
btnAgregar.addEventListener('click', () => {

  const pintarOperacion = {
    id: generateId(),
    descripcion: inputDescripcion.value,
    monto: inputMonto.value,
    tipo: inputTipo.value,
    categoria: selectCategoriasOperacion.value,
    fecha: inputFecha.value,
  }

  if (pintarOperacion.tipo === "gasto") {
    pintarOperacion.monto = Number(pintarOperacion.monto) * -1;
  }

  operaciones.push(pintarOperacion);
  localStorage.setItem('operacionesStorage', JSON.stringify(operaciones));
  const tomarOperacionesStorage = JSON.parse(
    localStorage.getItem('operacionesStorage')
  );

  operacionResetearFormulario()
  escribirOperacion(tomarOperacionesStorage);
  balanceHTML(tomarOperacionesStorage);
  /*paginaReportes(tomarOperacionesStorage);*/

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
      <div class="column is-3 is-medium">${operaciones[i].descripcion}</div>
      <div class="column is-3" is-medium>${operaciones[i].categoria}</div>
      <div class="column is-2 is-medium">${operaciones[i].fecha}</div>
      <div class="column is-2 is-medium has-text-right ${operaciones[i].tipo === 'ganancia' ? 'tag is-primary is-light is-rounded' : 'tag is-danger is-light is-rounded'}">$${operaciones[i].monto}</div>
      <div class="column is-2 is-medium has-text-right">
        <button class="button is-inverted tag is-link" onclick="editarOperacion('${operaciones[i].id}')"><i class="fas fa-pen"></i></i></button>
        <button class="button is-inverted tag is-danger" onclick="eliminarOperacion('${operaciones[i].id}')"><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>`

    pintarEnBalance.insertAdjacentHTML('beforeend', caja)
  }
}

operaciones = JSON.parse(localStorage.getItem("operacionesStorage")) ?? operaciones;
escribirOperacion(operaciones);
checkearOperaciones(operaciones);

//EDITAR OPERACIONES

// posición en el arrego de la operación a editar
let posicion;

const editarOperacion = (operacion) => {

  paginaBalance.style.display = 'none';
  paginaEditarOperacion.style.display = 'block'

  posicion = operaciones.findIndex((elem) => elem.id === operacion);

  if (inputEditarTipo.value === "gasto") {
    inputEditarMonto.value = Number(operaciones[posicion].monto) * -1;
  }

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
  /*reportes(operaciones);*/
  
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
    /*reportes(operations);*/
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
let index;
const editCategory = (category) => {
  editarCategoria.style.display = 'block'
  paginaCategorias.style.display = 'none'

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

  escribirOperacion(operaciones);
  balanceHTML(operaciones);
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
  escribirOperacion(operaciones);
  balanceHTML(operaciones);
  editarCategoria.style.display = 'none'
  paginaCategorias.style.display = 'block'
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
          <span class="tag is-info is-light is-rounded">${category.name}</span>
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

  balanceGanancias.innerHTML = `$${objBalance["ganancia"]}`;
  balanceGastos.innerHTML = `$${objBalance["gasto"]}`;
  balanceTotal.innerHTML = `$${objBalance["total"]}`;
};

//Los ejecutamos en la funcíon de pintar operaciones, editar operaciones y en filtros. Para que tome los valores cada vez que cambiamos las operaciones.

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
const reporteResumen = document.getElementById("reporte-resumen");
const categoriaMayorGanancia = document.getElementById("categoria-mayor-ganancia");
const categoriaMayorGasto = document.getElementById("categoria-mayor-gasto");
const categoriaMayorBalance = document.getElementById("categoria-mayor-balance");
const mesMayorGanancia = document.getElementById("mes-mayor-ganancia");
const mesMayorGasto = document.getElementById("mes-mayor-gasto");
const reporteTotalCateg = document.getElementById("reporte-total-categorias");
const reporteTotalMes = document.getElementById("reporte-total-mes");

let reportsSections = {
  resumen: [],
  totalesCategory: [],
  totalesMes: [],
};

//Mostrar/ocultar la sección no hay reportes o la lista de reportes.
const mostrarListaReportes = (Operaciones) => {
    for (let i = 0; i < operaciones.length; i++) {
    //Si no hay operaciones mostrar imagen.
    if (Operaciones === 0){
      listadoReportes.classList.add("is-hidden");
      sinReportes.classList.remove("is-hidden");
    //Si hay operaciones mostrar lista y ocultar imagen
    } else {
      sinReportes.classList.add("is-hidden");
      listadoReportes.classList.remove("is-hidden");
    }
  }};
  mostrarListaReportes(operaciones);

  generaReporte = ()=>{
    let reportesGeneralesCategorias = [];
    categories.forEach((category) => {
        let itemReport = {
         category: category.name,
         ganancia: 0,
         gasto: 0,
         balance: 0,
        };
        operaciones.forEach((operaciones) => {
            if (category.name === operaciones.category) {
                if (operaciones.tipo === "gasto") {
                    itemReport.gasto += parseFloat(operaciones.monto);
                }
                if (operaciones.tipo === "ganancia") {
                    itemReport.ganancia += parseFloat(operaciones.monto);
            }
        }
    });
    itemReport.balance = itemReport.ganancia - itemReport.gasto;
    reportesGeneralesCategorias.push(itemReport);
 });
 reportsSections.totalesCategory = reportesGeneralesCategorias;

 let maxGanancia = getMaximosCategory("ganancia");
 let maxGasto = getMaximosCategory("gasto");
 let maxBalance = getMaximosCategory("balance");

 reportsSections.resumen.push({
    title: "Categoría con mayor ganancia",
    category: maxGanancia.category,
    monto: maxGanancia.ganancia,
  });
  reportsSections.resumen.push({
    title: "Categoría con mayor gasto",
    category: maxGasto.category,
    monto: maxGasto.gasto,
  });
  reportsSections.resumen.push({
    title: "Categoría con mayor balance",
    category: maxBalance.category,
    monto: maxBalance.balance,
  });
  pintarReporte();
};

const getMaximosCategory = (campo) => {
    return reportsSections.totalesCategory.reduce((prev, current) =>
      prev[campo] > current[campo] ? prev : current
    );
  };

  pintarReporte = () => {
    reporteTotalCateg.innerHTML = "";
    reportsSections.totalesCategory.forEach((category) => {
      let nodo = document.createElement("div");
      nodo.innerHTML = `
      <div class="columns has-text-weight-medium is-mobile">
      <div class="column">${category.category}</div>
      <div class="column">${category.ganancia}</div>
      <div class="column">${category.gasto}</div>
      <div class="column">${category.balance}</div>
    </div>
    `;
     reporteTotalCateg.appendChild(nodo);
    });
  
    reportResumen.innerHTML = "";
    reportsSections.resumen.forEach((resumen) => {
      let nodo = document.createElement("div");
      nodo.innerHTML = `
      <div class="columns has-text-weight-medium is-mobile">
        <div class="column">${resumen.title}</div>
        <div class="column">
          <span class="tag is-info is-light is-medium">${resumen.category}</span>
        </div>
        <div class="column">${resumen.monto}</div>
      </div>
    `;
      reportResumen.appendChild(nodo);
    });
  };
  
/*
 ************************************************************************************
                                    Filtros
 ************************************************************************************
*/

//Botón ocultar-mostrar filtros
btnOcultarFiltros.addEventListener('click', () => {
  if (btnOcultarFiltros.innerText === 'Ocultar filtros') {
    btnOcultarFiltros.innerText = 'Mostrar filtros'
    filtros.style.display = 'none'
  } else {
    btnOcultarFiltros.innerText = 'Ocultar filtros'
    filtros.style.display = 'block'
  }
});

//Filtros tipo y categoría
const filtrado = (e) => {
  operacionesFiltradas = [...operaciones];

  let elegirValor = '';

  if (e.target.id === 'filtro-tipo'){
    operacionesFiltradas = [...operaciones];
    selectCategorias.value = 'Todas';
    elegirValor = 'tipo';
    
  } else{
    filtroTipo.value = 'todos';
    elegirValor = 'categoria';
  }

  operacionesFiltradas = operacionesFiltradas.filter(operaciones => operaciones[elegirValor]=== e.target.value);
  if (e.target.value === 'todos'|| e.target.value === 'Todas') {
    escribirOperacion(operaciones);
  } else{
    escribirOperacion(operacionesFiltradas);
  }
}

selectCategorias.addEventListener('change', (e)=> {filtrado(e)});
filtroTipo.addEventListener('change', (e)=> {filtrado(e)});

//Filtro fecha
filtroFecha.addEventListener('change', (e)=> {
  let resultadoFecha = operaciones.filter(operaciones => operaciones.fecha === e.target.value);

  escribirOperacion(resultadoFecha);
})

//Filtro ordenar
filtroOrdenar.addEventListener('change', ()=>{

  let resultadoOrdenar = [...operaciones];

  if(filtroOrdenar.value === 'a-z'){
    resultadoOrdenar.sort((a, b) => a.descripcion > b.descripcion ? 1 : -1)
  }
  if(filtroOrdenar.value === 'z-a'){
    resultadoOrdenar.sort((a, b) => a.description < b.description ? 1 : -1)
  }
  if(filtroOrdenar.value === 'mas-reciente'){
    resultadoOrdenar.sort((a, b) => a.fecha < b.fecha ? 1 : -1)
  }
  if(filtroOrdenar.value === 'menos-reciente'){
    resultadoOrdenar.sort((a, b) => a.fecha > b.fecha ? 1 : -1)
  }
  if(filtroOrdenar.value === 'mayor-monto'){
    resultadoOrdenar.sort((a, b) => Number(a.amount) < Number(b.amount) ? -1 : 1)
  }
  if(filtroOrdenar.value === 'menor-monto'){
    resultadoOrdenar.sort((a, b) => Number(a.amount) > Number(b.amount) ? 1 : -1)
  }

  escribirOperacion(resultadoOrdenar);
  balanceHTML(operaciones);
})