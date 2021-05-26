import {cimetiere} from "./objet.js";

class Malade {
    constructor(nom,maladie,argent,poche,etatSante){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.seDeplacer = (depart, arrivee) =>{
            arrivee.push(arrivee)
            depart.splice(depart.indexOf(this),1)
        }
        this.payer=(prix)=>{
             this.argent -= prix;
             if(this.argent < 0){
                //  return ` ${this.nom} n'a pas su payer son traitement `
                console.log(` ${this.nom} n'a pas su payer son traitement `); 
             }else{
                 console.log(`${this.nom} a su payer son traitement`);
             }
        }
    }
}


class Medecin {
    constructor(nom, argent,cabinet,consultation){
        this.nom = nom;
        this.argent = argent;
        this.cabinet = [];
        this.consulation = 50;
        this.recevoir =() =>{
            this.argent += this.consulation;
        }
    }
}

class Diagnostique {
    constructor(maladie,traitement){
        this.maladie = maladie;
        this.traitement = traitement;
        if(this.maladie == "mal indenté"){
            this.traitement = "ctrl+maj+f"
        }else if(this.maladie == "unsave"){
            this.traitement = "saveOnFocusChange"
        }else if(this.maladie == 404){
            this.traitement = "CheckLinkRelation"
        }else if(this.maladie == "azmatique"){
            this.traitement = "Ventoline"
        }else {
            this.traitement = "f12+doc"
        }
    }
}


class Traitement {
    constructor(traitement, prix){
        this.traitement = traitement;
        this.prix = prix;
    }
}





export{Malade,Medecin,Traitement,Diagnostique}