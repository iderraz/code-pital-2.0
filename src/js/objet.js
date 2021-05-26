let salleDattente = {
    nom: "la salle d'attente",
    laSalle: [],
};

// let cabinet = {
//     nom: "cabinet",
//     cabinet: [],
// };

let pharmacie = {
    nom: "Pharmacie",
    clients :[],
    caisse: 0,
    recevoir(prix){
        this.caisse += prix;
    }
    
};

let cimetiere = {
    nom: "cimetiere de Jette",
    tombe: [],
};







export {salleDattente,pharmacie, cimetiere}