const inputbox = document.getElementById("textBox");
const listcontainer = document.getElementById("list-container");
const button = document.querySelector(".btn");

// console.log(listcontainer.className);

button.addEventListener('click', ()=>{
    addTask();
})

inputbox.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        addTask();
    }
})

// inputbox.addEventListener('input', ()=>{
// })

function addTask(){
    console.log(inputbox.value);
 if(inputbox.value == ''){
    alert('You Must Write Something!')
 }
 else{
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);

    // let span = document.createElement("span");
    // span.innerHTML = "\u00d7";
    // li.appendChild(span);

    let image = document.createElement("img");
    image.src = "images/delete.png";
    li.appendChild(image);
 }

 inputbox.value = '';
 saveData();
}


// This JS Code want to Understand (!important)
listcontainer.addEventListener('click', (e)=>{
 if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");               //  <== Research 
    saveData();
 }
 else if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    saveData();
 }
}, false);


// Local Storage Concept 
// localStorage methods => getItem() | setItem() | removeItem() | clear() 
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showData(){
listcontainer.innerHTML = localStorage.getItem("data");
}

showData();                                       // <= Research


