const todoList = document.querySelector(".todo-list");
console.log(todoList);

const newTodo = document.createElement("li");
const todoText = document.createTextNode("new todo");
newTodo.appendChild(todoText);
todoList.appendChild(newTodo);

const newTodo2 = document.createElement("li");
newTodo2.textContent = "new todo 2";
todoList.appendChild(newTodo2);

const newTodo3 = document.createElement("li");
newTodo3.append("new todo 3");
todoList.append(newTodo3);

//append vs appendChild  -> appendChild accepts only node but append accepts node and string as well, another diff is appendChild appends a single child but append appends all the given children seperated wityh commas.

//append is used now appendChild is the old one.

//we can remove like\
newTodo3.remove();
newTodo2.remove();
newTodo.remove();


//append appends in the end 

//we can add in start with prepend

todoList.prepend(newTodo);

todoList.before("it will be added just before the todolist");
todoList.after("it will be added just after the todolist");


// todoList.insertAdjacentHTML(where, whatInString)   ye bhi upr wale kaam krega lgbhg or wse sb janne ki jarurat nhi hoti jb krna hota h to google krke mil jaata h upr waale common h


// todoList.insertBefore(referenceItem, itemTobeAdded);  will insert before the reference item

// todoList.replaceChild(referenceItem, itemTobeReplaced)  ye replace krdeta h ek or h replaceChildren same diff h in dono mei append or appendChild jse hi

todoList.removeChild(newTodo); //removed

console.log(todoList.contains(newTodo));  //false













