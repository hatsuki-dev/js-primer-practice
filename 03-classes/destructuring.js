const [first, second] = ["りんご", "パン"];
console.log(first, second);   // りんご パン

const item = { name: "牛乳", price: 180 };
const { name, price } = item;
console.log(name, price);     // 牛乳 180


const point = [10, 20];
const [x,y]=point;
console.log(`x: ${x}, y: ${y}`);


const user = { name2: "はっち", age: 20, city: "東京" };
const { name2, city } = user;
console.log(`${name2}(${city})`);


// forEach での分割代入
const items = [
  { name: "りんご", price: 150 },
  { name: "パン", price: 200 },
];

items.forEach(({ name, price }) => {
  console.log(`${name}: ${price}円`);
});


// Object.entries() での分割代入
const count = { りんご: 2, パン: 1, 牛乳: 3 };
for (const [word, num] of Object.entries(count)) {
  console.log(`${word}: ${num}回`);
}



for (const entry of Object.entries(count)) {
  const [word, num] = entry;
  console.log(`${word}: ${num}回`);
  // entry は ["りんご", 2] のような配列
  // entry[0] と entry[1] を使って、同じ表示にする
}