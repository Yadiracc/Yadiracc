document.addEventListener("DOMContentLoaded", function () {
    const citas = JSON.parse(localStorage.getItem("citas")) || [];

    const tablaCitas = document.getElementById("tablaCitas").getElementsByTagName("tbody")[0];
    
    citas.forEach((cita, index) => {
        const fila = tablaCitas.insertRow();
        fila.innerHTML = `
            <td>${cita.nombre}</td>
            <td>${cita.correo}</td>
            <td>${cita.dni}</td>
            <td>${cita.telefono}</td>
            <td>${cita.fecha}</td>
            <td>${cita.hora}</td>
            <td>${cita.mensaje}</td>
            <td>
                <button class="editar">Editar</button>
                <button class="cancelar">Cancelar</button>
                <button class="eliminar">Eliminar</button>
            </td>
        `;

        // si la cita se cancela s
        if (cita.estado === "Cancelada") {
            fila.style.textDecoration = "line-through";
            fila.style.color = "gray";
        }

        // Asignar eventos a los botones
        fila.querySelector(".editar").addEventListener("click", () => editarCita(index));
        fila.querySelector(".cancelar").addEventListener("click", () => cancelarCita(index, fila));
        fila.querySelector(".eliminar").addEventListener("click", () => eliminarCita(index));
    });

    function editarCita(index) {
        const cita = citas[index];
        const nuevoNombre = prompt("Editar Nombre:", cita.nombre);
        const nuevoCorreo = prompt("Editar Correo:", cita.correo);
        const nuevaFecha = prompt("Editar Fecha (DD-MM-YYYY):", cita.fecha);
        const nuevaHora = prompt("Editar Hora (HH:MM):", cita.hora);
        const nuevoMensaje = prompt("Editar Mensaje:", cita.mensaje);

        if (nuevoNombre && nuevoCorreo && nuevaFecha && nuevaHora) {
            citas[index] = {
                ...cita, 
                nombre: nuevoNombre,
                correo: nuevoCorreo,
                fecha: nuevaFecha,
                hora: nuevaHora,
                mensaje: nuevoMensaje,
            };
            localStorage.setItem("citas", JSON.stringify(citas));
            location.reload(); // Recargar la página para actualizar la tabla
        } else {
            alert("Debe rellenar todos los campos para editar la cita.");
        }
    }

    function cancelarCita(index, fila) {
        if (confirm("¿Estás seguro de cancelar la cita?")) {
            citas[index].estado = "Cancelada";
            localStorage.setItem("citas", JSON.stringify(citas));
            fila.style.textDecoration = "line-through"; // Aplicar estilos directamente
            fila.style.color = "gray";
            location.reload(); 
        }
    }

    function eliminarCita(index) {
        if (confirm("¿Estás seguro de eliminar la cita?")) {
            citas.splice(index, 1); // Eliminar la cita del array
            localStorage.setItem("citas", JSON.stringify(citas));
            location.reload(); // Recargar la página para reflejar el cambio
        }
    }
});
