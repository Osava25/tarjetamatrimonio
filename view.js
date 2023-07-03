const slider = document.querySelector('.slider');
const slider2 = document.querySelector('.slider2');
const bigHeight = document.querySelector('.big-height'); 
const slides = document.querySelectorAll('.slide');
const btnAvanzar = document.querySelectorAll('.btn-avanzar');
const yesGuest = document.getElementById('si');
const noGuest = document.getElementById('no');
const nameGuest = document.getElementById('name_guest');
let guestNumber = document.getElementById('inv_principal');
const guestNameDom = document.getElementById('guest_name');
const guestNumberDom = document.getElementById('guest_number')
const emptyName = document.getElementById('empty_name');
const validationName = document.getElementById('validation-name');
let nameGuestV = nameGuest.value; 

var guestAllFilter = [];

// CLASE INVITADOS
class Guest{
  constructor(name, lastname, guestsNumber, guest1, guest2 = ""){
    this.name = name;
    this.lastname = lastname;
    this.guestsNumber = guestsNumber;
    this.guest1 = guest1;
    this.guest2 = guest2;
    this.fullname = name + " " + lastname;
  }
  
}

let guests1 = new Guest("OMAR", "SANTIS", "tres(3)", "Laura Guerrero", "Luis Martinez");
let guests2 = new Guest("RENE", "SANTIS", "tres(3)", "Ana Perez", "Carlos Rodriguez");
let guests3 = new Guest("LAURA", "GUERRERO", "tres(3)", "Ana Perez", "Carlos Rodriguez");
let guests4 = new Guest("BETTY", "VARGAS", "dos(2)", "Alvaro Santis");

let guestAll = [guests1, guests2, guests3, guests4];

let slideIndex = 0;
var isNameFieldValidate = false;

// Event listener para el botón de avanzar en cada slide
btnAvanzar.forEach((btn) => {
  btn.addEventListener('click', () => {
    if(slideIndex == 1){
      validateName();
      if(isNameFieldValidate){
        slideTransition();
      }
    }
    else{
      slideTransition();
    }
  });
});

function slideTransition(){
  slideIndex = (slideIndex + 1) % slides.length; // Obtener el índice del siguiente slide
    slider.style.transform = `translateX(-${slideIndex * (100 / slides.length)}%)`; // Desplazar los slides horizontalmente 
    // Slide Mayor Height 100vh
    let slide = slides[slideIndex];
      if(slide === bigHeight){
        slider.classList.add('slider2');
      }
      else{
        slider.classList.remove('slider2');
      }        
};  

// VALIDACION INPUT INVITADOS

function validateName(){
  guestAll.forEach(element =>{
      if(element.fullname == nameGuest.value.toUpperCase()){
        isNameFieldValidate = true;
        guestNameDom.innerHTML = element.name;
        guestNumberDom.innerHTML = element.guestsNumber;
        // Filtro de invitados
        guestAllFilter.push(element);
        // Insertar invitados al DOM
        guestAllFilter.forEach(element => {
            guestNumber.innerHTML += `<input type="radio" name="toggle" class="accordion-toggle" checked /><div class="accordion-header">Invitado Titular ${element.name} ${element.lastname}</div><div class="accordion-content caja-info-acordeon">
            <form action=""><div class="spacing-top-10"><p class="descripcion"><b>¿Confirmas la asistencia de ${element.name} ${element.lastname} a la boda?</b></p><input type="radio" id="si" name="boda" value="si">
            <label class="l-guest" for="si">Si</label><input type="radio" id="no" name="boda" value="no"><label class="l-guest" for="no">No</label><br></div></form></div></div>`
        });
        if(element.guest1){
            guestAllFilter.forEach(element => {
              guestNumber.innerHTML += `<input type="radio" name="toggle" class="accordion-toggle"/><div class="accordion-header">Invitado ${element.guest1}</div><div class="accordion-content caja-info-acordeon">
              <form action=""><div class="spacing-top-10"><p class="descripcion"><b>¿Confirmas la asistencia de ${element.guest1} a la boda?</b></p><input type="radio" id="si" name="boda" value="si">
              <label class="l-guest" for="si">Si</label><input type="radio" id="no" name="boda" value="no"><label class="l-guest" for="no">No</label><br></div></form></div></div>`
            });
        }
        if(element.guest2){
          guestAllFilter.forEach(element => {
            guestNumber.innerHTML += `<input type="radio" name="toggle" class="accordion-toggle"/><div class="accordion-header">Invitado ${element.guest2}</div><div class="accordion-content caja-info-acordeon">
            <form action=""><div class="spacing-top-10"><p class="descripcion"><b>¿Confirmas la asistencia de ${element.guest2} a la boda?</b></p><input type="radio" id="si" name="boda" value="si">
            <label class="l-guest" for="si">Si</label><input type="radio" id="no" name="boda" value="no"><label class="l-guest" for="no">No</label><br></div></form></div></div>`
          });

        }   
      }
      else if(nameGuest.value == ""){
        emptyName.classList.remove('d-none');
        validationName.classList.add('d-none');
      }
      else if(nameGuest.value.toUpperCase() != element.fullname){
        validationName.classList.remove('d-none');
        emptyName.classList.add('d-none');
      }
  });
};



    





