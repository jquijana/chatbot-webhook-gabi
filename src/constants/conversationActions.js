import actionHandlers from "../handlers/actionHandlers.js";

export const ConversationActions = {
    'REGISTER_DOCUMENT': actionHandlers.handleRegisterDocument,
    'SELECT_TICKET': actionHandlers.handleSelectTicket,
    'SHOW_MORE': actionHandlers.handleShowMore,
    'EXPRESS_DISAGREEMENT': actionHandlers.handleExpressDisagreement,
    'INVALID_INPUT': actionHandlers.handleInvalidInput,
};
