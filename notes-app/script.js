const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");
const notesEle = document.querySelector(".notes");
const main = notesEle.querySelector(".main");
const textArea = notesEle.querySelector("textarea");

editBtn.addEventListener("click", () =>{
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
}
);



