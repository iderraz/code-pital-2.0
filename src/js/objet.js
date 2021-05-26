let salleDattente = {
    nom: "la salle d'attente",
    laSalle: [],
};

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

let chat = {
    nom: "hamid",
    miauler(){
         setInterval(()=>{

              console.log(`miaw`)
          },2000)
    },
}


export {salleDattente,pharmacie, cimetiere,chat}