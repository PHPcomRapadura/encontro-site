function createTableRow(time, activity, facilitator) {
    // Create the table row element
    const tr = document.createElement('tr');
    tr.classList.add('table--row');

    // Create the time cell
    const th = document.createElement('th');
    th.scope = 'row';
    th.classList.add('table--fixed-cell');
    th.textContent = time;
    tr.appendChild(th);

    // Create the activity cell
    const tdActivity = document.createElement('td');
    tdActivity.classList.add('table--cell');
    tdActivity.textContent = activity;
    tr.appendChild(tdActivity);

    // Create the facilitator cell
    const tdFacilitator = document.createElement('td');
    tdFacilitator.classList.add('table--cell');
    tdFacilitator.textContent = facilitator;
    tr.appendChild(tdFacilitator);

    return tr;
}

const initScheduleTable = (schedule) => {
    // Get the table body element
    const tableBody = document.getElementById('schedule-table');

    // Create a table row for each agenda item
    schedule.map(({ horario, atividade, facilitador }) => {
        const newRow = createTableRow(horario, atividade, facilitador);
        tableBody.appendChild(newRow);
    });
};


const speakersComponent = {
    generateSpeakerCard: (palestrante, isModal = false) => {
        const { nome, foto, titulo, miniBio } = palestrante;
        const nameId = nome.toLowerCase().replace(' ', '-');

        // Create the outer container div
        const containerDiv = document.createElement('div');

        // Create the card content div
        const cardContentDiv = document.createElement('div');
        cardContentDiv.className = 'card--content';
        cardContentDiv.id = `'speaker-${nameId}'`;

        // Add the title
        const title = document.createElement('p');
        title.className = 'card--title';
        title.textContent = nome;
        cardContentDiv.appendChild(title);

        // Add the image
        const image = document.createElement('img');
        image.src = `assets/img/speakers/${foto}`;
        image.className = isModal ? 'w-fit m-auto' : 'm-auto w-fit max-h-[410px]';
        cardContentDiv.appendChild(image);

        // Add the talk description
        const talkDescription = document.createElement('p');
        talkDescription.className = 'text-md';
        talkDescription.innerHTML = `<span class="font-bold">Palestra: </span>${titulo}`;
        cardContentDiv.appendChild(talkDescription);

        // Add the mini-bio
        const miniBioElement = document.createElement('p');
        miniBioElement.className = `text-xs ${isModal ? '' : 'line-clamp-3'}`;
        miniBioElement.innerHTML = `<span class="font-bold">Mini-bio:</span>${miniBio} `;
        cardContentDiv.appendChild(miniBioElement);

        // Append the card content to the container div
        containerDiv.appendChild(cardContentDiv);

        if (!isModal) {
            // Create the button
            const button = document.createElement('button');
            button.className = 'link--button w-full';
            button.textContent = 'Bio completa';
            button.setAttribute('onclick', `openModal('${nome}')`);
            containerDiv.appendChild(button);
        }

        return containerDiv;
    },
    initSpeaker: (palestrantes) => {
        palestrantes.forEach((palestrante) => {
            const speakerCard = speakersComponent.generateSpeakerCard(palestrante);
            document.getElementById('speakers-container').appendChild(speakerCard);
        })
    }
}
