let tab = ['B','O','N','J','O','U','R'];
let verifTab = ['','','','','','',''];
let countTab = [];

function guessLetter() {
    while(verifTab.join() !== tab.join()) {
        let lettre = prompt(`Entrez une lettre : ${verifTab} Essais :${countTab}`).toUpperCase();
        countTab+= lettre;
        
        let i = 0;
        while(i < tab.length) {
            if(lettre === tab[i]) {
                verifTab[i] = tab[i];
                //countTab = countTab.filter(e=>e===lettre);
            }
            i++;
        }
        
    }
    alert('FÉLICITATION !');
}

/*
function verifL {
    if (lettre === )    
};*/

guessLetter();

