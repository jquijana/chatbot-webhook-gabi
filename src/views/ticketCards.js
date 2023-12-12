
export const showTicketCards = (senderPsid) => {
    // Lógica para obtener los reclamos del usuario o de alguna fuente de datos
    const ticketCards = obtenerReclamosUsuario(senderPsid);

    // Mostrar las cartillas al usuario
    reclaimCards.forEach((ticket, index) => {
        const card = generateTicketCard(ticket);
        sendCard(senderPsid, card);
    });

    // Mostrar la opción "Mostrar más" al final
    const showMoreCard = generateShowMoreCard();
    sendCard(senderPsid, showMoreCard);
};

// Función para mostrar más reclamos
export const showMoreTickets = (senderPsid) => {
    // Lógica para obtener más reclamos (siguiente página, por ejemplo)
    const moreReclaims = obtenerMasReclamos(senderPsid);

    // Mostrar los reclamos adicionales
    moreReclaims.forEach((reclaim, index) => {
        const card = generateTicketCard(reclaim);
        sendCard(senderPsid, card);
    });

    // Mostrar la opción "Mostrar más" al final
    const showMoreCard = generateShowMoreCard();
    sendCard(senderPsid, showMoreCard);
};

// Función para expresar desacuerdo
export const expressDisagreement = (senderPsid) => {
    // Lógica para permitir al usuario expresar desacuerdo
    // Puede incluir la presentación de opciones para proporcionar comentarios adicionales
};


const generateTicketCard = (ticket) => {
    const card = {
        title: ticket.code,
        subtitle: ticket.reasonName,
    };
    return card;
};

const generateShowMoreCard = () => {
    const showMoreCard = {
        title: 'Mostrar más',
        // ... otras propiedades ...
    };
    return showMoreCard;
};

const sendCard = (senderPsid, card) => {
    // Lógica para enviar la cartilla al usuario utilizando la API de Facebook Messenger
    // Puedes usar Axios, fetch u otra biblioteca para realizar la solicitud HTTP
};
