
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#contactForm'); // Seleziona il tuo form

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impedisce l'invio predefinito del form

    // Raccogli i dati del form
    const formData = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      messaggio: document.getElementById('messaggio').value
    };

    // Invia l'email tramite EmailJS
    emailjs.send('service_7lieggi', 'template_4whhnjo', formData)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Messaggio inviato con successo!'); // Mostra un messaggio di successo all'utente
        form.reset(); // Resetta il form
      }, function(error) {
        console.log('FAILED...', error);
        alert('Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi.'); // Mostra un messaggio di errore all'utente
      });
  });
});
