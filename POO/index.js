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
        try {
            if (!pregunta || !respuestas || !respuestaCorrecta) return console.log("Todos los campos son necesarios");
            if (typeof pregunta !== "string" || !Array.isArray(respuestas) || typeof respuestaCorrecta !== "string") return console.log("Los campos deben tener el formato correcto");    
            const preguntaData = {
                pregunta: pregunta,
                respuestas: respuestas.map(item => item),
                respuestaCorrecta: respuestaCorrecta,
            };
            this.data.push(preguntaData);
        } catch (error) {
            console.log(error.message);
        }
    };

    consultarPreguntas = () => {
        try {
            for( let i = 0; i < this.data.length; i++ ) {
                console.log(`${i+1}.-`, this.data[i].pregunta);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    // Ver respuestas
    verRespuestas = (numeroPregunta) => {
        try {
            if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > this.data.length) return console.log(`Debe colocar un numero entero mayor que 0 y menor o igual que ${this.data.length}`);
            const leerPregunta = this.data[numeroPregunta - 1].pregunta;
            const leerRespuestas = this.data[numeroPregunta - 1].respuestas;
            console.log(leerPregunta, leerRespuestas);
        } catch (error) {
            console.log(error.message);
        }
    };

    // Responder una pregunta
    responderPregunta = (numeroPregunta, respuestaUsuario) => {
        try {
            if(typeof respuestaUsuario !== "string" || !respuestaUsuario) return console.log("Este campo es requerido y debe ser de tipo string..");
            if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > this.data.length) return console.log(`Debe colocar un numero entero mayor que 0 y menor o igual que ${this.data.length}`);
            const respuestaCorecta = this.#normalizarTexto(this.data[numeroPregunta - 1].respuestaCorrecta);
            if(respuestaCorecta === respuestaUsuario) {
            console.log(`¡Felicitaciones! La respuesta a la pregunta: ${numeroPregunta}, es correcta.`);
            } else {
            console.log(`Lo siento, la respuesta a la pregunta: ${numeroPregunta}, es incorrecta..`);
            }
        } catch (error) {
            console.log(error.message);
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
question.verRespuestas(3);
question.responderPregunta(3, "javascript");

question.verRespuestas(7);
question.responderPregunta(7, "India");

question.verRespuestas(2);
question.responderPregunta(2, "1969");