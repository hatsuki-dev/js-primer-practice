const text = "  JavaScript is fun and JavaScript is useful  ";

const cleaned=text.trim();
console.log(cleaned);

const length = cleaned.length;
console.log(length);

const trimmed = {};
for (const word of cleaned.split(" ")) {
    console.log(word, trimmed);
    if (word in trimmed) {
        
        trimmed[word] += 1;
    } else {
        trimmed[word] = 1;
    }
}


for (const [text, num] of Object.entries(trimmed)) {
    console.log(`${text}: ${num}回`);
}

