/*
カウントダウン：for 文で、5, 4, 3, 2, 1 と順に表示して、最後に スタート！ と表示
合計：1から100までの数を、すべて足した合計を表示（答えは 5050 になるはず）
九九の1つの段：好きな数（例：7）の九九を、7 × 1 = 7 の形で、9行表示
*/

let x=0;
for (let i=5; i>=1; i--){
    console.log(i);
}
console.log("スタート！");


let total=0;
for (let i=1; i<=100; i++){
    total+=i;
}
console.log(total);

let dan=7;
for (let i=1; i<=9; i++){
    console.log(`${dan}*${i}=${dan*i}`);
}