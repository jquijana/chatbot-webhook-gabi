import messengerApi from "../api/messengerApi.js";

const conversationStatusHandlers = {
    handleStart:  (senderPsid, message) => {
        const greetingMessage = "¡Hola, Soy GABI! Tu asistente virtual. ¿En qué puedo ayudarte hoy?";
    
        const cards = [
            {
                title: 'Consulta de Reclamos',
                subtitle: 'Consulta los detalles de tus reclamos existentes',
                image_url: 'https://storage.googleapis.com/mca2-customercare/hackathon-cc/chatbot-webhook-gabi/tickets-view.png',
                buttons: [
                    {
                        type: 'postback',
                        title: 'Consultar',
                        payload: 'CONSULTAR_RECLAMOS',
                    },
                ],
            },
            {
                title: 'Registro de Nuevo Reclamo',
                subtitle: 'Registra un nuevo reclamo para obtener asistencia',
                image_url: 'https://storage.googleapis.com/mca2-customercare/hackathon-cc/chatbot-webhook-gabi/tickets-register.png',
                buttons: [
                    {
                        type: 'postback',
                        title: 'Registrar',
                        payload: 'REGISTRAR_RECLAMO',
                    },
                ],
            },
        ];
    
        sendTextMessage(senderPsid, greetingMessage);
        sendGenericMessage(senderPsid, cards);
    },

    handleRequestDocument: (senderPsid, message) => {
        console.log('handleRequestDocument', senderPsid, message);
    },

    handleProcessDocument: (senderPsid, message) => {
        console.log('handleProcessDocument', senderPsid, message);
    },
    
    handleShowTicketsCards: (senderPsid, message) => {
        console.log('handleRequestDocument', senderPsid, message);
        showTicketsCards(senderPsid);
    },

    handleShowMoreTickets: (senderPsid, message) => {
        console.log('handleShowMoreTickets', senderPsid, message);
        showTicketsCards(senderPsid);
    },

    handleReviewDisagreement: (senderPsid, message) => {
        console.log('handleReviewDisagreement', senderPsid, message);
        showTicketsCards(senderPsid);
    },

    handleConfirmReviewRequest: (senderPsid, message) => {
        console.log('handleConfirmReviewRequest', senderPsid, message);
        showTicketsCards(senderPsid);
    },
    
    handleGoodbye: (senderPsid, message) => {
        console.log('handleRequestDocument', senderPsid, message);
    },

    handleInvalidInput: (senderPsid, message) => {
        console.log('handleInvalidInput', senderPsid, message);
    },
};

export default conversationStatusHandlers;


const sendTextMessage = (senderPsid, text) => {
    messengerApi.callSendAPI_v2({
        recipient: { id: senderPsid },
        message: { text: text },
    });
};

const sendGenericMessage = (senderPsid, cards) => {
    messengerApi.callSendAPI_v2({
        recipient: { id: senderPsid },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'generic',
                    elements: cards,
                },
            },
        },
    });
};
