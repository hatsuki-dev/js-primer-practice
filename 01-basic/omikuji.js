/*Math.random() で、0〜2の整数をつくる（Math.floor(Math.random() * 3)）
その数に応じて、結果を表示する
0 → 大吉
1 → 中吉
2 → 凶
最初は if / else if / else で書く
書けたら、switch でも書き直してみる
*/
x=Math.floor(Math.random()*3);

if (x === 0) {
    console.log("大吉");
} else if (x === 1) {
    console.log("中吉");
} else {
    console.log("凶");
}