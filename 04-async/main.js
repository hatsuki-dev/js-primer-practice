const list = document.querySelector("#list");

async function showTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  const todos = await response.json();

    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.title;
      list.appendChild(li);
      if (todo.completed){li.style.textDecoration = "line-through"}
    });
}

showTodos();


/*作る→設定する→追加するの順番にすると読みやすいらしい
todos.forEach((todo) => {
  const li = document.createElement("li");
  li.textContent = todo.title;

  if (todo.completed) {
    li.style.textDecoration = "line-through";
  }

  list.appendChild(li);
});
*/