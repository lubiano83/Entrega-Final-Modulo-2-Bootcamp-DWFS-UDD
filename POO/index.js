class Question {

    // Variables Privadas
    #countTrue = 0;
    #countFalse = 0;

    // Constructor
    constructor() {
        this.preguntas = [];
        this.respuestasUsuario = [];
    }

    // Crear pregunta
    crearPregunta = (pregunta, respuestas, respuestaCorrecta) => {
        try {
            if (!pregunta || !respuestas || !respuestaCorrecta) return console.log("Todos los campos son necesarios");
            if (typeof pregunta !== "string" || !Array.isArray(respuestas) || typeof respuestaCorrecta !== "string") return console.log("Los campos deben tener el formato correcto");  
            const preguntaData = { pregunta, respuestas, respuestaCorrecta };
            this.preguntas.push(preguntaData);
        } catch (error) {
            console.log(error.message);
        }
    };

    // Consultar preguntas
    consultarPreguntas = function() {
        try {
            for( let i = 0; i < this.preguntas.length; i++ ) {
                console.log(`${i+1}.-`, this.preguntas[i].pregunta);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    // Ver respuestas
    verRespuestas = (numeroPregunta) => {
        try {
            if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > this.preguntas.length) return console.log(`Debe colocar un numero entero mayor que 0 y menor o igual que ${this.preguntas.length}`);
            const leerPregunta = this.preguntas[numeroPregunta - 1].pregunta;
            const leerRespuestas = this.preguntas[numeroPregunta - 1].respuestas;
            console.log(leerPregunta);
            for( let i = 0; i < leerRespuestas.length; i++ ) {
                console.log(`${i+1}.-`, this.preguntas[numeroPregunta - 1].respuestas[i]);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    // Responder una pregunta
    responderPregunta = (numeroPregunta, numeroRespuesta) => {
        try {
            if(!numeroRespuesta || typeof numeroRespuesta !== "number" || numeroRespuesta < 1 || numeroRespuesta > this.preguntas.length) return console.log(`Debe colocar un numero entero mayor que 0 y menor o igual que ${this.preguntas[numeroPregunta - 1].respuestas.length}..`);
            if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > this.preguntas.length) return console.log(`Debe colocar un numero entero mayor que 0 y menor o igual que ${this.preguntas.length}`);
            const respuestaCorecta = this.preguntas[numeroPregunta - 1].respuestaCorrecta;
            const respuestaUsuario = this.preguntas[numeroPregunta - 1].respuestas[numeroRespuesta - 1];
            if(respuestaCorecta === respuestaUsuario) {
                this.#countTrue++;
                console.log(`¡Felicitaciones! La respuesta a la pregunta: ${numeroPregunta}, es correcta.`);
            } else {
                this.#countFalse++;
                console.log(`Lo siento, la respuesta a la pregunta: ${numeroPregunta}, es incorrecta..`);
            }
            this.respuestasUsuario.push(respuestaUsuario);
        } catch (error) {
            console.log(error.message);
        }
    };

    // Mostrar resultados de respuestas
    mostrarResultadoRespuestas = () => {
        try {
            console.log(`Hubo un total de ${this.#countTrue} respuestas correctas y ${this.#countFalse} de respuestas incorrectas, de un total de ${this.preguntas.length} preguntas..`);
        } catch (error) {
            console.log(error.message);
        }
    };
    
    // Mostrar las respuestas emitidas
    mostrarRespuestasUsuario = () => {
        try {
            console.log("Respuestas del usuario:", this.respuestasUsuario);
        } catch (error) {
            console.log(error.message);
        }
    };
}

// Crear instancia de la clase
const question = new Question();

// Agregar pregunta
question.crearPregunta("¿Cuál es el planeta más grande del sistema solar?", ["Júpiter", "Saturno", "Neptuno", "Urano"], "Júpiter");
question.crearPregunta("¿En qué año llegó el hombre a la Luna?", ["1969", "1975", "1963", "1970"], "1969");
question.crearPregunta("¿Cuál es el lenguaje de programación más utilizado en el mundo?", ["Python", "JavaScript", "C++", "Java"], "JavaScript");
question.crearPregunta("¿Cuántos colores hay en el arcoíris?", ["7", "5", "6", "8"], "7");
question.crearPregunta("¿Quién pintó la Mona Lisa?", ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"], "Leonardo da Vinci");
question.crearPregunta("¿Cuál es el animal terrestre más rápido?", ["Guepardo", "León", "Antílope", "Caballo"], "Guepardo");
question.crearPregunta("¿Qué país tiene la mayor población del mundo?", ["India", "Estados Unidos", "China", "Rusia"], "China");
question.crearPregunta("¿En qué continente está Egipto?", ["África", "Asia", "Europa", "América"], "África");

// Consultar preguntas
question.consultarPreguntas();

// Consultar respuestas y responder pregunta
question.verRespuestas(3);
question.responderPregunta(3, 1);

// Consultar respuestas y responder pregunta
question.verRespuestas(7);
question.responderPregunta(7, 3);

// Consultar respuestas y responder pregunta
question.verRespuestas(2);
question.responderPregunta(2, 1);

// Mostrar cantidad de respuestas correctas e incorrectas
question.mostrarResultadoRespuestas();

// Mostrar Array con listado de respuestas del usuario
question.mostrarRespuestasUsuario();