const count = {};
count["りんご"] = 1;
console.log(count);
console.log(count["りんご"]);
console.log(count["みかん"]);

const words = ["りんご", "パン", "りんご", "牛乳", "牛乳", "牛乳"];
const count2 = {};
for (const word of words) {
    if (count2[word] === undefined){
        count2[word] = 1;
    } else {
        count2[word]++;
    }
}
console.log(count2);

console.log(Object.entries(count2));
// [ ['りんご', 2], ['パン', 1], ['牛乳', 3] ]

for (const [word, num] of Object.entries(count2)) {
  console.log(`${word}: ${num}回`);
}


let maxWord = "";
let maxNum = 0;
for (const [word, num] of Object.entries(count2)) {
    if(num>maxNum){
        maxNum=num;
        maxWord=word;
    }else{
        // do nothing
    }
}
console.log(`最も多いのは${maxWord}で、${maxNum}回です。`);
    