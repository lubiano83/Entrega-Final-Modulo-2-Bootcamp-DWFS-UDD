// Variables
let countTrue = 0;
let countFalse = 0;
const preguntaRealizada = [];
const respuestasUsuario = [];

// Preguntas iniciales
const preguntas = [
  {
    pregunta: "¿Cuál es el planeta más grande del sistema solar?",
    respuestas: ["Júpiter", "Saturno", "Neptuno", "Urano"],
    respuestaCorrecta: "Júpiter"
  },
  {
    pregunta: "¿En qué año llegó el hombre a la Luna?",
    respuestas: ["1969", "1975", "1963", "1970"],
    respuestaCorrecta: "1969"
  },
  {
    pregunta: "¿Cuál es el lenguaje de programación más utilizado en el mundo?",
    respuestas: ["Python", "JavaScript", "C++", "Java"],
    respuestaCorrecta: "JavaScript"
  },
  {
    pregunta: "¿Cuántos colores hay en el arcoíris?",
    respuestas: ["7", "5", "6", "8"],
    respuestaCorrecta: "7"
  },
  {
    pregunta: "¿Quién pintó la Mona Lisa?",
    respuestas: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    respuestaCorrecta: "Leonardo da Vinci"
  },
  {
    pregunta: "¿Cuál es el animal terrestre más rápido?",
    respuestas: ["Guepardo", "León", "Antílope", "Caballo"],
    respuestaCorrecta: "Guepardo"
  },
  {
    pregunta: "¿Qué país tiene la mayor población del mundo?",
    respuestas: ["India", "Estados Unidos", "China", "Rusia"],
    respuestaCorrecta: "China"
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

// Consultar preguntas
const consultarPreguntas = function() {
  try {
    if (preguntas.length === 0) document.getElementById("output").innerHTML = "<h3>No hay preguntas disponibles...</h3>"
    let pregunta = [];
    for( let i = 0; i < preguntas.length; i++ ) {
      pregunta.push(`${i+1}.- ${preguntas[i].pregunta}`);
    }
    document.getElementById("output").innerHTML = pregunta.join("<br>");
  } catch (error) {
    console.log(error.message);
  }
};

// Ver respuestas
const verRespuestas = () => {
  try {
    const numeroPregunta = parseInt(prompt("Ingresa el numero de la pregunta"));
    if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > preguntas.length) return alert(`Debe colocar un numero entero mayor que 0 y menor o igual que ${preguntas.length}`);
    const leerRespuestas = preguntas[numeroPregunta - 1].respuestas;
    let respuesta = [];
    for( let i = 0; i < leerRespuestas.length; i++ ) {
      respuesta.push(` ${i+1}.- ${preguntas[numeroPregunta - 1].respuestas[i]}`);
    }
    alert(respuesta)
  } catch (error) {
    console.log(error.message);
  }
};

// Responder una pregunta
const responderPregunta = () => {
  try {
    const numeroPregunta = parseInt(prompt("Ingrese el numero de la pregunta"));
    const existePregunta = preguntaRealizada.some(num => num === numeroPregunta);
    if(existePregunta) return alert("Lo siento, esa pregunta ya se realizo..");
    if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > preguntas.length) return alert(`Debe colocar un numero entero mayor que 0 y menor o igual que ${preguntas.length}`);
    const numeroRespuesta = parseInt(prompt("Ingrese el numero de la respuesta"));
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

// Mostrar resultados de respuestas
const mostrarResultadoRespuestas = () => {
  try {
    alert(`Hubo un total de ${countTrue} respuestas correctas y ${countFalse} de respuestas incorrectas, de un total de ${preguntas.length} preguntas..`);
  if(preguntas.length === preguntaRealizada.length) {
    if(countTrue === preguntas.length) alert("Felicitaciones, eres un genio!!");
    if(countTrue >= (preguntas.length / 2) && countTrue < preguntas.length) alert("Felicitaciones, aprobaste el examen!!");
    if(countTrue < (preguntas.length / 2)) alert("Lo siento, acabas de reprobar el examen..");
  }
  } catch (error) {
    console.log(error.message);
  }
};

// Mostrar las respuestas emitidas
const mostrarRespuestasUsuario = () => {
  try {
    let respuesta = [];
    for( let i = 0; i < respuestasUsuario.length; i++ ) {
      respuesta.push(` ${i+1}.- ${respuestasUsuario[i]}`);
    }
    if(respuesta.length === 0) return alert("Aun no respondes ninguna pregunta..");
    alert(respuesta);
  } catch (error) {
    console.log(error.message);
  }
};

// Crear una nueva pregunta
crearPregunta("¿En qué continente está Egipto?", ["África", "Asia", "Europa", "América"], "África");

// Consultar las preguntas disponibles
consultarPreguntas();

// Conexion con HTML
document.getElementById("verRespuestas").addEventListener("click", () => verRespuestas());
document.getElementById("responderPregunta").addEventListener("click", () => responderPregunta());
document.getElementById("resultadoRespuestas").addEventListener("click", () => mostrarResultadoRespuestas());
document.getElementById("respuestasUsuario").addEventListener("click", () => mostrarRespuestasUsuario());