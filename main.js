// // // > Event Target

// // // ### 1. Créer un programme qui te permet de passer le contenu de la variable pContent jusqu'a une function et en suite fait en sorte que cette function ajoute ce qu'elle a reçu en parametre dans le p de la section, sers toi du button Exo1

// let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"  Créer un programme qui te permet de passer le contenu de la variable pContent jusqu'a une function et en suite fait en sorte que cette function ajoute ce qu'elle a reçu en parametre dans le p de la section, sers toi du button Exo1

// 1
// let pContent
// 2
// let p
// 3
// let button
// 4
// button event AudioListener


let pContent = "Il est possible de passer des parametres dans la function utilisée dans l'écouteur d'événement !";

function maFonction(contenu){
    document.getElementsByTagName("section")[0].getElementsByTagName("p")[0].innerText += contenu;
}
document.getElementsByTagName("input")[0].addEventListener('click',function(){
    maFonction(pContent);
})

// // // ### 2. Créer un programme qui au clique du h1, le background devient gold et sa color red, Attention voici les contraintes :

// // // - Les couleurs sont contenues dans des variables sur le fichier main.js, sert-en pour les affecter au style de la balise h1

// // // - Il faut que ces variables soient envoyés en parametre dans la function via le addEventListener.


let content = document.getElementById('content');
let h1 = document.getElementsByTagName('h1')[0];
let theColor = "red";
let theBackground = "gold";

function myFunction(e) {
  e.target.style.background = theBackground;
  e.target.style.color = theColor;
}
h1.addEventListener('click', myFunction);

