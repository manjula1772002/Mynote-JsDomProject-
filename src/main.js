//  add btn 
const addNote=document.getElementById("add-note");

// closeBTn
const closeBtn=document.getElementById("close");
// dialogDivEl 
const dialogDivEl = document.getElementById("dialog-div");
// dialogDivEl heading 
const dialogHeading = document.getElementById("dialog-Heading");
// formelement
const formDiv= document.getElementById("form-div");
// savebtn 
const saveBtn= document.getElementById("save-btn");
// content 
const noteContent= document.getElementById("note-content");
// title 
const noteTitle= document.getElementById("note-title");
// container 
const containerDiv= document.getElementById("container");

// data vars
let notes = [];
let existingUserId = null;
let NOTES_KEY = "notes"


// dialog ope fn 
function dialogOpenFn() {
    // if

    dialogDivEl.showModal();
}

// close fn
function dialogCloseFn() {
    dialogDivEl.close();
    formDiv.reset()
}


// save fn
function saveNote(e) {
    e.preventDefault();
    const title = noteTitle.value.trim();
    const content = noteContent.value.trim();
    if(title==""||content==""){
        alert("Please enter the value");
        return;
    }

    // localstorge
    notes.unshift({
        id:generateId(),
        title,
        content

    }) 

    saveLocalStorage();
    dialogCloseFn();
    // renderFn();
    
}
// id gentraion 
const generateId= () => crypto.randomUUID(); 


function saveLocalStorage(){
     localStorage.setItem(NOTES_KEY , JSON.stringify(notes));
}

function renderFn() {
    let fetchedData = JSON.parse(localStorage.getItem(NOTES_KEY))
    notes = fetchedData ?? [];

    // containerDiv.innerHTML = 
}

    


renderFn();
// event handler

addNote.addEventListener("click", dialogOpenFn ) 
closeBtn.addEventListener("click", dialogCloseFn)
saveBtn.addEventListener("click", saveNote)