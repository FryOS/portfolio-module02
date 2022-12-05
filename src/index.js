import "normalize.css";
import "./styles/main.scss";
import "./index.html";



function openModal(){
  document.getElementById("modal-menu").style.display = "block";
}

function closeModal(){
  document.getElementById("dropdown").style.display = "-400px";
}

document.querySelector(".dropdown__button").addEventListener("click", function(event){
  event.preventDefault();
  document.querySelector(".dropdown__list").classList.toggle("dropdown__list-visible")
})


document.querySelectorAll(".dropdown__list-item").forEach(function(listItem){
  listItem.addEventListener("click", function(e){
    e.stopPropagation();
    document.querySelector(".dropdown__button").innerText = this.innerText;
    document.querySelector(".dropdown__button").focus();
    document.querySelector(".dropdown__list").classList.remove("dropdown__list-visible")
  })
})


document.addEventListener("click", function(e){
  if(e.target !== document.querySelector(".dropdown__button")){
    console.log(e.target)
    document.querySelector(".dropdown__list").classList.remove("dropdown__list-visible")
  }
})