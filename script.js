console.log('hello world')

/*EXERCICE 1*/

/*1.1*/
let interface1 = document.createElement("div")/*creation of a div for interface 1*/
document.body.appendChild(interface1);/*addition of the element in the body element of HTML*/

let eltH1 = document.createElement("h1");/*creation of the H1 tag*/
eltH1.textContent = "Cinéma Le Dauphin";/*adding text to the tag*/
interface1.appendChild(eltH1);/*addition of the H1 tag in the interface div*/

let eltP = document.createElement("p");/*creation of the paragrah tag*/
eltP.textContent = "Une salle de cinéma grnad confort, un restaurant et une sélection de vins de qualité. Des avants-premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi)."/*adding text to the tag*/
interface1.appendChild(eltP);/*addition of the paragraph tag in the interface div*/


let eltForm = document.createElement("form");/*creation of the form tag*/
interface1.appendChild(eltForm);/*addition of the form tag in the interface div*/

let eltBtn = document.createElement("input");/*creation of the input element*/
eltBtn.type = "button";/*indication of the type of the input element: here button */
eltBtn.value = "Voir les films à l'affiche cette semaine";/*adding text to the tag*/
eltForm.appendChild(eltBtn);/*addition of the input element in the form tag*/


/*1.2*/
let filmTable = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];/*creation of a two-dimensional table*/

/*1.3*/

function array2D(sequence) { /*function with an array as parameter*/
  let i = 0; /*intermediate variable*/
  let currentElt; /*recovery of the current element*/
  let currentElt2;/*recovery of the current element*/
  let j;/*intermediate variable*/
  let eltTable = document.createElement("table");/*creation of the table tag*/
  document.body.appendChild(eltTable);/*addition of the element in the body element of HTML*/
  let eltThead = document.createElement("thead");/*creation of the thead tag*/
  eltTable.appendChild(eltThead);/*addition of the thead tag in the table tag*/
  let eltTrHead = document.createElement("tr");;/*creation of the tr tag*/
  eltThead.appendChild(eltTrHead);/*addition of the tr tag in the thead tag*/
  let eltTbody = document.createElement("tbody");/*creation of the tbody tag*/
  eltTable.appendChild(eltTbody);/*addition of the tbody tag in the table tag*/
  let eltTh;/*declaration of the variable*/
  let eltTr;/*declaration of the variable*/
  let eltTd;/*declaration of the variable*/
  let line1 = sequence[0];/*creation of a variable corresponding to the first line of the 2-dimensional table*/
  while (i < line1.length) { /*continuation condition*/
    currentElt = line1[i]; /*recovery of the current element*/
    eltTh = document.createElement("th");/*creation of the th tag*/
    eltTh.textContent = currentElt;/*addition of the current element in the cell*/
    eltTrHead.appendChild(eltTh);/*addition of the th tag in the the tr tag*/
    i += 1; /*updating the condition*/
  }
  i = 1; /*intermediate variable*/
  while (i < sequence.length) {/*continuation condition*/
    currentElt = sequence[i];/*recovery of the current element*/
    eltTr = document.createElement("tr");/*creation of the tr tag*/
    eltTbody.appendChild(eltTr);/*addition of the tr tag in the tbody tag*/
    i += 1;/*updating the condition*/
    j = 0;/*intermediate variable*/
    while (j < currentElt.length) {/*continuation condition*/
      currentElt2 = currentElt[j];/*recovery of the current element*/
      eltTd = document.createElement("td");/*creation of the td tag*/
      eltTd.textContent = currentElt2;/*addition of the current element in the cell*/
      eltTr.appendChild(eltTd);/*addition of the td tag in the tr tag*/
      j += 1;/*updating the condition*/
    }
  }
  return (eltTable);/*returns the table created*/
}

/*1.4*/
eltBtn.addEventListener("click", listing, false);/*add an event when you click on the create button in interface 1*/

function listing() {
  interface1.style.display = "none";
  array2D(filmTable);
}/*creation of the function by clicking on the button to make interface 1 disappear and display the table created in the function*/

/*EXERCICE 2*/
/*2.1*/
let substanceInformationTable = [
  ["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"],
  ["acide acétique", "17", "118"],
  ["acide nitrique", "-41", "86"],
  ["acide sulfurique", "10", "290"],
  ["alcool éthylique", "-114", "78"],
  ["aluminium", "660", "2450"]
];/*creation of a two-dimensional table*/

/*2.2*/
function checkTemperature(substanceInformationTable, nb) {/*function with as parameter the table created previously and a number*/
  let i = 1;/*updating the condition*/
  let currentElt;/*recovery of the current element*/
  let copyArray = [];/*creation of a table for the result*/
  while (i < substanceInformationTable.length) {/*continuation condition*/
    currentElt = substanceInformationTable[i];/*recovery of the current element*/
    i += 1;/*updating the condition*/
    if (currentElt[2] < nb) {/*conditional test*/
      copyArray.push(currentElt[0]);/*addition of the first element of the table to be processed, the name of the substance*/
    }
  }
  return (copyArray);/*returns the table with the substance names*/
}

console.log(checkTemperature(substanceInformationTable, 100))
/*we use the function in the console with the 2 parameters*/
