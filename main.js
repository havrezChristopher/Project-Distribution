
//1================== Selection (id) Des Bouton !====================
let listeBtn1 = document.getElementById("btn_1")
let listeBtn2 = document.getElementById("btn_2")
let listeBtn3 = document.getElementById("btn_3")
let listeBtn4 = document.getElementById("btn_4")
let listeBtn5 = document.getElementById("btn_5")
let listeBtn6 = document.getElementById("btn_6")
let listeBtn7 = document.getElementById("btn_7")
let listeBtn8 = document.getElementById("btn_8")
let listeBtn9 = document.getElementById("btn_9")
//!************************Ajouter les autre id et mettre des noms plus parlant ***********************************
//2================== Selection (id) Affichage !====================
let NomAffichage = document.getElementById("NomAffichage")
let QuantiterAffichage = document.getElementById("QuantiterAffichage")
let PrixAffichage = document.getElementById("PrixAffichage")
let RuptureAffichage = document.getElementById("RuptureAffichage")

// =========================Selection (id) Affichage !=================


// ===================Fonction a l evenements==================
listeBtn1.addEventListener("click", function () {
// =========================affichage elements stock=================
// NomAffichage.innerText = (`Boisson :${Coca.nom}`)
// QuantiterAffichage.innerText=(`Quantiter:${Coca.quantiter}`)
// PrixAffichage.innerText=(`Prix :${Coca.prix} euro`)
affichageBoisson(Coca)
// =========================affichage elements stock=================

    if (Coca.quantiter) {
        Coca.quantiter -= 1
    }
    else {
        RuptureAffichage.innerText=(`Le Stock de ${Coca.nom} est de ${Coca.rupture}`)
    }
})
listeBtn2.addEventListener("click", function () {
// =========================affichage elements stock=================
// NomAffichage.innerText = (`Boisson :${Fanta.nom}`)
// QuantiterAffichage.innerText=(`Quantiter:${Fanta.quantiter}`)
// PrixAffichage.innerText=(`Prix :${Fanta.prix} euro`)
affichageBoisson(Fanta)
// =========================affichage elements stock=================
    if (Fanta.quantiter) {
        Fanta.quantiter -= 1
    }
    else {
        RuptureAffichage.innerText=(`Le Stock de ${Fanta} est de ${Fanta.rupture}`)
    }
})
listeBtn3.addEventListener("click", function () {


    // =========================affichage elements stock=================
// NomAffichage.innerText = (`Boisson :${Sprit.nom}`)
// QuantiterAffichage.innerText=(`Quantiter:${Sprit.quantiter}`)
// PrixAffichage.innerText=(`Prix :${Sprit.prix} euro`)
affichageBoisson(Sprit)
// =========================affichage elements stock=================
    if (Sprit.quantiter) {
        Sprit.quantiter -= 1
    }
    else {
        RuptureAffichage.innerText=(`Le Stock de ${Sprit} est de ${Sprit.rupture}`)
    }
})
listeBtn4.addEventListener("click", function () {
//! ************************************************************************************ */ 
// =========================affichage elements stock=================
// NomAffichage.innerText = (`Boisson :${Eau.nom}`)
// QuantiterAffichage.innerText=(`Quantiter:${Eau.quantiter}`)
// PrixAffichage.innerText=(`Prix :${Eau.prix} euro`)
Eau.quantiter= affichageBoisson(Eau)
console.log(Eau.quantiter);
})
// =========================affichage elements stock=================
//     if (Eau.quantiter > 0) {
//         Eau.quantiter -= 1
//     }
//     else {
//         RuptureAffichage.innerText=(`Le Stock d'${Eau} est de ${Eau.rupture}`)
//     }

// })


// todo les moddif a faire dans le tableau remplacer et adapter rupture a false
//? description machine en injectant du js dans le html !

// Transformation en fonction **************

function affichageBoisson(Boisson) {
    
    NomAffichage.innerText = (`Boisson :${Boisson.nom}`)
    QuantiterAffichage.innerText=(`Quantiter:${Boisson.quantiter}`)
    PrixAffichage.innerText=(`Prix :${Boisson.prix} euro`)

    if (Boisson.quantiter > 0) {
        Boisson.quantiter -= 1
    }
    return Boisson.quantiter
    
}

// function affichageStock(Stock) {
//     var etatDeStock;
//     if 
//     (Stock.rupture == true){
        
//     }
//     else{
//         etatDeStock= RuptureAffichage.innerText=(`Le Stock d'${Stock} est de ${Stock.rupture}`)
       
//     }
   
// }
//! ************************************************************************************ */
