import conversationHandlers from "../handlers/conversationHandlers.js";

export const ConversationStatus = {
    'START': conversationHandlers.handleStart,
    'REQUEST_DOCUMENT': conversationHandlers.handleRequestDocument,
    'PROCESS_DOCUMENT': conversationHandlers.handleProcessDocument,
    'SHOW_TICKET_CARDS': conversationHandlers.handleShowTicketCards,
    'SHOW_MORE_TICKETS': conversationHandlers.handleShowMoreTickets,
    'REVIEW_DISAGREEMENT': conversationHandlers.handleReviewDisagreement,
    'CONFIRM_REVIEW_REQUEST': conversationHandlers.handleConfirmReviewRequest,
    'GOODBYE': conversationHandlers.handleGoodbye,
};
