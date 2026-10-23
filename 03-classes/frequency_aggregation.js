const map = new Map();
map.set("りんご", 2);
map.set("パン", 1);
console.log(map.get("りんご"));   // 2
console.log(map.has("牛乳"));     // false
console.log(map.size);            // 2

const set = new Set([1, 2, 2, 3, 3, 3]);
console.log(set);                 // Set(3) { 1, 2, 3 }
console.log(set.size);            // 3


const words = ["りんご", "パン", "りんご", "牛乳", "牛乳", "牛乳"];
const frequency = new Map();
for (const word of words) {
    if (frequency.has(word)) {
        frequency.set(word, frequency.get(word) + 1);
    } else {
        frequency.set(word, 1);
    }
}
console.log(frequency); // Map(3) { 'りんご' => 2, 'パン' => 1, '牛乳' => 3 }


const unique = new Set(words);
console.log(unique);        // Set(3) { 'りんご', 'パン', '牛乳' }
console.log([...unique]);   // 配列に、戻す