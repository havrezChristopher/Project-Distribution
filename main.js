
//1================== Selection (id) Des Bouton !====================
let listeBtn1 = document.getElementById("btn_1")
let listeBtn2 = document.getElementById("btn_2")
let listeBtn3 = document.getElementById("btn_3")
let listeBtn4 = document.getElementById("btn_4")
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
NomAffichage.innerText = (`Boisson :${Coca.nom}`)
QuantiterAffichage.innerText=(`Quantiter:${Coca.quantiter}`)
PrixAffichage.innerText=(`Prix :${Coca.prix} euro`)
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
NomAffichage.innerText = (`Boisson :${Fanta.nom}`)
QuantiterAffichage.innerText=(`Quantiter:${Fanta.quantiter}`)
PrixAffichage.innerText=(`Prix :${Fanta.prix} euro`)
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
NomAffichage.innerText = (`Boisson :${Sprit.nom}`)
QuantiterAffichage.innerText=(`Quantiter:${Sprit.quantiter}`)
PrixAffichage.innerText=(`Prix :${Sprit.prix} euro`)
// =========================affichage elements stock=================
    if (Sprit.quantiter) {
        Sprit.quantiter -= 1
    }
    else {
        RuptureAffichage.innerText=(`Le Stock de ${Sprit} est de ${Sprit.rupture}`)
    }
})
listeBtn4.addEventListener("click", function () {
// =========================affichage elements stock=================
    NomAffichage.innerText = (`Boisson :${Eau.nom}`)
    QuantiterAffichage.innerText=(`Quantiter:${Eau.quantiter}`)
    PrixAffichage.innerText=(`Prix :${Eau.prix} euro`)
// =========================affichage elements stock=================
    if (Eau.quantiter > 0) {
        Eau.quantiter -= 1
    }
    else {
        RuptureAffichage.innerText=(`Le Stock de ${Sprit} est de ${Sprit.rupture}`)
    }

})

// les moddif a faire dans le tableau remplacer et adapter rupture a false
// description machine en injectant du js dans le html !

