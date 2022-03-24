const form = document.querySelector('form');
const ul = document.querySelector('ul');
const template = document.querySelector('#todo-row').content;
const search = document.querySelector('#search');

let index;
let onEdit = false;
let store = JSON.parse(localStorage.getItem('todoList')) || [];

const genTodo = obj => {
  // on crée une copie du template
  const clone = template.cloneNode(true);
  // on accède à l'élément div avec la class todo-text à tavers clone
  const todoText = clone.querySelector('.todo-text');
  const li = clone.querySelector('.todo');
  const check = clone.querySelector('.check');

  check.innerHTML = obj.status === true ? '<i class="fas fa-check"></i>' : '';
  li.id = obj.id;
  todoText.innerText = obj.todo;
  ul.appendChild(clone);
};

if (store.length > 0) {
  store.forEach(todoObj => {
    genTodo(todoObj);
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const todo = form.add.value.trim();

  if (todo === '') {
    onEdit = false;
    return;
  }

  if (onEdit) {
    Array.from(ul.children)[index].children[0].children[1].innerText = todo;
    onEdit = false;
    store[index].todo = todo;
    localStorage.setItem('todoList', JSON.stringify(store));
    form.reset();

    return;
  }

  const id = Math.floor(Math.random() * 1000);
  const todoObj = {
    id: id,
    todo: todo,
    status: false,
  };
  store.push(todoObj);

  genTodo(todoObj);

  localStorage.setItem('todoList', JSON.stringify(store));

  form.reset();
});

ul.addEventListener('click', function (event) {
  if (event.target.classList.contains('todo-text')) {
    event.target.previousElementSibling.innerHTML =
      event.target.previousElementSibling.innerHTML === '' ? '<i class="fas fa-check"></i>' : '';

    store.map(todo => {
      if (todo.id == event.target.parentElement.parentElement.id) {
        todo.status = !todo.status;
      }

      return todo;
    });

    localStorage.setItem('todoList', JSON.stringify(store));
  }

  if (event.target.classList.contains('delete')) {
    event.target.closest('li').remove();
    store = store.filter(todo => todo.id != event.target.closest('li').id);

    localStorage.setItem('todoList', JSON.stringify(store));
  }

  if (event.target.classList.contains('edit')) {
    index = Array.from(ul.children).indexOf(event.target.closest('li'));
    form.add.value = event.target.parentElement.previousElementSibling.innerText;
    onEdit = true;
  }
});

search.addEventListener('keyup', () => {
  Array.from(ul.children).forEach(li => {
    if (!li.children[0].children[1].innerText.includes(search.value.trim())) {
      li.classList.add('filtered');
    } else {
      li.classList.remove('filtered');
    }
  });
});
