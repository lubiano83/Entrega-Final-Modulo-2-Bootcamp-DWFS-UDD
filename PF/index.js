// Variables
let countTrue = 0;
let countFalse = 0;
let preguntaRealizada = [];
let respuestasUsuario = [];
const pruebaEnviada = [];

// Preguntas iniciales
const preguntas = [
  {
    pregunta: "¿Qué devuelve el método `Array.prototype.map()`?",
    respuestas: [
      "Un nuevo array con los elementos transformados",
      "El mismo array modificado",
      "La cantidad de elementos en el array",
      "undefined"
    ],
    respuestaCorrecta: "Un nuevo array con los elementos transformados"
  },
  {
    pregunta: "¿Cuál es el propósito del método `JSON.stringify()`?",
    respuestas: [
      "Convertir un objeto en una cadena JSON",
      "Convertir una cadena JSON en un objeto",
      "Clonar un objeto",
      "Convertir un número en una cadena"
    ],
    respuestaCorrecta: "Convertir un objeto en una cadena JSON"
  },
  {
    pregunta: "¿Cómo se puede evitar modificar un objeto en JavaScript?",
    respuestas: [
      "Usando `Object.freeze()`",
      "Usando `const`",
      "Usando `Object.preventChanges()`",
      "No se puede evitar"
    ],
    respuestaCorrecta: "Usando `Object.freeze()`"
  },
  {
    pregunta: "¿Cuál de las siguientes estructuras permite manejar errores en JavaScript?",
    respuestas: [
      "try...catch",
      "if...else",
      "for...of",
      "switch...case"
    ],
    respuestaCorrecta: "try...catch"
  },
  {
    pregunta: "¿Qué operador se usa para la propagación de arrays u objetos?",
    respuestas: [
      "=>",
      "...",
      "??",
      "&&"
    ],
    respuestaCorrecta: "..."
  },
  {
    pregunta: "¿Cuál es la salida de `console.log(2 + '2')` en JavaScript?",
    respuestas: [
      "4",
      "22",
      "NaN",
      "undefined"
    ],
    respuestaCorrecta: "22"
  },
  {
    pregunta: "¿Cuál de las siguientes afirmaciones sobre `async` y `await` es correcta?",
    respuestas: [
      "`await` solo puede usarse dentro de funciones `async`",
      "`async` hace que una función se ejecute más rápido",
      "`await` solo funciona con `setTimeout`",
      "`async` y `await` son sinónimos"
    ],
    respuestaCorrecta: "`await` solo puede usarse dentro de funciones `async`"
  },
];


// Crear una pregunta
const crearPregunta = (pregunta, respuestas, respuestaCorrecta) => {
  try {
    if (!pregunta || respuestas.length === 0 || !respuestaCorrecta) return console.log("Todos los campos son necesarios");
    if (typeof pregunta !== "string" || typeof respuestaCorrecta !== "string" || !Array.isArray(respuestas)) return console.log("Los campos deben tener el formato correcto");
    const preguntaData = { pregunta, respuestas, respuestaCorrecta };
    preguntas.push(preguntaData);
  } catch (error) {
    console.log(error.message);
  }
};

// Consultar las distintas preguntas
const consultarPreguntas = function() {
  try {
    if (preguntas.length === 0) return document.getElementById("output").innerHTML = "<h5>No hay preguntas disponibles...</h5>"
    let pregunta = [];
    for( let i = 0; i < preguntas.length; i++ ) {
      pregunta.push(`${i+1}.- ${preguntas[i].pregunta}`);
    }
    document.getElementById("output").innerHTML = pregunta.join("<br>");
  } catch (error) {
    console.log(error.message);
  }
};

// Responder una pregunta especifica y mostrar sus posibles respuestas
const responderPregunta = () => {
  try {
    const numeroPregunta = parseInt(prompt("Ingrese el numero de la pregunta:"));
    const existePregunta = preguntaRealizada.some(num => num === numeroPregunta);
    if(existePregunta) return alert("Lo siento, esa pregunta ya se realizo..");
    if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > preguntas.length) return alert(`Debe colocar un numero entero mayor que 0 y menor o igual que ${preguntas.length}`);
    const leerRespuestas = preguntas[numeroPregunta - 1].respuestas;
    let respuestaModificada = [];
    for( let i = 0; i < leerRespuestas.length; i++ ) respuestaModificada.push(` ${i+1}.- ${preguntas[numeroPregunta - 1].respuestas[i]} \n`);
    const numeroRespuesta = parseInt(prompt(`Ingrese el numero de la respuesta: \n\n ${respuestaModificada}`));
    if(!numeroRespuesta || typeof numeroRespuesta !== "number" || numeroRespuesta < 1 || numeroRespuesta > preguntas[numeroPregunta - 1].respuestas.length) return alert(`Debe colocar un numero entero mayor que 0 y menor o igual que ${preguntas[numeroPregunta - 1].respuestas.length}`);
    const respuestaCorecta = preguntas[numeroPregunta - 1].respuestaCorrecta;
    const respuestaUsuario = preguntas[numeroPregunta - 1].respuestas[numeroRespuesta - 1];
    if(respuestaCorecta === respuestaUsuario) {
      countTrue++;
      alert(`¡Felicitaciones! La respuesta a la pregunta: ${numeroPregunta}, es correcta.`);
    } else {
      countFalse++;
      alert(`Lo siento, la respuesta a la pregunta: ${numeroPregunta}, es incorrecta..`);
    }
    preguntaRealizada.push(numeroPregunta);
    respuestasUsuario.push(respuestaUsuario);
  } catch (error) {
    console.log(error.message);
  }
};

// Mostrar resultados de respuestas del usuario
const mostrarResultadoRespuestas = () => {
  try {
    alert(`Hubo un total de ${countTrue} respuestas correctas y ${countFalse} de respuestas incorrectas, de un total de ${preguntas.length} preguntas..`);
  if(preguntas.length === preguntaRealizada.length) {
    if(countTrue === preguntas.length) alert("Felicitaciones, eres un genio!!");
    if(countTrue > (preguntas.length / 2) && countTrue < preguntas.length) alert("Felicitaciones, aprobaste el examen!!");
    if(countTrue <= (preguntas.length / 2)) alert("Lo siento, acabas de reprobar el examen..");
  }
  } catch (error) {
    console.log(error.message);
  }
};

// Mostrar las respuestas emitidas por el usuario
const mostrarRespuestasUsuario = () => {
  try {
    let respuesta = [];
    for( let i = 0; i < respuestasUsuario.length; i++ ) respuesta.push(` ${i+1}.- ${respuestasUsuario[i]} \n`);
    if(respuesta.length === 0) return alert("Aun no respondes ninguna pregunta..");
    alert(respuesta);
  } catch (error) {
    console.log(error.message);
  }
};

// Enviar las pruebas y confirmar si ya se envio por el email
const enviarPrueba = () => {
  try {
    if(respuestasUsuario.length === preguntas.length) {
      const emailUsuario = prompt("Ingresa tu email para enviar la prueba");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailUsuario)) return alert("Debes ingresar un email válido..");
      const conffirmarEmail = pruebaEnviada.some(item => item === emailUsuario);
      if(conffirmarEmail){
        alert("Tu prueba ya se envio anteriormente..")
      } else {
        alert("Prueba enviada con exito!!");
        pruebaEnviada.push(emailUsuario);
        respuestasUsuario = [];
        preguntaRealizada = [];
      }
    } else {
      alert("Primero debes finalizar todas las preguntas..");
    }
  } catch (error) {
      console.log(error.message);
  }
};

// Crear una nueva pregunta
crearPregunta("¿Qué evento del DOM se usa para detectar cuando un usuario ha terminado de escribir en un input?", ["keydown", "keypress", "keyup", "input"], "keyup");

// Consultar las preguntas disponibles
consultarPreguntas();

// Conexion con HTML
document.getElementById("responderPregunta").addEventListener("click", () => responderPregunta());
document.getElementById("resultadoRespuestas").addEventListener("click", () => mostrarResultadoRespuestas());
document.getElementById("respuestasUsuario").addEventListener("click", () => mostrarRespuestasUsuario());
document.getElementById("enviarPrueba").addEventListener("click", () => enviarPrueba());