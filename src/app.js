/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateDomains() {
  let pronoun = ["the", "your", "our", "their"];
  let adjective = [
    "strange",
    "great",
    "unique",
    "goofy",
    "bizarre",
    "hilarious",
    "whimsical"
  ];
  let noun = [
    "cat",
    "horses",
    "cakes",
    "neighbor",
    "planet",
    "internet",
    "pride",
    "bride",
    "spirit",
    "benefit",
    "statue",
    "issue"
  ];
  let extensions = [".com", ".de", ".es", ".it", ".eu", ".net"];

  for (let i = 0; i < 60; i++) {
    let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    let randomAdjective =
      adjective[Math.floor(Math.random() * adjective.length)];
    let randomNoun = noun[Math.floor(Math.random() * noun.length)];
    let randomExtension =
      extensions[Math.floor(Math.random() * extensions.length)];

    let domain = randomPronoun + randomAdjective + randomNoun + randomExtension;

    if (
      randomExtension.charAt(0) === "." &&
      randomNoun.endsWith(randomExtension.substring(1))
    ) {
      let hackDomain =
        randomPronoun +
        randomAdjective +
        randomNoun.slice(0, -randomExtension.length + 1) +
        randomExtension;
      console.log({ hackDomain });
    } else {
      console.log({ hackDomain: domain });
    }
  }
}

window.onload = function() {
  generateDomains();
};

document.getElementById("generateButton").addEventListener("click", function() {
  generateDomains();
});

// OPCIÓN PARA INFINITO, MUY SATURANTE

//  for (let i = 0; i < pronoun.length; i++) {
//   for (let j = 0; j < adjective.length; j++) {
//     for (let k = 0; k < noun.length; k++) {
//       for (let l = 0; l < extensions.length; l++) {
//         let randomPronoun = pronoun[i];
//         let randomAdjective = adjective[j];
//         let randomNoun = noun[k];
//         let randomExtension = extensions[l];
//
//         let domain = randomPronoun + randomAdjective + randomNoun + randomExtension;
//
//         if (
//           randomExtension.charAt(0) === "." &&
//           randomNoun.endsWith(randomExtension.substring(1))
//         ) {
//           let hackDomain =
//             randomPronoun +
//             randomAdjective +
//             randomNoun.slice(0, -randomExtension.length + 1) +
//             randomExtension;
//           console.log({ hackDomain });
//         } else {
//           console.log({ hackDomain: domain });
//         }
//       }
//     }
//   }
// }
