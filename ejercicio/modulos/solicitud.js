const solicitud = async url => { /// aqui se usa url para acceder a las solicitudes el usuario
  const peticion = await fetch(url); //aqui se accede con un fetch y este lo devueve a los valores

  const data = await peticion.json(); // aqui necesitamos acceder a la peticion anterioe pero sucede q se vuelve .json para q se un objeto
  return data//retorna data que es el objeto con los valoers
}

export default solicitud //aqui se exporta todo de los modulos para que hagan uso de el porq este no esta en el index 
