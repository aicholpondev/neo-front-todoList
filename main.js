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
        isDone:false,
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

            todoList.innerHTML += `
            
            <li class="todo-item">
            <div class="todo-item-left">
                <input type="checkbox" class="todo_checked">
                <p class="todo-item_text">${el.text}</p>
            </div>
            <div class="todo-item-right">
                <button class="todo-star">
                    <!-- <ion-icon name="star"></ion-icon> -->
                    eddit
                </button>
                <button data-id="${el.id}" class="todo-dell">
                    <ion-icon name="trash"></ion-icon>
                </button>
            </div>
        </li>
            `
        })

        if(tasks.length !==0){
            todoNull.style.display ="none"
        }else{
            todoNull.style.display ="block"
        }

        const todoItemDell =document.querySelectorAll('.todo-dell');
        Array.from(todoItemDell).forEach(item =>{
            item.addEventListener("click",() =>{
                tasks =tasks.filter(el =>{
                    return el.id != item.dataset.id
                })
                addItemTodoList()
                todoItemDell()

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

    //   const addItemTodoList = () =>{
    //     todoList.innerHTML = ''
    //     tasks.forEach((el) =>{
    //         todoList.innerHTML +=`
    //         <li class="todo_item" style="order:${el.isDone ? '+1' : '0' && el.isImportant? '-1' : '0'}">
    //                 <div class="todo_item_left">
    //                     <input ${el.isDone? "checked" : ""} data-id="${el.id}" type="checkbox" class="todo_checked">
    //                     <p style="text-decoration-line: ${el.isDone ? "line-through" : ""}" class="todo_item_text">${el.text}</p>
    //                 </div>
    //                 <div class="todo_item_right">
    //                     <span data-id="${el.id}" class="todo_star" style="color: ${el.isImportant ? "gold" : ''} ">
    //                         <ion-icon name="star"></ion-icon>
    //                     </span>
    //                     <span data-id="${el.id}" class="todo_del">
    //                         <ion-icon name="trash"></ion-icon>
    //                     </span>
    
    //                 </div>
    
    //             </li>`
    //     })
    
    //     if (tasks.length !== 0) {
    //         todoNull.style.display = "none"
    //     }else{
    //         todoNull.style.display = "block"
    //     }
    
    //     const todoStar = document.querySelectorAll('.todo_star');
    //     Array.from(todoStar).forEach(item =>{
    //         item.addEventListener('click',()=>{
    //          tasks = tasks.map(el =>{
    //           if (el.id == item.dataset.id){
    //             return{...el, isImportant: !el.isImportant}
    //           }else{
    //               return el
    //           }
    //          })
    //             addItemTodoList()
    //             localStorage.setItem('tasks',JSON.stringify(tasks))
    
    //         })
    //     })
    //  const todoItemChecked = document.querySelectorAll(".todo_checked");
    //     Array.from(todoItemChecked).forEach(item =>{
    //        item.addEventListener("change",() =>{
    //            tasks = tasks.map(el =>{
    //                if (el.id == item.dataset.id){
    //                    return{...el,isDone: !el.isDone}
    //                }
    //                else{
    //                    return el
    //                }
    //            })
    //            addItemTodoList()
    //            localStorage.setItem('tasks',JSON.stringify(tasks))
    
    //        })
    //     })
    
    
    //     const todoDel = document.querySelectorAll(".todo_del");
    //     Array.from(todoDel).forEach(item =>{
    //         item.addEventListener("click",() =>{
    //             tasks = tasks.filter(el =>{
    //                 return el.id != item.dataset.id
    //             })
    //             addItemTodoList()
    //             localStorage.setItem('tasks',JSON.stringify(tasks))
    
    //         })
    //     })
    // }
    // addItemTodoList() 
