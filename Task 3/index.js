let input=document.querySelector('.enter-list');
let addBtn= document.querySelector('.add-list');
let tasks =document.querySelector('.tasks');

input.addEventListener('keyup',() =>{
    if(input.value.trim()!==0){
        addBtn.classList.add('active')
    }
    else{
        addBtn.classList.remove('active')
    }
})

addBtn.addEventListener('click', () =>{
    if(input.value.trim()!==''){
        let newItem= document.createElement('div');
        newItem.classList.add('task-item');
        newItem.innerHTML= ` 
        <p>${input.value}</p>
        <div class="item-btn">
           <i class="fa-regular fa-pen-to-square"></i>
           <i class="fa-solid fa-xmark"></i>
        </div>  `

        tasks.appendChild(newItem);
        input.value='';
    }
    else{
        alert('Enter a task');
    }
})

//delete task
tasks.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

// mark completed

tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})
