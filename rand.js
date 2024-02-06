// function sieveOfEratosthenes(n) {
//   const __ = [];
//   prime = Array.from({ length: n + 1 }, (_, i) => true);

//   for (p = 2; p * p <= n; p++) {
//     if (prime[p] == true) {
//       for (i = p * p; i <= n; i += p) prime[i] = false;
//     }
//   }

//   for (i = 2; i <= n; i++) {
//     if (prime[i] == true) __.push(i);
//   }
//   return __;
// }

// function parse(arr) {
//   for (const el of arr) {
//     console.log(el);
//   }
// }
// let i = 10298340
// while(true){
//     i++
//     const x =sieveOfEratosthenes(i)
//     console.log(x[[x.length - 1]])
// }

const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
let sentence = "";
for (let i = 0; i < TOTAL_LINES; i++) {
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence);
}
console.log(sentence)