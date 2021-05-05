const modalLabel = $('#ModalLabel');
const modalDesc = $('#projDesc');
const modalDUrl = $('#projDeploy');
const modalRUrl = $('#projRepo');
const projBtn = $('.btn-secondary');

const projContent = {
    jeopardy: {
        projName: 'JEOPARDY',
        description: 'Using the JService and Dictionary.com APIs my team was successful in creating a user-friendly and responsive version of the popular game show Jeopardy.',
        dUrl: 'https://bryan-barnes12.github.io/jeopardy-game/',
        rUrl: 'https://github.com/bryan-barnes12/jeopardy-game.git',
    },
    weather: {
        projName: 'real-time weather',
        description: 'This app was created written in JavaScript and uses the OpenWeather API to provide weather data.',
        dUrl: 'https://bryan-barnes12.github.io/real-time-weather/',
        rUrl: 'https://github.com/bryan-barnes12/real-time-weather.git',
    },
    password: {
        projName: 'strong password generator',
        description: 'My password generator produces a random strong password based on user preferences.',
        dUrl: 'https://bryan-barnes12.github.io/strong-password-generator/',
        rUrl: 'https://github.com/bryan-barnes12/strong-password-generator.git',
    }
}

function clearProjModal() {
    modalLabel.empty();
    modalDesc.empty();
    modalDUrl.empty();
    modalRUrl.empty();
}

function populateModal(projId) {
    clearProjModal();
    let obj = projContent[projId];
    modalLabel.text(obj.projName);
    modalDesc.text(obj.description);
    modalDUrl.append(`<a href="${obj.dUrl}" target="_blank">view deployment</a>`);
    modalRUrl.append(`<a href="${obj.rUrl}" target="_blank">view repo</a>`);
}

projBtn.on('click', function (event) {
    populateModal(event.target.id);
});