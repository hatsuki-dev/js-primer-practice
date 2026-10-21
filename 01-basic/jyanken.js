const hands = ["ぐー", "ちょき", "ぱー"];

let x = 1;
while (x <= 3) {
    const myhand = Math.floor(Math.random() * 3);
    const comhand = Math.floor(Math.random() * 3);

    console.log(`あなた: ${hands[myhand]} / 相手: ${hands[comhand]}`);
    if ((myhand - comhand + 3) % 3 === 0) {
        console.log("引き分け");
    } else if ((myhand - comhand + 3) % 3 === 1) {
        console.log("負け");
    } else {
        console.log("勝ち");
    }
    x += 1;
}

