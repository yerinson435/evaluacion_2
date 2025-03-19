// Creamos una función asíncrona para obtener tareas
export const obtenerTareasPendientes = async () => {
    try {
        // Realizamos la petición para obtener todas las tareas
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
        const tareas = await respuesta.json(); // Convertimos la respuesta a JSON

        // Filtramos solo las tareas que no han sido completadas (completed = false)
        const pendientes = tareas.filter(tarea => !tarea.completed);

        // Retornamos solo las tareas pendientes
        return pendientes;
    } catch (error) {
        // Si ocurre un error lo mostramos en consola
        console.error('Error al obtener las tareas pendientes:', error);
        return []; // Retornamos un array vacío en caso de error
    }
};
