//입력하고 엔터하면 입력한 내용을 webstorage에 저장
//창에 새 요소로 ul todo list에 li로 추가해줌
//추가된 요소에는 닫기 버튼이 포함
//닫기 버튼을 클릭하면 해당 요소를 삭제
const toDoForm=$('#todo-form');
const toDoInput=$('#todo-form input');
const toDoList =$('#todo-list');

const TODOKEY='todos';
let toDos=[];

toDoForm.on('submit',toDoSubmitHandler);

function toDoSubmitHandler(event){
    event.preventDefault();
    const newTodo=toDoInput.val();
    toDoInput.val('');
    const newTodoObj={
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    printToDo(newTodoObj);
    saveToDo();

}
function printToDo(newTodo){
    const li=$(`<li id=${newTodo.id} class="list-group-item bg-white border"> <span>${newTodo.text}</span>
    <button type ="button" class="btn-close float-end" aria-label="close"></button></li>`);
    toDoList.append(li);
    $('button').on('click',deleteToDo);
}
function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter(todo=>todo.id!==parseInt(li.id));
    saveToDo();
}
function saveToDo(){
    localStorage.setItem(TODOKEY,JSON.stringify(toDos));
}
const saveToDos=localStorage.getItem(TODOKEY);
if(saveToDos!==null){
    const parsedToDos=JSON.parse(saveToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(printToDo);
}