const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function countdown() {
  console.log("3");
  await wait(1000);
  console.log("2");
  await wait(1000);
  console.log("1");
  await wait(1000);
  console.log("スタート！");
}

countdown();
console.log("カウントダウン開始（これは、すぐ、表示される）");