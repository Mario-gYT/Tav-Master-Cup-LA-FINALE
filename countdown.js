// Imposta la data di destinazione (Jun 28, 2026 alle 11:00:00)
// Ricorda di cambiare questa data ogni volta che fai un nuovo invito!
const destinationDate = new Date("Jun 28, 2026 11:00:00").getTime();

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    // Se l'elemento del conto alla rovescia non esiste, interrompi la funzione.
    if (!countdownElement) {
        return;
    }
    
    const now = new Date().getTime();
    const distance = destinationDate - now;

    // Se l'evento è passato
    if (distance < 0) {
        countdownElement.innerHTML = "L'EVENTO È IN CORSO O È CONCLUSO!";
        return;
    }

    // Costanti per i millisecondi (I mesi sono una stima basata su 30.4375 giorni)
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const avgMsInMonth = msInDay * 30.4375; // Media mensile

    // Calcolo dei giorni, ore, minuti e secondi rimanenti
    const months = Math.floor(distance / avgMsInMonth);
    const days = Math.floor((distance % avgMsInMonth) / msInDay);
    const hours = Math.floor((distance % msInDay) / msInHour);
    const minutes = Math.floor((distance % msInHour) / msInMinute);
    const seconds = Math.floor((distance % msInMinute) / msInSecond);
    
    // Costruisce e aggiorna la stringa di output nell'HTML
    countdownElement.innerHTML = 
        `<span class="time-value">${months}</span> Mesi | ` + 
        `<span class="time-value">${days}</span> Giorni | ` +
        `<span class="time-value">${hours}</span> Ore | ` +
        `<span class="time-value">${minutes}</span> Min | ` +
        `<span class="time-value">${seconds}</span> Sec`;
}

// Chiama la funzione immediatamente per evitare ritardi iniziali
updateCountdown();

// Aggiorna il conto alla rovescia ogni secondo (1000 millisecondi)
setInterval(updateCountdown, 1000);
