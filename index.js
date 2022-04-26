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
    // console.log(i);
  }
}

//recherche des une liste triée
const sortedPerf = [0, 6, 7, 16, 25, 30, 32, 38, 46, 46, 59, 70, 87, 93, 111];
const result = 70;

// avec boucle for
for (let i = 0; i < sortedPerf.length; i++) {
  if (result === sortedPerf[i]) {
    console.log("boucle for");
    console.log(i);
  }
}

// avec une boucle while
let i = 0;
while (i < sortedPerf.length && sortedPerf[i] <= result) {
  if (sortedPerf[i] === result) {
    console.log("boucle while");
    console.log(i);
  }
  i = i + 1;
}
