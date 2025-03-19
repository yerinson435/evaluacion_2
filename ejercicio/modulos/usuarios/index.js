// Importamos las funciones que vamos a usar desde el archivo de gestión de usuarios
import { traerUsuarios, traerUsuarioPorNombre, traerTodosLosUsuarios } from './gestionarUsuarios.js';

// Función para cargar todos los usuarios
export const cargarUsuarios = async () => {
    const usuarios = await traerUsuarios(); // Obtenemos usuarios
    console.log('Usuarios:', usuarios); // Mostramos los usuarios
};

// Función para cargar un usuario por nombre de usuario
export const cargarUsuarioPorUsername = async (username) => {
    const usuario = await traerUsuarioPorNombre(username); // Obtenemos un usuario específico
    console.log('Usuario encontrado:', usuario); // Mostramos el resultado
};

// Función para cargar todos los datos de todos los usuarios
export const cargarUsuariosCompletos = async () => {
    const usuarios = await traerTodosLosUsuarios(); // Obtenemos todos los usuarios completos
    console.log('Todos los usuarios completos:', usuarios); // Mostramos los datos completos
};
