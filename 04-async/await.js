// then を使う書き方
wait(1000).then(() => {
  console.log("1秒たちました");
});

// async/await を使う書き方（同じ意味）
async function main() {
  await wait(1000);
  console.log("1秒たちました");
}
main();

