const es = {
    global: { // lista de textos aleatorios
        tooManyArgs: "¡Demasiados argumentos! Necesarios %REQUIRED_AMOUNT%, recibidos %RECEIVED_AMOUNT%",
        notEnoughArgs: "¡No hay suficientes argumentos! Necesarios %REQUIRED_AMOUNT%, recibidos %RECEIVED_AMOUNT%",
        error: "Ocurrió un error",
    },
    categories: { // Lista de las carpetas de comandos y una descripción de su contenido. Utilizado en /help generado automáticamente
        langs: "Comandos de utilidad para el idioma del bot",
        utils: "Comandos de utilidad aleatorios",
    },
    // Lista de los comandos y los textos asociados con ellos
    ping: { 
        description: "Un comando que te da el ping del bot.",
        advancedDesc: "Un comando que te da el ping del bot. (sin argumentos)",
        reply: "¡Pong! Este mensaje tiene una latencia de %MESSAGE_PING%ms. La API tiene una latencia de %API_PING%ms."
    },
    changelang: {
        description: "Cambia el idioma de los mensajes del bot.",
        advancedDesc: "Cambia el idioma de los mensajes del bot. (/changelang lang, obtén los idiomas disponibles con /listlangs)",
        langOption: "El idioma que el bot usará para comunicarse contigo",
        badLanguageProvided: "El idioma que solicitaste no es un idioma válido. Los idiomas posibles son: %LANG_LIST%",
        reply: "Tu idioma ha sido cambiado exitosamente a %LANG%"
    },
    listlangs: {
        description: "Obtén todos los idiomas del bot.",
        advancedDesc: "Obtén todos los idiomas del bot. (sin argumentos)",
        reply: "Los idiomas posibles son: %LANG_LIST%"
    },
    changeprefix: {
        description: "Cambia el prefijo del bot.",
        advancedDesc: "Cambia el prefijo del bot. (/setprefix nuevo prefijo, longitud máxima 25 caracteres)",
        reply: "Prefijo cambiado exitosamente a: %PREFIX%",
        tooLong: "Tu nuevo prefijo tiene más de 25 caracteres"
    },
}

module.exports = es;
