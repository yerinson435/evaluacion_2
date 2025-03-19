import { obtenerPublicacionesYComentarios } from './procesarPublicaciones.js'; // Importamos la función

// Creamos una función para cargar y mostrar las publicaciones
export const cargarPosts = async () => {
    const resultado = await obtenerPublicacionesYComentarios(); // Obtenemos publicaciones y comentarios
    console.log('Publicaciones con comentarios:', resultado); // Mostramos en consola
};
