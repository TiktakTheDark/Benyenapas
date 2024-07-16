// Fonction pour générer les options de temps
function generateTimeOptions() {
    const timeSelect = document.getElementById('time');
    const start = 0; // minuit
    const end = 24 * 60; // 24 heures en minutes

    for (let i = start; i < end; i += 30) {
        const hours = Math.floor(i / 60).toString().padStart(2, '0');
        const minutes = (i % 60).toString().padStart(2, '0');
        const timeOption = document.createElement('option');
        timeOption.value = `${hours}:${minutes}`;
        timeOption.textContent = `${hours}:${minutes}`;
        timeSelect.appendChild(timeOption);
    }
}

// Appeler la fonction pour générer les options de temps
generateTimeOptions();

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    var appointment = {
        'summary': 'Rendez-vous avec ' + name,
        'description': 'Email: ' + email,
        'start': {
            'dateTime': date + 'T' + time + ':00',
            'timeZone': 'Europe/Paris'
        },
        'end': {
            'dateTime': date + 'T' + (parseInt(time.split(':')[0]) + 1) + ':' + time.split(':')[1] + ':00',
            'timeZone': 'Europe/Paris'
        }
    };

    addEventToGoogleCalendar(appointment);
});

function addEventToGoogleCalendar(event) {
    // Code pour ajouter l'événement au calendrier Google
    // Utiliser l'API Google Calendar ici
}