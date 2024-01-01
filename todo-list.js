const todolist = [];

function renderList() {
    let todoHtml = '';


    //looping using .forEach()
    todolist.forEach(function(todoObject,index){

       const { name, dueDate } = todoObject;
        //OR const name=todoObject.name;
        //in same line as const {dueDate} = todoObject;
        //OR const dueDate=todoObject.dueDate;
        if (name != ``) {
            const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
         <div>    
            <button class="js-delete-element" onclick="
                todolist.splice(${index},1);
                renderList();
            ">Delete</button>
        </div>
        `;
            todoHtml += html;
        }

    });

    console.log(todoHtml);
    document.querySelector('.js-display').innerHTML = todoHtml;
}
function adds() {
    const inputelement = document.querySelector('.js-todo-name');
    const name = inputelement.value;

    const dueDateElement = document.querySelector('.js-date-selector');
    const dueDate = dueDateElement.value;

    todolist.push({
        //name:name,
        //dueDate:dueDate

        name, dueDate
    });
    inputelement.value = '';

    renderList();
}