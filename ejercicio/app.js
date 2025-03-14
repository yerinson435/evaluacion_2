import { getUsuarios, getPost, getCommets, getAlbums, getPhotos } from "./modulos/index.js";
//este barril ingresa todos los modelos hechos anteriormente 

const URL = "https://jsonplaceholder.typicode.com"; //este URL es el que es repetido por todo lo q son las partes

const manejardatos = async () => { //maneja los datos de la promesa principal para q se ejecute todo

  const usuarios = await getUsuarios(URL);//se accede al metodo getusuarios que nos devuelve un objeto 
  return await Promise.all(usuarios.map(async (usuario) => {
    //el map de usa para recorrer el arrglo y retornar con el usuario
    //aqui se retorna la promesa q necesita para imprimir los datos que se ejecuten
    //el promise all es para que cumplan las condiciones en las promesas

    const posts = await getPost(URL, usuario);//accede a metodo post que necesita usuario
  
    const comentPost = await Promise.all(posts.map(async (post) => {
      //el map de usa para recorrer el arrglo y retornar con el post
      //el commentpost es una promesa que se cumplira para imprimir

      const coments = await getCommets(URL, post);//los comentarios se acceden con el metodo q se requiere en este caso el argumento post
  
      return { ...post, coments }; //se retorna el commetpost en el orden en el cual se puede ver en este caso
    }));
    const albums = await getAlbums(URL, usuario);//aqui se realiza algo similar a lo de arriba solo que esta vez es para ver los post se ve los albunes
   
    const photoAlbum = await Promise.all(albums.map(async (albums) => {
      //el map de usa para recorrer el arrglo y retornar con los albums
      const photos = await getPhotos(URL, albums);
      return { ...albums, photos };
    }));
    return { ...usuario, photoAlbum, comentPost }; //aqui es una de las partes mas importantes ya que este es el q imprime todo la informacion del usuario
  }));
};
manejardatos().then((data) => { //aqui se accede a la impresion de la promesa 
  console.log(data);
});