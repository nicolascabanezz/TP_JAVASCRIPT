// BLOQUE 1 - Introducción a JavaScript
// Ejercicio 2: función para sumar dos números
const sumarNumeros = document.getElementById("mostrarSuma").addEventListener("click", () => {
  console.log("BLOQUE 1 - Ejercicio 2");
  let nro1 = 20;
  let nro2 = 6;
  let resultado = nro1 + nro2;
  console.log("Primer número: ", nro1 + "\n" + "Segundo número: ", nro2 + "\n" + "El resultado de la suma es: ", resultado);
});
 
// Ejercicio 3: función para solicitar el nombre de un usuario
document.getElementById("ingresarNombreUsuario").addEventListener("click", () => {
  console.log("BLOQUE 1 - Ejercicio 3");
  let nombre = prompt("¿Cuál es tu nombre?");
  console.log("¡Hola " + nombre + ", bienvenido!"); //Usar + para concatenar cadenas y no , (comas)
});

//------------------------------------------------------------------------------------------------------------------------

// BLOQUE 2 - Operadores lógicos y condicionales
// Ejercicio 1: función para determinar el mayor de dos números
const determinarMayor = document.getElementById("determinarMayor").addEventListener("click", () => {
  console.log("BLOQUE 2 - Ejercicio 1");
  let nro1 = 9;
  let nro2 = 12;
  let mayor;
  if(nro1 > nro2) {
    mayor = nro1;
  } else {
    mayor = nro2;
  }
  console.log("Primer número: ", nro1 + "\n" + "Segundo número: ", nro2 + "\n" + "El mayor de los números es: ", mayor)
});

// Ejercicio 2: función para determinar si un número es par
const esParImpar = document.getElementById("esParImpar").addEventListener("click", () => {
  console.log("BLOQUE 2 - Ejercicio 2");
  //Solicitamos al usuario que ingrese un número
  let numero = prompt("Por favor, ingrese un número entero:");

  //Asignamos a la variable numero el valor ingresado
  numero = Number(numero);

  //Determinamos si es par o impar
  if(numero % 2 === 0){
    console.log("El número", numero, "es par.")
  } else{
    console.log("El número", numero, "es impar.")
  }

});

//------------------------------------------------------------------------------------------------------------------------

//BLOQUE 3 - Operadores de asignación y bucles
//Ejercicio 1: función con bucle While
const bucleWhile = document.getElementById("bucleWhileDecremento").addEventListener("click", () => {
  console.log("BLOQUE 3 - Ejercicio 1");
  let contador = 10;
  while(contador > 0){
    console.log(contador);
    contador = contador - 1; // También puedo utilizar contador -= 1 
  }
  console.log(contador); //Imprime 0 al final del while
});


//Ejercicio 2: función con bucle doWhile
const bucleDoWhile = document.getElementById("esMenorQueCien").addEventListener("click", () => {
  console.log("BLOQUE 3 - Ejercicio 2");
  let numero;

  do {
    numero = prompt("Por favor, ingrese un número mayor a 100:");
  } while (numero <= 100); //Cuando el número ingresado sea mayor que 100, lo imprimo por pantalla
  console.log("El número", numero, "es mayor que 100.");
});

//------------------------------------------------------------------------------------------------------------------------

//BLOQUE 4 - Funciones de JavaScript
//Ejercicio 1: función esPar que retorna true si el número es par, caso contrario, false.
document.getElementById("funcionEsPar").addEventListener("click", () => {
  console.log("BLOQUE 4 - Ejercicio 1");
  const esPar = (numero) => {
  console.log("¿El número "+numero+" es par?"); // Imprimir el número
  return numero % 2 === 0;
  }
  //Llamado a la función esPar
  console.log(esPar(9));
  console.log(esPar(12));
  console.log(esPar(18));
});

//Ejercicio 2: función convertirCelsiusAFahrenheit
document.getElementById("funcionCelsiusAFahrenheit").addEventListener("click", () => {
  console.log("BLOQUE 4 - Ejercicio 2");
  const convertirCelsiusAFahrenheit = (celsius) => {
  const fahrenheit = celsius * 1.8 + 32;
  console.log(`${celsius}°C son equivalentes a ${fahrenheit}°F`); //Otra forma de imprimir por consola cuando tenemos que incluir variables
  }
  //Llamado a la función convertirCelsiusAFahrenheit
  convertirCelsiusAFahrenheit(-2);   
  convertirCelsiusAFahrenheit(15);   
  convertirCelsiusAFahrenheit(33);  
});

//------------------------------------------------------------------------------------------------------------------------

//BLOQUE 5 - Objetos JavaScript
//Ejercicio 1: objeto persona
const crearPersona =document.getElementById("imprimirPersona").addEventListener("click", () => {
  console.log("BLOQUE 5 - Ejercicio 1");
  let persona = {
    nombre: "Nicolás",
    edad: 26,
    ciudad: "San Martín",
    cambiarCiudad: (nuevaCiudad) => { //Este método recibirá como argumento la nueva ciudad y se la seteará a la persona indicada
      persona.ciudad = nuevaCiudad;
    }
  };
  
  //Imprimimos por pantalla los datos originales de la persona 1
  console.log(`---Antes---\nNombre: ${persona.nombre}\nEdad: ${persona.edad} años\nCiudad: ${persona.ciudad}`);

  //Cambiamos la ciudad de la persona1
  persona.cambiarCiudad("Godoy Cruz");

  //Mostramos los datos de la persona1 actualizados
  console.log(`---Después---\nNombre: ${persona.nombre}\nEdad: ${persona.edad} años\nCiudad: ${persona.ciudad}`);

});

//Ejercicio 2: objeto libro
const crearLibro = document.getElementById("imprimirLibro").addEventListener("click", () => {
  console.log("BLOQUE 5 - Ejercicio 2");
  let libro = {
    
    titulo: "Carrie",
    autor: "Stephen King",
    año: 1974,
    
    esAntiguo: function () { //Dentro del objeto libro declaramos la función esAntiguo
      const añoActual = new Date().getFullYear(); //Guardamos el año actual en la variable añoActual
      return (añoActual - this.año) > 10; //Si es mayor que 10 retorna true (libro antiguo), de lo contrario false (libro reciente)
    }, //NO OLVIDAR ESTA COMA PARA SEPARAR LOS MÉTODOS
    
    antiguedadLibro: function () {
      const añoActual = new Date().getFullYear();
      return añoActual - this.año;
    }
  };

  //Seteamos la antieguedad del libro
  const edadDelLibro = libro.antiguedadLibro();

  //Verficamos si es un libro antiguo o reciente
  if (libro.esAntiguo()) {
    console.log(`${libro.titulo} es un libro antiguo. Tiene ${edadDelLibro} años de antigüedad.`);
  } else {
    console.log(`${libro.titulo} es un libro reciente. Tiene ${edadDelLibro} años de antigüedad.`);
  }

});

//------------------------------------------------------------------------------------------------------------------------

//BLOQUE 6 - Arrays
//Ejercicio 1: multiplicamos los números de un array por dos
const multiplicarArrayPorDos = document.getElementById("arrayMultiplicado").addEventListener("click", () => {
  console.log("BLOQUE 6 - Ejercicio 1");
  // Declaramos un array que contienen los números desde el 1 hasta el 10
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Creamos un nuevo array para almacenar los resultados de la multiplicación
  const numerosMultiplicados = [];

  // Usamos el bucle for para multiplicar cada número por dos
  for (let i = 0; i < numeros.length; i++) {
      numerosMultiplicados[i] = numeros[i] * 2;
  }

  // Muestramos los resultados por consola
  console.log("Números originales:", numeros);
  console.log("Números multiplicado por 2:", numerosMultiplicados);
});


//Ejercicio 2: función para obtener los primeros diez número pares
const obtenerNumerosPares = document.getElementById("arrayPares").addEventListener("click", () => {
  console.log("BLOQUE 6 - Ejercicio 2");
  //Creamos un array vacío para guardar los primeros diez números pares
  const pares = [];

  //Utilizamos un bucle for para encontrar los primeros diez números pares
  for (let contador = 1; pares.length < 10; contador++) {
      if (contador % 2 === 0) { // Verificamos si el número es par
          pares.push(contador); // Agregamos el número par al array. Push lo agrega al final
      }
  }

  // Imprime el array de números pares en la consola
  console.log("Primeros 10 números pares:", pares);
});

//------------------------------------------------------------------------------------------------------------------------

//BLOQUE 7 - Introducción al DOM
//Ejercicio 1: cambiar color del texto
const cambiarColorParrafos = document.getElementById("cambiarColorP").addEventListener("click", () => {
  //Obtenemos todos los elementos <p>
  const parrafos = document.querySelectorAll("p");
  //Cambiamos el color de cada <p> a azul
  parrafos.forEach(p => {
    p.style.color = "blue";
  });
});

//Ejercicio 2: mostrar alerta
const mostrarAlerta = document.getElementById("mensajeAlerta").addEventListener("click", () =>{
  const alerta = document.getElementById("textoIngresado").value;
  alert("Has ingresado: "+alerta);
});

//------------------------------------------------------------------------------------------------------------------------

//BLOQUE 8 - Eventos en DOM
//Ejercicio 1: lista con varios elementos
const lista = document.getElementById("listaConPuntos");
const listaElementos =  lista.getElementsByTagName("li");
for(let contador = 0 ; contador < listaElementos.length ; contador++){
  listaElementos[contador].addEventListener("click", (event) => {
    console.log(event.target.textContent);
  });
};

//Ejercicio 2: Habilitar/Deshabilitar campo
const input = document.getElementById("textoInput");
const deshabilitarBoton = document.getElementById("botonDeshabilitar").addEventListener("click", () => {
  input.disabled = true;
});
const habilitarBoton = document.getElementById("botonHabilitar").addEventListener("click", () => {
  input.disabled = false;
});

//------------------------------------------------------------------------------------------------------------------------

//BLOQUE 9 - LocalStorage
//Ejercicio 1:
const formularioEmail = document.getElementById("formularioEmail").addEventListener("submit", (event) => {
  event.preventDefault(); //Se utiliza para prevenir el envío de un formulario
  const correo = emailInput.value;
  localStorage.setItem("correo", correo);
  mostrarCorreo();
});

const emailInput = document.getElementById("emailInput");
const emailDisplay = document.getElementById("emailDisplay");
const deleteEmail = document.getElementById("eliminarEmail");

const mostrarCorreo = () => {
  const correoGuardado = localStorage.getItem("correo");
  if (correoGuardado) {
    emailDisplay.textContent = "Correo guardado: " + correoGuardado;
    deleteEmail.style.display = "block";
  } else {
      emailDisplay.textContent = "";
      deleteEmail.style.display = "none";
  }

};

//Llamado a la función
mostrarCorreo();

deleteEmail.addEventListener("click", () => {
  localStorage.removeItem("correo");
  mostrarCorreo();
});