const prices = [100, 200, 300];
const doubled = prices.map((price) => price * 2);
console.log(doubled);

/* for文で書いた場合
const doubled = [];
for (const price of prices) {
  doubled.push(price * 2);
}
console.log(doubled); // [200, 400, 600]
*/

const items = [
  { name: "りんご", price: 150 },
  { name: "パン", price: 200 },
  { name: "牛乳", price: 180 },
  { name: "チョコ", price: 120 },
];
const names = items.map((item)=> item.name);
console.log(names);
//名前がパンの商品のみ取り出す
const paItem = items.filter((item) => item.name === "パン");
console.log(paItem);

const prices2 = [100, 200, 300, 150];
const expensive = prices2.filter((price2) => price2 >= 200);
console.log(expensive); // [200, 300]

const total = prices2.reduce((sum, price2) => sum + price2, 0);
console.log(total); // 750

/* for文で書いた場合
const expensive = [];
for (const price2 of prices2) {
    if (price2 >= 200) {
        expensive.push(price2);
    }
}
console.log(expensive); // [200, 300]
*/

