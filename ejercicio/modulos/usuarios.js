import solicitud from "./solicitud.js"; //aqui importa el modulo solicitud para ver los usuarios

export const getUsuarios = async (URL, id) => { // aqui se esta expotando todo y no necesita usar luego export
  let ruta = ""; // aqui se usa la ruta para cambiar y depender de una la otra es para realizar algo en expecifico 
  if (id) { // se usa un if por si su id se encuentra  sino sera el else
    ruta = `${URL}/users?id=${id}`;//aqui es donde se busca el usuario que buscas en expecifico
  } else {
    ruta = `${URL}/users`;// aqui se ven los usuarios q no se encontraron especificamente
  }

  const usuarios = await solicitud(ruta); // aqui se accede a la promesa y esta luego se retorna segun la url 
  // en este se accede si la promesa es correcta y se retorna por el if 
  // y si no se desactiva el if y se activara el else
  return usuarios;
  // aqui se retornan los usuarios 
}