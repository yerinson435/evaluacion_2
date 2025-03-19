// Creamos una función asíncrona para obtener publicaciones y comentarios
export const obtenerPublicacionesYComentarios = async () => {
    try {
        // Hacemos dos peticiones al mismo tiempo con fetch
        const publicacionesPromise = fetch('https://jsonplaceholder.typicode.com/posts');
        const comentariosPromise = fetch('https://jsonplaceholder.typicode.com/comments');

        // Esperamos ambas respuestas
        const [publicacionesRes, comentariosRes] = await Promise.all([publicacionesPromise, comentariosPromise]);

        // Convertimos las respuestas a JSON
        const publicaciones = await publicacionesRes.json();
        const comentarios = await comentariosRes.json();

        // Unimos publicaciones con sus respectivos comentarios
        const publicacionesFiltradas = publicaciones.map(post => {
            return {
                ...post, // Mantiene toda la info del post
                comentarios: comentarios.filter(comentario => comentario.postId === post.id) 
                // Agrega solo los comentarios que coinciden con el post.id
            };
        });

        // Retornamos las publicaciones con sus comentarios
        return publicacionesFiltradas;
    } catch (error) {
        // Capturamos cualquier error de la petición
        console.error('Error al obtener publicaciones o comentarios:', error);
        return []; // Devolvemos un array vacío en caso de error
    }
};
