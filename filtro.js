// Tenemos un li de productos en un arreglo

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos") // se corrige la sintaxis para llamar al elemento lista
const $i = document.querySelector('.input');

// el ciclo for es para que se muestre en el html todo el catalogo
for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto") // esto le agrega una clase al div

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d);
}

function displayProductos(productos) {// le falta la palabra function y error en la sintaxis de la funcion, faltan las llaves
const botonDeFiltro = document.querySelector(".button"); // se agrega un punto a la sintaxis para llamar a la clase

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  };

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtro(productos, texto);
  console.log(productosFiltrados);
  
// el ciclo for sirve para mostar en el html la info de los productos filtrados.
  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");
  
    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti);
    d.appendChild(imagen);
  
    li.appendChild(d);
  }
  // Prefiero usar esta sintaxis para la funcion en lugar de una funcion anonima.la funcion de filto debe estar dentro de la funcion del botton.onclick
  function filtro(productos, texto){
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
    
  };
};


};

displayProductos(productos); // faltaba invocar a la funcion con el parametro de productos.

