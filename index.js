// const prices = [1, 39, 25, 112, 111, 30, 211, 300, 5, 67];

// let min = prices[0];
// for (const n of prices) {
//   if (n < min) {
//     min = n;
//   }
// }
// console.log(min);

// ------------------------------------------------------------------

// Voici les dix derniers gagnants de la coupe départementale de Quidditch. Compléter le code suivant pour afficher les indices des valeurs de la liste égales à Broom broom. Combien de fois ont-ils gagné ?

const teams = [
  "Bois mort",
  "Broom broom",
  "Broom broom",
  "Snek",
  "Snek",
  "Merlin FTW",
  "Gandalf FTW",
  "Merlin FTW",
  "Broom broom",
  "Bois mort",
];
const val = "Broom broom"; // La valeur à trouver

for (let i = 0; i < teams.length; i++) {
  if (val === teams[i]) {
    console.log(i);
  }
}
