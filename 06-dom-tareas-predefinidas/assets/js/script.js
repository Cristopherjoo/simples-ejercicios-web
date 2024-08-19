 var tareas = [
   { tarea: "Pintar la fachada de la casa" },
   { tarea: "Comprar comida para el perro" },
   { tarea: "Pagar la tarjeta de crédito" },
 ];

  const btnWriteTask = document.getElementById("btnWriteTask");
  const formContainer = document.getElementById("formContainer");
  const inputNewTask = document.getElementById("inputNewTask");
  const btnAddTask = document.getElementById("btnAddTask");
  const tablaTareas = document.getElementById("tabla-tareas");
  const cuerpoTabla = document.getElementById("cuerpo-tabla");

  /*
  console.log(btnWriteTask);
  console.log(formContainer);
  console.log(inputNewTask);
  console.log(btnAddTask);
  console.log(tablaTareas);
  console.log(cuerpoTabla);
  */

// identificar la visibilidad del formulario
function toggleVisibility() {
  if (formContainer.style.display === "none" || formContainer.style.display === "") {
    formContainer.style.display = "block";
  } else {
    formContainer.style.display = "none";
  }
}

// mostrar formulario
btnWriteTask.addEventListener("click", () => {
  toggleVisibility();
});

// opciones del array de tareas
tareas.forEach((item, index) => {
  let option = document.createElement('option');
  option.value = index; 
  option.textContent = item.tarea;
  selectTask.appendChild(option);
});

// agregar tarea tabla
btnAddTask.addEventListener("click", () => {
  const selectedIndex = selectTask.value;

  if (selectedIndex !== "") {
    const taskToAdd = tareas[selectedIndex].tarea; 

    // crear una nueva fila
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${taskToAdd}</td>
                        <td><button class="btn btn-danger btn-finalizar">Finalizar</button></td>`;

    // agregar fila a la tabla
    cuerpoTabla.appendChild(newRow);
oiklllll
    
    selectTask.value = "";
    toggleVisibility();
  }
});

// eliminar tareas
cuerpoTabla.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("btn-finalizar")) {
    const row = event.target.closest("tr");
    if (row) {
      row.remove();
    }
  }
});
