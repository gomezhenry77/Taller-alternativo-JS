/* 1. Cree un arreglo de 20 números (positivos y negativos) de forma 
tradicional e imprima en consola el arreglo */

/* let numeros = [5,-2,10,-15,20,-25,30,-35,40,-45,50,-55,60,-65,70,-75,80,-85,0,-100]
console.log(numeros)
 */
/* 2. Cree un arreglo de 20 números (positivos y negativos) de forma 
POO e imprima en consola */

/* let numeros = [
    {positivos: [15,20,40,30,50,80,100,11,45,35]},
    {negativos: [-8,-14,-28,-62,-1,-71,-98,-102,-9,-4]}
]
console.log(numeros) */

/* 3. Recorra uno de los 2 arreglos anteriores e imprima solo los números 
positivos */

/*  let numeros = [5,-2,10,-15,20,-25,30,-35,40,-45,50,-55,60,-65,70,-75,80,-85,0,-100]

numeros.forEach(function(numeros){
    if (numeros>0) {
        console.log(numeros)
    }
});  */



/* 4. Declare un objeto que con 10 atributos defina con claridad una 
película de Netflix, imprima por consola este objeto */

/* let pelicula = {
    nombre: "La marca del demonio",
    director: "Chapatín",
    genero:"Terror",
    duracion: 3 + " horas",
    año: 2020,
    protagonista: "Juan de la Cruz",
    antagonista: "El malo",
    productor: "Henry Gomez",
    popularidad: 5,
    cartelera: 1
}
console.log(pelicula) */

/* 5. Accede por separado e imprima por consola cada uno de los 10 
atributos declarados anteriormente en el objeto película */

/* let pelicula = {
    nombre: "La marca del demonio",
    director: "Chapatín",
    genero:"Terror",
    duracion: 3 + " horas",
    año: 2020,
    protagonista: "Juan de la Cruz",
    antagonista: "El malo",
    productor: "Henry Gomez",
    popularidad: 5,
    cartelera: 1
}
console.log(pelicula.nombre)
console.log(pelicula.director)
console.log(pelicula.genero)
console.log(pelicula.duracion)
console.log(pelicula.año)
console.log(pelicula.protagonista)
console.log(pelicula.antagonista)
console.log(pelicula.productor)
console.log(pelicula.popularidad)
console.log(pelicula.cartelera) */

/* 6. Cree un arreglo de 5 películas */

/* let peliculas = [
    {
        nombre: "La marca del demonio",
        director: "Chapatín",
        genero:"Terror",
        duracion: 3 + " horas",
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    },
    {
        nombre: "La última ola",
        director: "Chapatín",
        genero:"Terror",
        duracion: 3 + " horas",
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    },
    {
        nombre: "Rápidos y furiosos 17",
        director: "Chapatín",
        genero:"Terror",
        duracion: 3 + " horas",
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    },
    {
        nombre: "Terror en las alturas",
        director: "Chapatín",
        genero:"Terror",
        duracion: 3 + " horas",
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    },
    {
        nombre: "Clandestino",
        director: "Chapatín",
        genero:"Terror",
        duracion: 3 + " horas",
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    }
]
console.log(peliculas) */

/* 7. Recorra el arreglo de películas y utilizando el DOM pinte en pantalla 
todos los nombres y duración de las 5 películas  */

/*  let peliculas = [
    {
        nombre: "La marca del demonio",
        director: "Chapatín",
        genero:"Terror",
        duracion: 3 + " horas",
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    },
    {
        nombre: "La última ola",
        director: "Chapatín",
        genero:"Terror",
        duracion: 3 + " horas",
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    },
    {
        nombre: "Rápidos y furiosos 17",
        director: "Chapatín",
        genero:"Terror",
        duracion: 2 + " horas",
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    },
    {
        nombre: "Terror en las alturas",
        director: "Chapatín",
        genero:"Terror",
        duracion: 90 + " minutos",
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    },
    {
        nombre: "Clandestinos",
        director: "Chapatín",
        genero:"Terror",
        duracion: 100 + " minutos",
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    }
]

let contenedor=document.getElementById("contenedor")

peliculas.forEach(function(peliculas){
    let nombre=document.createElement("h3")
    nombre.classList.add("fw-bold")
    nombre.textContent=peliculas.nombre

    let duracion=document.createElement("h2")
    duracion.classList.add("fw-bold")
    duracion.textContent=peliculas.duracion

    contenedor.appendChild(nombre)
    contenedor.appendChild(duracion)
}
);  */

/* 8. Obtenga un nuevo arreglo de películas cuya duración sea menor a 
2 horas */

 /* let peliculas = [
    {
        nombre: "La marca del demonio",
        director: "Chapatín",
        genero:"Terror",
        duracionMinutos: 80,
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    },
    {
        nombre: "La última ola",
        director: "Chapatín",
        genero:"Terror",
        duracionMinutos: 74,
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    },
    {
        nombre: "Rápidos y furiosos 17",
        director: "Chapatín",
        genero:"Terror",
        duracionMinutos: 95,
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    },
    {
        nombre: "Terror en las alturas",
        director: "Chapatín",
        genero:"Terror",
        duracionMinutos: 90,
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    },
    {
        nombre: "Clandestinos",
        director: "Chapatín",
        genero:"Terror",
        duracionMinutos: 100,
        año: 2020,
        protagonista: "Juan de la Cruz",
        antagonista: "El malo",
        productor: "Henry Gomez",
        popularidad: 5,
        cartelera: 1
    }
]

peliculas.forEach(function(peliculas){
    if (peliculas.duracionMinutos<95) {
        console.log(peliculas);
    }
}); 


 numeros.forEach(function(numeros){
    if (numeros>0) {
        console.log(numeros)
    })  */


/* 9. Declare un arreglo de 20 nombres, recórralo y mediante una 
función obtenga un nuevo arreglo con nombres que tengan más 
de 5 letras */

/*  let nombres=["Henry","Paula","Valentina","Emerson","Milu","Loki","Maria","Pedro","David","Ligia","Felicio"]
nombres.forEach(function(nombres){
    tamanoNombre = nombres.length
    if (tamanoNombre > 5){
        console.log(nombres);
    }
});  */



