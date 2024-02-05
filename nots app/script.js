const  addBtn  =  document.getElementById('add');
 
addBtn.addEventListener("click", ()=> addNewnote())


function addNewnote(text = " ") {
  const note =  document.createElement('div');
  note.classList.add('nots')

  note.innerHTML = `
  <div class="tools">
        
  <button class="editbtn">
          <ion-icon name="create-outline"></ion-icon>
        </button>

        <button class="deletbtn">
          <ion-icon name="close-circle-outline"></ion-icon>
          </button>
       
          </div>
      
          <div class="main ${text ? " " : "op"}"></div>
      
          <textarea class="${text ? "hidden " : " "}"></textarea>
  `



  document.body.appendChild(note);
}


  const editBtn = note.querySelector('.edit')
  const deleteBtn = note.querySelector('.deletbtn')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('textarea')

deleteBtn.addEventListener('click',()=>{
  note.remove();
})