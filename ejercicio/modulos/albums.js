import solicitud from "./solicitud.js"; //se accede ak modulo de solicitud
export const getAlbums = async (URL, usuario) => { // esta permite desplazarce por todo pero la solicitud rquiere un id especifico
  return await solicitud(`${URL}/albums?userId=${usuario.id}`)
}