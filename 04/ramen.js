console.log("1: はじめ");

setTimeout(() => {
  console.log("2: 2秒後に、実行");
}, 2000);

console.log("3: おわり");


const wait =(ms)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    });
};

wait(1000).then(()=>{
    console.log("1秒経ちました");
});

console.log("先にこれが表示される");