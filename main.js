let tab = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
let verifTab = ['', '', '', '', '', '', ''];
let memory = [];

function verifContenu(mot) {
    let i = 0;
    while(i < memory.length) {
        if(mot === memory[i]) {
            break;
        }
        i++;
    }
    if (mot !== memory[i]) {
       return memory.splice(i, 0, mot);
    }
}

function guessLetter() {
    let echec = 0;
    while(verifTab.join() !== tab.join()) { /*on ajoute .join() pour transformer en string afin que les tableaux soient comparable, sinon ça va renvoyer "false"*/
        let lettre = prompt(`Entrez une lettre ! ${verifTab} ${memory} ${echec}`).toUpperCase();
        verifContenu(lettre);
        let i = 0;
        while(i < tab.length) {
            if(lettre === tab[i]) {
                verifTab.splice(i, 1, tab[i]);
                break;
            } 
            i++;
        }
        if(lettre !== tab[i]) {
            echec++;
        }
    }
    alert('FÉLICITATION ! VOUS AVEZ RENTRÉE ' + echec+ ' MAUVAISE LETTRE');
}

guessLetter();

