async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const data = await response.json();
  console.log(data.title);
}

getTodo();