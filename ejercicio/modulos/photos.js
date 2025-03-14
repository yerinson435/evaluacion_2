import solicitud from "./solicitud.js"; //aqui se acceder a un solicitud para esta usarla para ver las fotos

export const getPhotos = async (URL, album) => {
  //aqui se necesita un album q tenga necesario un id del mismo para q asi imprima todas las fotos 
  return await solicitud(`${URL}/photos?albumId=${album.id}`)
}