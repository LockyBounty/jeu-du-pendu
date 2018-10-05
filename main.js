let tab = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
let verifTab = ['', '', '', '', '', '', ''];
let memory = [];

function verifContenu(mot) {
    for(i = 0; i < memory.length; i++) {
        if (mot === memory[i]) {
            break;
        }
    }
    if (mot !== memory[i]) {
        return memory.splice(i, 0, mot);
    }
}

function guessLetter() {
    let echec = 0;
    while (verifTab.join() !== tab.join()) {
        let lettre = prompt(`DEVINER LE MOT SECRET : ${verifTab}\nLes lettre(s) devinée(s) sont ${memory}`).toUpperCase();
        while(lettre.length > 1) {
            alert('ENTRÉE UN SEUL CARACTÉRE !');
            return guessLetter();
        }
        let vrai = 0;
        let faux = 0;
        verifContenu(lettre);
        for (i = 0; i < tab.length; i++) {
            if (lettre === tab[i]) {
                alert('BIEN !');
                verifTab.splice(i, 1, tab[i]);
                vrai = 1;
            } else {
                faux = 2;
            }
        }
        if(vrai !== 1 && faux === 2) {
            alert('RATÉE');
            echec++;
        }   
    }
    confirm(`FÉLICITATION ! VOUS AVEZ REUSSI AVEC ${echec} FAUTE(S)`);
}

guessLetter();