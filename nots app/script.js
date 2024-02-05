const  addBtn  =  document.getElementById('add');
 
addBtn.addEventListener("click", ()=> addNewnote())


function addNewnote(text = "") {
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
      
          <div class="main ${text  ?  "" : "hidden"}"></div>
      
          <textarea class="${text  ?  "hidden" : ""}"></textarea>
  `



  


  const editBtn = note.querySelector(".editbtn")


  const deleteBtn = note.querySelector('.deletbtn')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('textarea')

deleteBtn.addEventListener('click',()=>{
  note.remove();
});
  editBtn.addEventListener('click',()=>{
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');

  })

textArea.addEventListener('input',(e)=>{
  let {value}= e.target;

  main.innerHTML = value;
//   Inside the event listener function, this line uses destructuring assignment to extract the value property from the e.target object (which refers to the element that triggered the event).
// By using destructuring, the code avoids the need to write e.target.value repeatedly.
})


document.body.appendChild(note);

}