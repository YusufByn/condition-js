// ici exos conditions

// exo 1)
// si exo1 est = a 33, alors vous me faites un log qui affiche bordeaux, sinon vous affichez paris

let exo1 = "33";

// "33" == 33

if(exo1 == 33) {
    // si tu mets juste un = et que tu changes exo1 en 10 par ex, ca affichera tjrs bordeaux
    exo1 = "Bordeaux";
}else {
    exo1 = "Paris";
}
console.log(exo1)

// exo2 )
// vous allez me comparer deux variables (a et b), qui contiennent des integers, si a > b afficher
// "a est plus grand que b", pareil pour a < b et a = b

let a = 13;
let b = 10;
let phrase;

if(a > b) {
    phrase = `a > b`;
} else if (b > a) {
    phrase = `b > a`;
} else {
    phrase = `a = b`;
}
// quand tu commences une boucle avec un ou des else if, il faut finir avec else, c'est une porte de sortie
console.log(phrase)

// exo3 ) 
// vous allez vérifier le contenu d'une variable "pair", si le nombre est pair vous afficherez dans un log
// "true" sinon vous afficherez "false"

let pair = 10;

// le % c'est modelo ca permet de calculer le reste d'un calcul, par ex 5%2 le reste est de 1 donc non pair
// tu mets 3 === pour que ca compare les valeurs ET les types, sans conversion
// donc pour être sûr que les deux choses sont vraiment identiques.
if (pair % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// exo 4)
// Vous allez vérifier si le contenu d'une variable username contient la string "Olivier"
// si elle ne contient pas "olivier", alors on renvoie "welcome"
// on refuse les username olivier
// on refuse les types pokemon
// on accepte les olivier de level pokemon

const userName = "olivier";
const level = "pokemon";
let message;

// "&&" veut dire ET
// "||" veut dire OU
if (userName == "olivier" && level == "pokemon") {
    message = "Accepted";
} else if ( userName !== "olivier" || level !== "pokemon") {
    message = "Not accepted";   
} else {
    message = "Accepted";
}
console.log(message);

// exo bonus

// bonus 1) 
// afficher "tarif réduit" si user = student ou que heure est entre 22h et 05h sinon afficher tarif plein

let user = "yusuf";
let heure = 22;
let reduction;
// au lieu de faire 300 console.log, je crée une variable reduction vide avec un console log a la toute fin

// user == student ||(OU) heure supérieur ou égal à 22h OU heure inférieur ou égal à 5
if (user == "student" || heure >= 22 || heure <= 5) {
    reduction = "Tarif réduit";
// user n'est pas égal a student donc si je mets yusuf par ex je peux me manger un tarif plein, ca depend de l'heure
// la au niveau de l'heure je mets : heure supérieur à 5 et heure inférieur à 22, la dcp c'est tarif plein
} else if (user !== "student" || heure > 5 && heure < 22) {
    reduction = "Tarif plein";
} else {
    reduction = "Tarif réduit"
    // meme en mettant un user yusuf, je suis en tarif réduit ici, car l'heure est 22h dans ma variable
}
console.log(reduction);



// bonus 2)
// un client peut avoir 20% de réduction sur ses achats si c'est son anniversaire ou qu'il a
// un solde (ses dépenses) de plus de 1000 euros

let birthday = true;
let solde = 1000; 
let secondReduction;

if (birthday = true || solde >= 1000) {
    secondReduction = "20%";
} else if ( birthday = false || solde < 1000 ) {
    secondReduction ="no reduc mon pote"
}


// bonus 3)
// affiche "ok" si x est positif et y est pair ou que x est positif et z est entre 5 et 10

let x;
let y;
let z;