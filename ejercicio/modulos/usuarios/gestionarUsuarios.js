// Función para obtener todos los usuarios
export const traerUsuarios = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return data; // Retornamos los usuarios
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return []; // Retornamos array vacío si hay error
    }
};

// Función para obtener un usuario por su username
export const traerUsuarioPorNombre = async (username) => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        // Buscamos el usuario que coincida con el username
        return data.find(user => user.username.toLowerCase() === username.toLowerCase());
    } catch (error) {
        console.error('Error al buscar usuario:', error);
        return null; // Retornamos null si no encontramos o hay error
    }
};

// Función para obtener todos los datos completos de todos los usuarios
export const traerTodosLosUsuarios = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return data; // Retornamos todos los usuarios completos
    } catch (error) {
        console.error('Error al obtener usuarios completos:', error);
        return []; // Array vacío en caso de error
    }
};
