var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
    event.target.parentNode.remove();
   },1000);
});
