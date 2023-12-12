
import { showMoreTickets, expressDisagreement } from '../views/ticketCards.js';

const conversationActionHandlers = {
    handleRegisterDocument: (senderPsid, message) => {
        console.log('handleRegisterDocument', senderPsid, message);
    },

    handleSelectTicket: (senderPsid, message) => {
        console.log('handleSelectTicket', senderPsid, message);
    },

    handleShowMore: (senderPsid, message) => {
        console.log('handleShowMore', senderPsid, message);
        showMoreTickets(senderPsid);
    },

    handleExpressDisagreement: (senderPsid, message) => {
        console.log('handleExpressDisagreement', senderPsid, message);
        expressDisagreement(senderPsid);
    },

    handleInvalidInput: (senderPsid, message) => {
        console.log('handleInvalidInput', senderPsid, message);
    },
};

export default conversationActionHandlers;
