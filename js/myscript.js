// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito.
// Infine scrivi sulla pagina nomecognomecolorepreferito23.


// Chiedo all'utente il suo nome 
const userName = prompt("Inserisci il tuo nome!");

// Chiedo all'utente il suo cognome 
const userSurname = prompt("Inserisci il tuo cognome!");

// Chiedo all'utente il suo colore preferito 
const userColor = prompt("Inserisci il tuo colore preferito!");

let password = userName + userSurname + userColor + "23";

// Controllo corretta formazione della password
console.log(password);

// Stampo la password
document.getElementById("mio_id").innerHTML = "La tua nuova password è: " + password;