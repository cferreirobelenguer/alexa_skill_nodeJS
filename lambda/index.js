/* *
    responses
 * */
const Alexa = require('ask-sdk-core');

//Invocación de skill
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a todo perros, la skill de consejos de perros';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
//funciones handler con las respuestas de los intents
const AlimentacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlimentacionIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Empieza desde cachorro a alimentarle bien. Proporción adecuada de omega 6 y omega 3. Establece horarios y rutinas. Elige la alimentación específica para su etapa adulta. Respeta la transición de un pienso a otro. Atento a su apetito.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt("¿Quiéres saber más consejos para tu mascota?")
            .getResponse();
    }
};
const PeloIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PeloIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Cepillar de manera regular, con el cepillo idóneo y en el momento adecuado. Bañar acorde al pelo de cada perro. Cuidar su alimentación, vital para cuidar el pelo de un perro. Mantener la higiene de hocico, cola, ojos y patas. Observar el estado del pelo.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt("¿Quiéres que te siga contando más cosas?")
            .getResponse();
    }
};
const EjercicioIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EjercicioIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Comienza con objetivos menos ambiciosos y ve incrementando la intensidad gradualmente. Así irás aumentando su resistencia, fortaleciendo sus músculos y endureciendo sus almohadillas para evitar lesiones. Utiliza el equipo adecuado. Para salir a correr con tu mascota no puedes usar la misma correa con la que la paseas.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt("¿Quiéres saber más consejos para tu mascota?")
            .getResponse();
    }
};
const AdiestramientoCachorroHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AdiestramientoCachorro';
    },
    handle(handlerInput) {
        const speakOutput = 'Sé consistente. Es clave con cualquier tipo de entrenamiento de obediencia. Redirige el comportamiento inapropiado. Llama la atención de tu cachorro cuando hace algo inapropiado. Elogia el comportamiento correcto. Usa premios. Termina con una nota positiva.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt("Estoy impaciente de contarte más cosas sobre tu mascota")
            .getResponse();
    }
};
/*Ayuda*/
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes preguntar por deporte, alimentación, cuidado o educación';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
//When the user wants stop the skill
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Adiós, espero verte pronto!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent is when the bot doesn't understand phrases to the user*/
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento no te entiendo, puedo ayudarte con consejos sobre tu mascota';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * when the sesion finish
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * Testing
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Error 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tenemos problemas';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * It exports the methods
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        AdiestramientoCachorroHandler,
        EjercicioIntentHandler,
        PeloIntentHandler,
        AlimentacionIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();