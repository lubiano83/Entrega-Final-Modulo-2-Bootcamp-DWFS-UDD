class Question {

    // Variables Privadas
    #countTrue = 0;
    #countFalse = 0;

    // Constructor
    constructor() {
        this.preguntas = [];
        this.preguntaRealizada = [];
        this.respuestasUsuario = [];
        this.pruebaEnviada = [];
    }

    // Crear una pregunta
    crearPregunta = (pregunta, respuestas, respuestaCorrecta) => {
        try {
            if (!pregunta || respuestas.length === 0 || !respuestaCorrecta) return console.log("Todos los campos son necesarios");
            if (typeof pregunta !== "string" || !Array.isArray(respuestas) || typeof respuestaCorrecta !== "string") return console.log("Los campos deben tener el formato correcto");
            const preguntaData = { pregunta, respuestas, respuestaCorrecta };
            this.preguntas.push(preguntaData);
        } catch (error) {
            console.log(error.message);
        }
    };

    // Consultar las distintas preguntas
    consultarPreguntas = function() {
        try {
            if (this.preguntas.length === 0) document.getElementById("output").innerHTML = "<h3>No hay preguntas disponibles...</h3>"
            let pregunta = [];
            for( let i = 0; i < this.preguntas.length; i++ ) {
                pregunta.push(`${i+1}.- ${this.preguntas[i].pregunta}`);
            }
            document.getElementById("output").innerHTML = pregunta.join("<br>");
        } catch (error) {
            console.log(error.message);
        }
    };

    // Responder una pregunta especifica y mostrar sus posibles respuestas
    responderPregunta = () => {
        try {
            const numeroPregunta = parseInt(prompt("Ingrese el numero de la pregunta:"));
            const existePregunta = this.preguntaRealizada.some(num => num === numeroPregunta);
            if(existePregunta) return alert("Lo siento, esa pregunta ya se realizo..");
            if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > this.preguntas.length) return alert(`Debe colocar un numero entero mayor que 0 y menor o igual que ${this.preguntas.length}`);
            const leerRespuestas = this.preguntas[numeroPregunta - 1].respuestas;
            let respuesta = [];
            for( let i = 0; i < leerRespuestas.length; i++ ) respuesta.push(` ${i+1}.- ${this.preguntas[numeroPregunta - 1].respuestas[i]} \n`);
            const numeroRespuesta = parseInt(prompt(`Ingrese el numero de la respuesta: \n\n ${respuesta}`));
            if(!numeroRespuesta || typeof numeroRespuesta !== "number" || numeroRespuesta < 1 || numeroRespuesta > this.preguntas[numeroPregunta - 1].respuestas.length) return alert(`Debe colocar un numero entero mayor que 0 y menor o igual que ${this.preguntas[numeroPregunta - 1].respuestas.length}`);
            const respuestaCorecta = this.preguntas[numeroPregunta - 1].respuestaCorrecta;
            const respuestaUsuario = this.preguntas[numeroPregunta - 1].respuestas[numeroRespuesta - 1];
            if(respuestaCorecta === respuestaUsuario) {
                this.#countTrue++;
                alert(`¡Felicitaciones! La respuesta a la pregunta: ${numeroPregunta}, es correcta.`);
            } else {
                this.#countFalse++;
                alert(`Lo siento, la respuesta a la pregunta: ${numeroPregunta}, es incorrecta..`);
            }
            this.preguntaRealizada.push(numeroPregunta);
            this.respuestasUsuario.push(respuestaUsuario);
        } catch (error) {
            console.log(error.message);
        }
    };

    // Mostrar resultados de respuestas del usuario
    mostrarResultadoRespuestas = () => {
        try {
            alert(`Hubo un total de ${this.#countTrue} respuestas correctas y ${this.#countFalse} de respuestas incorrectas, de un total de ${this.preguntas.length} preguntas..`);
            if(this.preguntas.length === this.preguntaRealizada.length) {
                if(this.#countTrue === this.preguntas.length) alert("Felicitaciones, eres un genio!!");
                if(this.#countTrue > (this.preguntas.length / 2) && countTrue < this.preguntas.length) alert("Felicitaciones, aprobaste el examen!!");
                if(this.#countTrue <= (this.preguntas.length / 2)) alert("Lo siento, acabas de reprobar el examen..");
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    
    // Mostrar las respuestas emitidas por el usuario
    mostrarRespuestasUsuario = () => {
        try {
            let respuesta = [];
            for( let i = 0; i < this.respuestasUsuario.length; i++ ) respuesta.push(` ${i+1}.- ${this.respuestasUsuario[i]} \n`);
            if(respuesta.length === 0) return alert("Aun no respondes ninguna pregunta..");
            alert(respuesta);
        } catch (error) {
            console.log(error.message);
        }
    };

    // Enviar las pruebas y confirmar si ya se envio por el email
    enviarPrueba = () => {
        try {
            if(this.respuestasUsuario.length === this.preguntas.length) {
                const emailUsuario = prompt("Ingresa tu email para enviar la prueba");
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailUsuario)) return alert("Debes ingresar un email válido..");
                const conffirmarEmail = this.pruebaEnviada.some(item => item === emailUsuario);
                if(conffirmarEmail){
                    alert("Tu prueba ya se envio anteriormente..")
                } else {
                    this.pruebaEnviada.push(emailUsuario);
                    this.respuestasUsuario = [];
                    this.preguntaRealizada = [];
                    alert("Prueba enviada con exito!!");
                }
            } else {
              alert("Primero debes finalizar todas las preguntas..");
            }
        } catch (error) {
            console.log(error.message);
        }
    };
}

// Crear instancia de la clase
const question = new Question();

// Agregar pregunta
question.crearPregunta("¿Cuál de los siguientes métodos se usa para recorrer un array en JavaScript?", ["forEach", "map", "filter", "Todas las anteriores"], "Todas las anteriores");
question.crearPregunta("¿Qué función se usa para convertir un string en un número entero en JavaScript?", ["parseFloat", "parseInt", "Number", "toFixed"], "parseInt");
question.crearPregunta("¿Cuál es el resultado de `typeof null` en JavaScript?", ["null", "object", "undefined", "number"], "object");
question.crearPregunta("¿Cuál de estos no es un tipo de dato en JavaScript?", ["String", "Boolean", "Float", "Symbol"], "Float");
question.crearPregunta("¿Qué palabra clave se usa para declarar una variable que no puede ser reasignada?", ["var", "let", "const", "static"], "const");
question.crearPregunta("¿Cuál es el operador de comparación estricta en JavaScript?", ["==", "!=", "===", "!=="], "===");
question.crearPregunta("¿Cómo se define una función en JavaScript?", ["function miFuncion() {}", "const miFuncion = function() {}", "const miFuncion = () => {}", "Todas las anteriores"], "Todas las anteriores");
question.crearPregunta("¿Cuál de estas afirmaciones sobre `let` y `var` es correcta?", ["`let` tiene un alcance de bloque, mientras que `var` tiene un alcance de función", "`var` y `let` tienen el mismo alcance", "`let` permite redeclarar una variable en el mismo ámbito", "`var` no permite hoisting"], "`let` tiene un alcance de bloque, mientras que `var` tiene un alcance de función");

// Consultar preguntas
question.consultarPreguntas();

// Conexion con HTML
document.getElementById("responderPregunta").addEventListener("click", () => question.responderPregunta());
document.getElementById("resultadoRespuestas").addEventListener("click", () => question.mostrarResultadoRespuestas());
document.getElementById("respuestasUsuario").addEventListener("click", () => question.mostrarRespuestasUsuario());
document.getElementById("enviarPrueba").addEventListener("click", () => question.enviarPrueba());