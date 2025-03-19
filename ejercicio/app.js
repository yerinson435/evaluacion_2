// Importamos todo lo que venga de index.js dentro de la carpeta modulos
import * as modulos from "./modulos/index.js";

const menu = () => {
    let opcion;
    do {
        opcion = prompt(
            "Selecciona una opción:\n1. Usuarios\n2. Posts\n3. Tareas\n4. Salir"
        );

        switch (opcion) {
            case "1":
                modulos.solicitarUsuarios();
                modulos.solicitarUsuariosUsername();
                modulos.usuariosTodo();
                break;
            case "2":
                modulos.filtrarPostsYComentarios();
                break;
            case "3":
                modulos.listarTareasPendientes();
                break;
            case "4":
                alert("Saliendo...");
                break;
            default:
                alert("Opción inválida, intenta nuevamente");
        }
    } while (opcion !== "4");
};

menu();
