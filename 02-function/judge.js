function judge(myhand,comhand){
    if ((myhand - comhand + 3) % 3 === 0) {
        return "引き分け";
    }else if ((myhand - comhand + 3)%3 === 1) {
        return "負け";
    }else{
        return "勝ち";
    }
}
console.log(judge(0, 1)); // 勝ち
console.log(judge(0, 2)); // 負け
console.log(judge(1, 1)); // 引き分け
console.log(judge(2, 0)); // 勝ち

/*
読みやすくする
function judge(myhand,comhand){
    const result = (myhand - comhand + 3) % 3;
    if (result === 0) {
        return "引き分け";
    }else if (result === 1) {
        return "負け";
    }else{
        return "勝ち";
    }
}
*/


//アロー関数で書く

const judge2 = (myhand,comhand) => {
    const result = (myhand - comhand + 3) % 3;
    if (result === 0) {
        return "引き分け";
    } else if (result === 1) {
        return "負け";
    } else {
        return "勝ち";
    }
};
console.log(judge2(0, 1)); // 勝ち
console.log(judge2(0, 2)); // 負け
console.log(judge2(1, 1)); // 引き分け
console.log(judge2(2, 0)); // 勝ち