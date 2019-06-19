'use strict';
// 
console.log('Bienvenue !');

const next = document.getElementById('next');
const p = document.getElementById('p');
const initial = document.getElementById('initial');
var numPage = 1;

// créer un temps de réference 
localStorage.setItem('temps', Date.now());

// au clique je simule un changement de page en incrémentant le numéro de la page

next.addEventListener('click',
    function () {
        p.innerHTML = '<p> Vous êtes sur la page numéro: </p>' + (numPage++);
        window.onload = function () {
            // pour voir la durée on soustrait le temps actuel du temps de référence et je devise par 1000 pour avoir le temps en seconds
            var tempsPasse = Math.floor((Date.now() - localStorage.temps) / 1000) + 's';
            console.log('le temps écoulé sur la page précédente en seconds est : = ' + tempsPasse);
        }();
    });


initial.addEventListener('click', function () {
    // vider le stockage local
    localStorage.clear();
    //réinitialiser le temps de référence
    localStorage.setItem('temps', Date.now());
    //réinitialiser le numéro de la page
    numPage = 1;
    // réinitialiser le visuel de la page
    p.innerHTML = '<p id="p">This page intentionally left blank</p>'
});