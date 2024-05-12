// фейковый backend
let tasks = [
    {
        id:1,
        text:"Text",
        isDone:false,
        isImportant:false,
    },
    {
        id:2,
        text:"Title",
        isDone:true,
        isImportant:false,
    }
]




const todoList =document.querySelector(".todo-list"),
      todoForm =document.querySelector(".todo-form"),
      todoInput =document.querySelector(".todo-input"),
      todoError =document.querySelector(".todo-error"),
      todoNull =document.querySelector('.todo-null'),
      categoryOne =document.querySelector("#catOne"),
      categoryTwo =document.querySelector("#catTwo");

      const addItemTodoList =() =>{
        todoList.innerHTML = ''
        tasks.forEach((el) =>{

            //copy the "li" in html
            todoList.innerHTML += `
            
            <li class="todo-item">
            <div class="todo-item-left">
                <input ${el.isDone ? "checked" : ""} data-id="${el.id}" type="checkbox" class="todo-checked">
                <p style="text-decoration-line: ${el.isDone ? "line-through": ""}" class="todo-item_text">${el.text}</p>
            </div>
            <div class="todo-item-right">
                <button data-id="${el.id}" class="todo-edit">
                    eddit
                </button>
                <button data-id="${el.id}" class="todo-dell">
                    <ion-icon name="trash"></ion-icon>
                </button>
            </div>
        </li>
            `
        })

//todo list  пустой или есть задачи

        if(tasks.length !==0){
            todoNull.style.display ="none"
        }else{
            todoNull.style.display ="block"
        }

     
// путь на выбор категории

        // const span = document.querySelector("span");
        // const input =document.querySelector("input");

        // input.type = 'checkbox';
        // input.checked = todo.done;
        // span.classList.add('bubble');
        // if (todo.category == 'personal') {
        //     span.classList.add('personal');
        // } else {
        //     span.classList.add('business');
        // }
        


        
        //checked and line-thorugh

        const todoItemChecked = document.querySelectorAll('.todo-checked');
        Array.from(todoItemChecked).forEach(item =>{
            item.addEventListener("change",() =>{
                tasks= tasks.map(el =>{
                    if (el.id == item.dataset.id){
                    return{...el,isDone:!el.isDone}
                    }else{
                        return el
                    }
                })
                addItemTodoList()          
            }) 
        })


        
        // const todoItemEdit = document.querySelector(".todo-edit");
        // Array.from(todoItemEdit).forEach(item =>{
        //     item.addEventListener('click',() =>{
        //      const itemId = item.dataset.id;
        //      const todoToEdit = tasks.find(tasks => tasks.id ===itemId);

        //     })
        //     addItemTodoList()
        // })

        const todoItemEdit = document.querySelectorAll('.todo-edit');
Array.from(todoItemEdit).forEach(item => {
    item.addEventListener("click", () => {
        const taskId = item.dataset.id;
        const newText = prompt("Enter the new text for this task:");
        if (newText !== null && newText.trim() !== "") {
            tasks = tasks.map(el => {
                if (el.id === parseInt(taskId)) {
                    return { ...el, text: newText };
                } else {
                    return el;
                }
            });
            addItemTodoList();
        }
    });
});
    
               
//удаление
        const todoItemDell =document.querySelectorAll('.todo-dell');
        Array.from(todoItemDell).forEach(item =>{
            item.addEventListener("click",() =>{
                tasks =tasks.filter(el =>{
                    return el.id != item.dataset.id
                })
                addItemTodoList()
            

            })
        })
      }
      addItemTodoList()

    
      todoForm.addEventListener("submit",(event) =>{
        event.preventDefault()
       
        if(tasks.some(el => el.text.toUpperCase() === e.target.value.toUpperCase())){
        alert("Такая задача уже есть!")
        event.target[0].value = '';
        }else{
            tasks = [...tasks,{
                id:tasks.length ? tasks.at(-1).id +1 : 1,
                text:event.target[0].value,
                isDone:false,
                isImportant:false
            }]
        }

       
       
        addItemTodoList()
        event.target[0].value = ''
      })

      todoInput.addEventListener('input',(e) =>{
        if(tasks.some(el => el.text.toUpperCase() === e.target.value.toUpperCase())){
          todoError.style.display ='block'  
        }else{
            todoError.style.display ="none"
        }
      })
     

   

 
