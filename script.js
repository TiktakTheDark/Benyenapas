document.addEventListener('DOMContentLoaded', function() {
    // Générer les options de temps par intervalle de 30 minutes
    generateTimeOptions();
});

// Fonction pour générer les options de temps par intervalle de 30 minutes
function generateTimeOptions() {
    const timeSelect = document.getElementById('time');
    const start = 480; // 8:00 (en minutes depuis minuit)
    const end = 20 * 60; // 20:00 (en minutes depuis minuit)

    for (let i = start; i < end; i += 30) {
        const hours = Math.floor(i / 60).toString().padStart(2, '0');
        const minutes = (i % 60).toString().padStart(2, '0');
        const timeOption = document.createElement('option');
        timeOption.value = `${hours}:${minutes}`;
        timeOption.textContent = `${hours}:${minutes}`;
        timeSelect.appendChild(timeOption);
    }
}

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupérer les valeurs des champs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Adresse email destinataire fixe
    var recipientEmail = 'stephanediaz47@gmail.com';

    // Convertir la date et l'heure en objet Date
    var selectedDate = new Date(date);
    var selectedTime = time.split(':');
    selectedDate.setHours(selectedTime[0]);
    selectedDate.setMinutes(selectedTime[1]);

    // Construire la date et l'heure au format ISO 8601 en UTC
    var isoDateTime = selectedDate.toISOString().slice(0, 19).replace(/[-:]/g, '') + 'Z';

    // Construction de l'URL pour créer un événement dans Google Agenda
    var googleCalendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
        '&text=' + encodeURIComponent('Rendez-vous avec ' + name) +
        '&dates=' + encodeURIComponent(isoDateTime + '/' + isoDateTime) +
        '&details=' + encodeURIComponent('Rendez-vous avec ' + name + ' à ' + time) +
        '&add=' + encodeURIComponent(recipientEmail);

    // Rediriger l'utilisateur vers Google Agenda
    window.open(googleCalendarUrl, '_blank');
});