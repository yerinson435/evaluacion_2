import solicitud from "./solicitud.js";//accede al modulo solicitud
export const getCommets = async (URL, post) => { // el get commit aqui se usa para acceder un id y asi visualizar los comentarios del post
  
  return await solicitud(`${URL}/comments?postId=${post.id}`) //se usa el url para acceder a la pagina y retornar como objeto
}