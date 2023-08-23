/* Chiediamo all'utente due parole in successione.
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato. */

/* 
strumenti
    -prompt x2
    -length
    -console.log
    -if/else */


//chiedi parola 1

const primaParola = prompt('inserisci parola 1');

//chiedi parola 2

const secondaParola = prompt('inserisci parola 2');

//log in console le due  parole

console.log(primaParola, secondaParola, primaParola.length, secondaParola.length)

//verifico se prima parola più lunga della seconda

if (primaParola.length > secondaParola.length){
    console.log('parola 1 è più lunga di parola 2');
}
//altrimenti veriìfico se parola 2 è più lunga di parola 1

else if (primaParola.length < secondaParola.length){
    console.log('parola 2 è più lunga di parola 1');
}

else {
    console.log('stessa lunghezza');
}