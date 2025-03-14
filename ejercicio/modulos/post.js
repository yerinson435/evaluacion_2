import solicitud from "./solicitud.js"; //aqui se accede al modulo solicitud
export const getPost = async (URL, usuario) => { //aqui se crea una promesa getpost 
  return await solicitud(`${URL}/posts?userId=${usuario.id}`)
  //aqui se obtiene el post de usuario porq necesita acceder a su id el cual es importante para imprimir los commentarios en expecifico

}