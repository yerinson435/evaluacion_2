// Importamos la función que listará las tareas pendientes
import { obtenerTareasPendientes } from './gestionarTareas.js';

// Creamos una función asíncrona que usaremos para cargar las tareas
export const cargarTareas = async () => {
    const tareas = await obtenerTareasPendientes(); // Llamamos la función que retorna solo las tareas pendientes
    console.log('Tareas pendientes:', tareas); // Mostramos el resultado en consola
};
