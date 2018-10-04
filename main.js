let tab = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
let verifTab = ['', '', '', '', '', '', ''];

function guessLetter() {
    while(verifTab !== tab) {
        let lettre = prompt('Entrez une lettre !' + verifTab);
        let i = 0;
        while(i < tab.length) {
            if(lettre === tab[i]) {
                verifTab[i] = tab[i];
            }
            i++;
        }
    }
    alert('FÉLICITATION !');
}

guessLetter();

