class Question {
    constructor() {
        this.data = [];
    }

    #normalizarTexto = (texto) => {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    };

    crearPregunta = (pregunta, respuestas, respuestaCorrecta) => {
        if (!pregunta || !respuestas || !respuestaCorrecta) return console.log("Todos los campos son necesarios");
        if (typeof pregunta !== "string" || !Array.isArray(respuestas) || typeof respuestaCorrecta !== "string") {
            return console.log("Los campos deben tener el formato correcto");
        }

        const preguntaData = {
            pregunta: this.#normalizarTexto(pregunta),
            respuestas: respuestas.map(item => this.#normalizarTexto(item)),
            respuestaCorrecta: this.#normalizarTexto(respuestaCorrecta),
        };
        this.data.push(preguntaData);
    };

    consultarPreguntas = () => {
        for( let i = 0; i < this.data.length; i++ ) {
            console.log(`${i+1}.-`, this.data[i].pregunta);
        }
    };

    verRespuestas = (pregunta) => {
        const existePregunta = this.data.find(item => item.pregunta === this.#normalizarTexto(pregunta));
        if (!existePregunta) return console.log(`La pregunta: "${pregunta}" no existe..`);
        console.log(this.#normalizarTexto(pregunta), existePregunta.respuestas);
    };

    responderPregunta = (pregunta, respuestaUsuario) => {
        const existePregunta = this.data.find(item => item.pregunta === this.#normalizarTexto(pregunta));
        if (!existePregunta) return console.log(`La pregunta: "${pregunta}" no existe`);
        if (existePregunta.respuestaCorrecta === this.#normalizarTexto(respuestaUsuario)) {
            console.log(`¡Felicitaciones! La respuesta a la pregunta: "${this.#normalizarTexto(pregunta)}" es correcta.`);
        } else {
            console.log(`Lo siento, la respuesta a la pregunta: "${this.#normalizarTexto(pregunta)}" es incorrecta. Intenta de nuevo.`);
        }
    };
}

// Crear instancia de la clase
const question = new Question();

// Agregar preguntas
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

// Consultar respuestas y responder preguntas
question.verRespuestas("¿Cuál es el lenguaje de programación más utilizado en el mundo?");
question.responderPregunta("¿Cuál es el lenguaje de programación más utilizado en el mundo?", "Python");

question.verRespuestas("¿Qué país tiene la mayor población del mundo?");
question.responderPregunta("¿Qué país tiene la mayor población del mundo?", "India");

question.verRespuestas("¿En qué año llegó el hombre a la Luna?");
question.responderPregunta("¿En qué año llegó el hombre a la Luna?", "1969");