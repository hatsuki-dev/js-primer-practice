const message = "外の変数";

function show() {
  const inner = "関数の中の変数";
  console.log(message);
  console.log(inner);
}

show();
console.log(message);
// console.log(inner); // ReferenceError: inner is not defined


//スコープを理解するためのサンプルコード

if (true) {
  let a = 1;
  var b = 2;
}
console.log(b); // 2
console.log(a); // ReferenceError: a is not defined


/* 守るスコープの範囲
`let` / `const` | ブロック（`{ }`）の中だけ |
`var` | 関数の中だけ（`if` や `for` の `{ }` は無視する） 
*/