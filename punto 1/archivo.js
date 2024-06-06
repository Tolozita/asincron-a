// //Creamos una variable constante y le asignamos una funcion flecha a la cual le asignamos como parametro (x) y nos retornara verdadero si el 'name' de 'x' es igual a "Evaluacion".

// const filtrar = x => x.name === "Evaluacion";

// // creamos una funcion (funcion flecha) anonima  autoejecutable y la convertimos a asincrona con el modificador Async, esta funcion nos retornara una promesa
// (async () => { 

//     // Creamos una variable  llamada response y le asignamos el resultado de 'fetch' con el archivo (user.json). el operador await asegura que esperamos la respuesta de la promesa.
//     let response = await fetch(`user.json`)
//     // creamos una variable user esta almacenara la promesa retornada de response, con el metodo json el cual nos permite acceder a la informacion. l operador await asegura que esperamos la respuesta de la promesa.
//     let user = await response.json();

//     let respuestGithub = await fetch(`https://api.github.com/users/${user.name}/repos`); // creamos una variable llamada respuestaGithub y le asignamos el operador await junto al metodo fetch al cual le solicitamos la api de github
//     let usuariogithub = await respuestGithub.json();  //creamos una variable usuariogithub a la cual le asignamos el operador await junto a respuestaGithub.json() esta variable es la q almacena

// // le aplicamos el metodo forEach a la variable usuariogithub el cual ejecuta la funcion a cada elemento del arreglo. la funcion flecha que tiene como parametro element ejecuta una condicional la cual
// //filtra el nombre del elemento el cual debe ser exactamente igual a Evaluacion y si es verdadero nos imprimira el elemento
// usuariogithub.forEach(element => {
//     if (element.name === "Evaluacion"){
//         console.log(element)
//     }
// });

// //creamos una la variable data la cual almacena la respuesta de usuariogithub y la filtra con el metodo filter y como parametro la funcion filtrar
//  let data = usuariogithub.filter(filtrar)
//  console.log(data) // imprimimos data
//  console.log(usuariogithub) // imprimimos usuariogithub

// })();

const filtrar = x => x.name === "Evaluacion";
// Define una constante llamada filtrar, que es una función flecha que toma un objeto x y 
// devuelve true si la propiedad name del objeto x es igual a "Evaluacion".

//Creamos una funcion anonima autoejecutable
(() => {
    //definimos el metodo fetch el cual contiene la url del archivo json. hacemos la solicitud al archivo json el cual nos retorna una promesa 
    fetch("user.json")
    //para resolver la promesa que nos retorna usamos .then y analizamos la respuesta la cual esta almacenada en response con el metodo json
        .then(response => response.json()) 

        // despues tomamos los datos del usuario y hacemos una nueva peticion para obtner los repositorios del usuario y este nos retorna otra promesa con la respuesta 
        .then(user => {
            return fetch(`https://api.github.com/users/${user.name}/repos`);
        })

        // despues resolvemos la promesa anterior y la almacenamos en respuestaGithub y esta analiza los datos usando el metodo json lo cual nos devuelve datos primitivos para poder manipularlos
        .then(respuestaGithub => respuestaGithub.json()) 

        
        .then(usuariogithub => {
            // Verifica si usuariogithub es un array antes de intentar usar forEach.
            if (Array.isArray(usuariogithub)) {
                usuariogithub.forEach(element => {
                    // Para cada repositorio (element) en la matriz usuariogithub, ejecuta la función siguiente.

                    if (filtrar(element)) {
                        // Comprueba si el nombre del repositorio (element.name) es igual a "Js_Ejercicios"
                        // utilizando la función filtrar.

                        console.log(element); 
                        // Si la condición se cumple, imprime el repositorio en la consola.
                    }
                });
            } else {
                console.error('Error: La respuesta de GitHub no es una matriz', usuariogithub);
                // Si usuariogithub no es un array, muestra un mensaje de error en la consola.
            }
        })
        .catch(error => console.error('Error:', error)); 
        // Si ocurre algún error en cualquiera de las promesas anteriores, se captura y se imprime en la consola.
})();