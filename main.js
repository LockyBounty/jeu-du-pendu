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
    while(verifTab.join() !== tab.join()) { /*on ajoute .join() pour transformer en string afin que les tableaux soient comparable, sinon ça va renvoyer "false"*/
        let lettre = prompt(`Entrez une lettre : ${verifTab} ${memory}`).toUpperCase();
        verifContenu(lettre);
        for(i = 0; i < tab.length; i++) {
            if(lettre === tab[i]) {
                verifTab.splice(i, 1, tab[i]);
            }
        }
    }
    alert(`FÉLICITATION !`);
}

guessLetter();

