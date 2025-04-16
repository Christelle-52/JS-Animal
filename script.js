/*Écrivez un programme JavaScript procédural qui permet à l'utilisateur
de choisir un animal parmi une liste d'animaux prédéfinis (par exemple,
chien, chat, lion, éléphant, etc.) en JSON. Une fois l'animal choisi, le 
programme doit afficher des informations de base sur cet animal, 
telles que son nom, son régime alimentaire, son habitat, et son cri. */

let animaux = {
  chien: {
    nom: ["chien", "canis lupus familiaris"],
    regimeAlimentaire: "carnivore",
    habitat: "partout",
    cri: "aboiement"
  },
  chat: {
    nom: ["chat", "Felis catus"],
    regimeAlimentaire: "carnivore",
    habitat: "divers",
    cri: "miaulement"
  },
  philippe: {
    nom: "The king",
    regimeAlimentaire: "McDo",
    habitat: "grotte",
    cri: "AU SECOURS"
  }
};

function afficherInfoAnimal() {
  let monAnimal = document.getElementById("input-animal").value.toLowerCase();
  let container = document.getElementById("infos-animal");

  if (animaux[monAnimal]) {
    let animal = animaux[monAnimal];
    let nom = Array.isArray(animal.nom) ? animal.nom.join(", ") : animal.nom;

    container.innerHTML = `
      <h2>Informations sur "${monAnimal}"</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Régime alimentaire :</strong> ${animal.regimeAlimentaire}</p>
      <p><strong>Habitat :</strong> ${animal.habitat}</p>
      <p><strong>Cri :</strong> ${animal.cri}</p>
    `;
  } else {
    container.innerHTML = `<p style="color: red;">Cet animal n'est pas présent.</p>`;
  }
}
