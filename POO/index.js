class Question {

    // Variables Privadas
    #countTrue = 0;
    #countFalse = 0;

    // Constructor
    constructor() {
        this.preguntas = [];
        this.preguntaRealizada = [];
        this.respuestasUsuario = [];
    }

    // Crear pregunta
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

    // Consultar preguntas
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

    // Ver respuestas
    verRespuestas = () => {
        try {
            const numeroPregunta = parseInt(prompt("Ingresa el numero de la pregunta"));
            if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > this.preguntas.length) return alert(`Debe colocar un numero entero mayor que 0 y menor o igual que ${this.preguntas.length}`);
            const leerRespuestas = this.preguntas[numeroPregunta - 1].respuestas;
            let respuesta = [];
            for( let i = 0; i < leerRespuestas.length; i++ ) {
                respuesta.push(` ${i+1}.- ${this.preguntas[numeroPregunta - 1].respuestas[i]}`);
            }
            alert(respuesta)
        } catch (error) {
            console.log(error.message);
        }
    };

    // Responder una pregunta
    responderPregunta = () => {
        try {
            const numeroPregunta = parseInt(prompt("Ingrese el numero de la pregunta"));
            const existePregunta = this.preguntaRealizada.some(num => num === numeroPregunta);
            if(existePregunta) return alert("Lo siento, esa pregunta ya se realizo..");
            if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > this.preguntas.length) return alert(`Debe colocar un numero entero mayor que 0 y menor o igual que ${this.preguntas.length}`);
            const numeroRespuesta = parseInt(prompt("Ingrese el numero de la respuesta"));
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

    // Mostrar resultados de respuestas
    mostrarResultadoRespuestas = () => {
        try {
            alert(`Hubo un total de ${this.#countTrue} respuestas correctas y ${this.#countFalse} de respuestas incorrectas, de un total de ${this.preguntas.length} preguntas..`);
            if(this.preguntas.length === this.preguntaRealizada.length) {
                if(this.#countTrue === this.preguntas.length) alert("Felicitaciones, eres un genio!!");
                if(this.#countTrue >= (this.preguntas.length / 2) && countTrue < this.preguntas.length) alert("Felicitaciones, aprobaste el examen!!");
                if(this.#countTrue < (this.preguntas.length / 2)) alert("Lo siento, acabas de reprobar el examen..");
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    
    // Mostrar las respuestas emitidas
    mostrarRespuestasUsuario = () => {
        try {
            let respuesta = [];
            for( let i = 0; i < this.respuestasUsuario.length; i++ ) {
                respuesta.push(` ${i+1}.- ${this.respuestasUsuario[i]}`);
            }
            if(respuesta.length === 0) return alert("Aun no respondes ninguna pregunta..");
            alert(respuesta);
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

// Conexion con HTML
document.getElementById("verRespuestas").addEventListener("click", () => question.verRespuestas());
document.getElementById("responderPregunta").addEventListener("click", () => question.responderPregunta());
document.getElementById("resultadoRespuestas").addEventListener("click", () => question.mostrarResultadoRespuestas());
document.getElementById("respuestasUsuario").addEventListener("click", () => question.mostrarRespuestasUsuario());