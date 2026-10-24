async function getTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    if (!response.ok){
        throw new Error("通信に失敗しました");
    }
    const todos = await response.json();

    // ① 10件分の、タイトルだけの、配列にする
    const titles = todos.map((todo) => todo.title);
    console.log(titles);
    // ② 完了済み（completed が true）だけに、絞る
    const completedTodos = todos.filter((todo) => todo.completed);
    // ③ 何件、完了済みか、表示する
    console.log(`完了済みのタスク数: ${completedTodos.length}`);
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
}

getTodos();