import{Malade,Medecin,Diagnostique,Traitement} from './classe.js'
import {salleDattente,pharmacie,cimetiere,chat} from './objet.js'

let marcus = new Malade("Marcus", "mal indenté", 100,[],"malade");
let optimus = new Malade("Optimus", "unsave", 200,[],"malade");
let sangoku = new Malade("sangoku", 404, 100,[],"malade");
let darthVader = new Malade("DarthVader", "azmatique", 80,[],"malade");
let semicolon = new Malade("Semicolon", "syntaxError", 60,[],"malade");

let ctrlmajF = new Traitement("ctrl+maj+f", 60);
let saveOnFocusChange = new Traitement("saveOnFocusChange",60);
let checklinkrelation = new Traitement("CheckLinkrelation", 35);
let ventoline = new Traitement("Ventoline", 40);
let f12doc = new Traitement("f12+doc", 20);

salleDattente.laSalle.push(marcus,optimus,sangoku,darthVader,semicolon);
console.log(`Dans ${salleDattente.nom}, il y ${salleDattente.laSalle.length} personnes`);

let momo = new Medecin("momo",100,[]);

marcus.seDeplacer(salleDattente.laSalle, momo.cabinet);
console.log(salleDattente.laSalle,momo.cabinet);
console.log(`${marcus.nom} est entré au cabinet `);

// miaw place 
chat.miauler();

console.log(`La maladie ${marcus.nom} est ${marcus.maladie}`);

let patient = new Diagnostique(marcus.maladie, "");
console.log( `Le traitement de ${marcus.nom} est ${patient.traitement} `);

marcus.payer(50);
// console.log(marcus);
console.log(`${marcus.nom} a bien payé ${momo.consulation} euros au docteur ${momo.nom}`);
console.log(`${marcus.nom} a ${marcus.argent} euros actuellement`);

momo.recevoir();
console.log(momo.argent);

marcus.seDeplacer(momo.cabinet,pharmacie.clients);
console.log(momo.cabinet,pharmacie.clients);
console.log(`${marcus.nom} a quitté le cabinet `);
console.log(`${marcus.nom} est allé à la ${pharmacie.nom} `);

console.log(`le traitement de ${marcus.nom} coût ${momo.consulation} euros`);

marcus.payer(ctrlmajF.prix);
marcus.seDeplacer(pharmacie.clients, cimetiere.tombe);
console.log(cimetiere);

console.log(`${marcus.nom} n'as pas payé son traitement, il est mort et enterrer au ${cimetiere.nom}`);


// --------------------------- //

console.log(`Dans ${salleDattente.nom}, il y ${salleDattente.laSalle.length} personnes`);

optimus.seDeplacer(salleDattente.laSalle, momo.cabinet);
console.log(salleDattente.laSalle,momo.cabinet);
console.log(`${optimus.nom} est entré au cabinet `);

// miaw place 

console.log(`La maladie ${optimus.nom} est ${optimus.maladie}`);

let patient2 = new Diagnostique(optimus.maladie, "");
console.log( `Le traitement de ${optimus.nom} est ${patient2.traitement} `);

optimus.payer(100);
// console.log(marcus);
console.log(`${optimus.nom} a bien payé ${momo.consulation} euros au docteur ${momo.nom}`);
console.log(`${optimus.nom} a ${optimus.argent} euros actuellement`);

momo.recevoir();
console.log(momo.argent);

marcus.seDeplacer(momo.cabinet,pharmacie.clients);
console.log(momo.cabinet,pharmacie.clients);
console.log(`${optimus.nom} a quitté le cabinet `);
console.log(`${optimus.nom} est allé à la ${pharmacie.nom} `);

console.log(`le traitement de ${optimus.nom} coût ${momo.consulation} euros`);

optimus.payer(saveOnFocusChange.prix);

console.log(`${optimus.nom} est soigné`);

// --------------------------- //

console.log(`Dans ${salleDattente.nom}, il y ${salleDattente.laSalle.length} personnes`);

sangoku.seDeplacer(salleDattente.laSalle, momo.cabinet);
console.log(salleDattente.laSalle,momo.cabinet);
console.log(`${sangoku.nom} est entré au cabinet `);

// miaw place 

console.log(`La maladie ${sangoku.nom} est ${sangoku.maladie}`);

let patien3 = new Diagnostique(sangoku.maladie, "");
console.log( `Le traitement de ${sangoku.nom} est ${patien3.traitement} `);

sangoku.payer(50);
// console.log(sangoku);
console.log(`${sangoku.nom} a bien payé ${momo.consulation} euros au docteur ${momo.nom}`);
console.log(`${sangoku.nom} a ${sangoku.argent} euros actuellement`);

momo.recevoir();
console.log(momo.argent);

sangoku.seDeplacer(momo.cabinet,pharmacie.clients);
console.log(momo.cabinet,pharmacie.clients);
console.log(`${sangoku.nom} a quitté le cabinet `);
console.log(`${sangoku.nom} est allé à la ${pharmacie.nom} `);

console.log(`le traitement de ${sangoku.nom} coût ${momo.consulation} euros`);

sangoku.payer(checklinkrelation.prix);
sangoku.seDeplacer(pharmacie.clients, cimetiere.tombe);
console.log(cimetiere);

console.log(`${sangoku.nom} n'as pas payé son traitement, il est mort et enterrer au ${cimetiere.nom}`);

// --------------------------- //

console.log(`Dans ${salleDattente.nom}, il y ${salleDattente.laSalle.length} personnes`);

darthVader.seDeplacer(salleDattente.laSalle, momo.cabinet);
console.log(salleDattente.laSalle,momo.cabinet);
console.log(`${darthVader.nom} est entré au cabinet `);

// miaw place 

console.log(`La maladie ${darthVader.nom} est ${darthVader.maladie}`);

let patient4 = new Diagnostique(darthVader.maladie, "");
console.log( `Le traitement de ${darthVader.nom} est ${patient4.traitement} `);

darthVader.payer(50);
// console.log(darthVader);
console.log(`${darthVader.nom} a bien payé ${momo.consulation} euros au docteur ${momo.nom}`);
console.log(`${darthVader.nom} a ${darthVader.argent} euros actuellement`);

momo.recevoir();
console.log(momo.argent);

darthVader.seDeplacer(momo.cabinet,pharmacie.clients);
console.log(momo.cabinet,pharmacie.clients);
console.log(`${darthVader.nom} a quitté le cabinet `);
console.log(`${darthVader.nom} est allé à la ${pharmacie.nom} `);

console.log(`le traitement de ${darthVader.nom} coût ${momo.consulation} euros`);

darthVader.payer(ventoline.prix);
console.log(`${darthVader.nom} est soigné`);

// --------------------------- //

console.log(`Dans ${salleDattente.nom}, il y ${salleDattente.laSalle.length} personnes`);

semicolon.seDeplacer(salleDattente.laSalle, momo.cabinet);
console.log(salleDattente.laSalle,momo.cabinet);
console.log(`${semicolon.nom} est entré au cabinet `);

// miaw place 

console.log(`La maladie ${semicolon.nom} est ${semicolon.maladie}`);

let patient5 = new Diagnostique(semicolon.maladie, "");
console.log( `Le traitement de ${semicolon.nom} est ${patient5.traitement} `);

semicolon.payer(50);
// console.log(semicolon);
console.log(`${semicolon.nom} a bien payé ${momo.consulation} euros au docteur ${momo.nom}`);
console.log(`${semicolon.nom} a ${semicolon.argent} euros actuellement`);

momo.recevoir();
console.log(momo.argent);

semicolon.seDeplacer(momo.cabinet,pharmacie.clients);
console.log(momo.cabinet,pharmacie.clients);
console.log(`${semicolon.nom} a quitté le cabinet `);
console.log(`${semicolon.nom} est allé à la ${pharmacie.nom} `);

console.log(`le traitement de ${semicolon.nom} coût ${momo.consulation} euros`);

semicolon.payer(f12doc.prix);
semicolon.seDeplacer(pharmacie.clients, cimetiere.tombe);
console.log(cimetiere);

console.log(`${semicolon.nom} n'as pas payé son traitement, il est mort et enterrer au ${cimetiere.nom}`);

console.log(`Dans ${salleDattente.nom}, il y ${salleDattente.laSalle.length} personnes`);


















