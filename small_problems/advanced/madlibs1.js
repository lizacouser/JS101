/*
-input template ==> string?
-output return string with words filled in
-rules
  -randomized nouns, verbs, adjectives, adverbs
  -words can repeat

-examples:
madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

data:
-we could store word arrays in object word.adjectives[randomIndex]
-word arrays [quick, lazy, etc] ... adjectives[randomIndex]
-template is string?
  -template could be array of strings
  -map replace...


algorithm:
-create arrays of adjectives
-given an array of strings ['the', 'adjective', 'brown', 'noun'...]
-use map to swap in words
  -switch
    -case adjective: return adjectives[randomIndex(adjectives)]
    -case noun: return nouns[randomIndex(nouns)]
-return mappedArray joined by spaces
*/

let template1 = [
  'The', 'adjective', 'brown', 'noun', 'adverb', 'verb',
  'the', 'adjective', 'yellow', 'noun', 'who', 'adverb',
  'verb', 'his', 'noun', 'and', 'looks', 'around'];

let template2 = ['The', 'noun', 'verb', 'the', 'noun', "'s", 'noun'];

let adjectives = ["quick", "lazy", "sleepy", "noisy", "hungry"];
let nouns = ["fox", "dog", "head", "leg", "tail", "cat"];
let verbs = ["jumps", "lifts", "bites", "licks", "pats"];
let adverbs = ["easily", "lazily", "noisily", "excitedly", "hungrily"];


function madlibs(template) {
  console.log(template.map(word => {
    switch (word) {
      case 'adjective': return adjectives[randomIndex(adjectives)];
      case 'noun': return nouns[randomIndex(nouns)];
      case 'verb': return verbs[randomIndex(verbs)];
      case 'adverb': return adverbs[randomIndex(adverbs)];
      default: return word;
    }
  }).join(' '));
}

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
