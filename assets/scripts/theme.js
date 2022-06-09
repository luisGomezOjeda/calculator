const button__selector = document.querySelectorAll(".theme-button--selector input");
const body = document.querySelector("body");

button__selector[0].addEventListener("click",()=>{
 if(button__selector[0].checked){
  button__selector[1].checked = false;
  button__selector[2].checked = false;

  body.classList.remove("theme_2");
  body.classList.remove("theme_3");
  body.classList.add("body");
 }
});

button__selector[1].addEventListener("click",()=>{
 if(button__selector[1].checked){
  button__selector[0].checked = false;
  button__selector[2].checked = false;

  body.classList.remove("body");
  body.classList.remove("theme_3");
  body.classList.add("theme_2");
 }
});

button__selector[2].addEventListener("click",()=>{
 if(button__selector[2].checked){
  button__selector[0].checked = false;
  button__selector[1].checked = false;

  body.classList.remove("body");
  body.classList.remove("theme_2");
  body.classList.add("theme_3");
 }
});



