const inputbox = document.getElementById("textBox");
const listcontainer = document.getElementById("list-container");
const button = document.querySelector(".btn");


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
    alert('You Must Write Soomething!')
 }
 else{
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
 }

 inputbox.value = '';
 saveData();
}


// This JS Code want to Understand (!important)
listcontainer.addEventListener('click', (e)=>{
    console.log(e.target.tagName);
 if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
 }
 else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
 }
}, false);


// Local Storage Concept 
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showData(){
listcontainer.innerHTML = localStorage.getItem("data");
}
showData();


