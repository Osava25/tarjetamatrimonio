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
let formGuess = document.getElementById("form_guess");
let textGuess = document.getElementById("text_guess");
let loadValidation = document.getElementById("loader");
let btnComplete = document.getElementById("btn-complete");
let btnValidar = document.getElementById("btn-validar");
const formName = document.forms['form_name'];
const form = document.forms['contact-form']

// URL y constante Conexion Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbzZi2ux2bGxIkRzYThzMclvMANnxsgc1XsFayq_HqHP1slG50ZgLhZuzzQKHdMoFTh0/exec'


// CLASE INVITADOS
class Guest{
  constructor(name, lastname, subGuest = null){
    this.name = name;
    this.lastname = lastname;
    this.subGuest = subGuest;
    this.fullname = name + " " + lastname;
    this.fullnameSp = name + " " + lastname + " ";
  } 
}
// INVITADOS OMAR
let guests1 = new Guest("MARLON", "SANTIS", [new Guest("Invitado", "1")]);
let guests2 = new Guest("MARJORIE", "SANTIS", [new Guest ("Invitado", "1"), new Guest("Invitado", "2")]);
let guests3 = new Guest("CARLOS", "BELTRAN", [new Guest("Invitado", "1"), new Guest("Invitado", "2")]);
let guests4 = new Guest("AURY", "OROZCO", [new Guest("Invitado", "1"), new Guest("Invitado", "2")]);
let guests5 = new Guest("LUCELLY", "BELTRAN", [new Guest("Invitado", "1"), new Guest("Invitado", "2")]);
let guests6 = new Guest("SERGIO", "SOLANO", [new Guest("Invitado", "1"), new Guest("Invitado", "2")]);
let guests7 = new Guest("LORENZO", "BELTRAN", [new Guest("Invitado", "1")]);
let guests8 = new Guest("DANURIS", "GARCÍA", [new Guest("Invitado", "1")]);
let guests9 = new Guest("JORGE", "OROZCO", [new Guest("Invitado", "1")]);
let guests10 = new Guest("ISABEL", "SANTIS", [new Guest("Invitado", "1")]);
let guests11 = new Guest("JAVIER", "RUEDA", [new Guest("Invitado", "1")]);
let guests12 = new Guest("JORGE", "DE LA HOZ", [new Guest("Invitado", "1")]);
let guests13 = new Guest("WILLIAM", "PRETTEL");
let guests14 = new Guest("JUAN", "DÍAZ");
let guests15 = new Guest("WENDY", "BUSTILLO", [new Guest("Invitado", "1")]);
let guests16 = new Guest("ANGELY", "DE LIMA");
let guests17 = new Guest("ANDREA", "PORRAS");
let guests18 = new Guest("FRANK", "PRADA");
let guests19 = new Guest("CRISTIAN", "CASTILLO", [new Guest("Invitado", "1")]);
let guests20 = new Guest("OMAR", "SANTIS", [new Guest("Invitado", "1"), new Guest("Invitado", "2")]);

// INVITADOS LAU
let guests21 = new Guest("EDITH", "NEGRETE");
let guests22 = new Guest("SOLFA", "GONZALEZ");
let guests23 = new Guest("GERALDINE", "GUERRERO", [new Guest("Invitado", "1")]);
let guests24 = new Guest("CINDY", "GUERRERO", [new Guest("Invitado", "1")]);
let guests25 = new Guest("NATALIA", "GUERRERO");
let guests26 = new Guest("VIANEY", "JIMENEZ", [new Guest("Invitado", "1")]);
let guests27 = new Guest("ISABEL", "LOPEZ", [new Guest("Invitado", "1")]);
let guests28 = new Guest("ANGELICA", "THERAN");
let guests29 = new Guest("JAN", "AGAMEZ", [new Guest("Invitado", "1")]);
let guests30 = new Guest("SERGIO", "AGAMEZ", [new Guest("Invitado", "1")]);
let guests31 = new Guest("ANDREA", "BALETA", [new Guest("Invitado", "1")]);
let guests32 = new Guest("LAURA", "VERGARA");
let guests33 = new Guest("LAURA", "DE LA TORRE");
let guests34 = new Guest("JUAN", "DÍAZ");
let guests35 = new Guest("ANGIE", "TRUJILLO", [new Guest("Invitado", "1")]);
let guests36 = new Guest("YENILETH", "GONZALEZ");
let guests37 = new Guest("MARIA", "BOHORQUEZ");
let guests38 = new Guest("DANIELA", "DIAZ");
let guests39 = new Guest("IVON", "MAESTRE");
let guests40 = new Guest("IVON", "MAESTRE");
let guests41 = new Guest("MARIA", "HERRERA", [new Guest("Invitado", "1")]);
let guests42 = new Guest("PRISCILA", "BRITO");
let guests43 = new Guest("ROSAURY", "YEJAS");
let guests44 = new Guest("LEDA", "MEJIA");
let guests45 = new Guest("CARLOS", "MEDINA", [new Guest("Invitado", "1")]);
let guests46 = new Guest("FERNANDO", "ZULUAGA", [new Guest("Invitado", "1")]);
let guests47 = new Guest("JOSE", "TORRES");
let guests48 = new Guest("ALVARO", "NEGRETE", [new Guest("Invitado", "1")]);
let guests49 = new Guest("KEISSY", "CERRA");
let guests50 = new Guest("PEDRO", "CASTILLA");

// EXTRAS
let guests51 = new Guest("RENE", "SANTIS");
let guests52 = new Guest("BETTY", "VARGAS");
let guests53 = new Guest("ALVARO", "SANTIS");
let guests54 = new Guest("ADRIANA", "CARO");
let guests55 = new Guest("LUISA", "ORTEGA");
let guests56 = new Guest("JESUS", "CERVANTES");
let guests57 = new Guest("MAURICIO", "VILLADIEGO");
let guests58 = new Guest("LUIS", "IGLESIA");
let guests59 = new Guest("JORGE", "MAYA");
let guests60 = new Guest("TAMARA", "LARA");
let guests61 = new Guest("HEIMY", "BLANCO");
let guests62 = new Guest("EHIDNA", "GUERRERO");
let guests63 = new Guest("ARLINE", "VARGAS", [new Guest("Invitado", "1")]);
let guests64 = new Guest("GISELLY", "GUERRERO", [new Guest("Invitado", "1")]);
let guests65 = new Guest("ANGELO", "FERNANDEZ", [new Guest("Invitado", "1")]);


let guestAll = [guests1, guests2, guests3, guests4, guests5, guests6, guests7, guests8, guests9, guests10, guests11, guests12, guests13, guests14, guests15,
                guests16, guests17, guests18, guests19, guests20, guests21, guests22, guests23, guests24, guests25, guests26, guests27, guests28, guests29,
                guests30, guests31, guests32, guests33, guests34, guests35, guests36, guests37, guests38, guests39, guests40, guests41, guests42, guests43,
                guests44, guests45, guests46, guests47, guests48, guests49, guests50, guests51, guests52, guests53, guests54, guests55, guests56, guests57, 
                guests58, guests59, guests60, guests61, guests62, , guests63, guests64, guests65];

let slideIndex = 0;
var isNameFieldValidate = false;
var hasError = false;
var isNameFound = false;
var guestFound; 

// Event listener para el botón de avanzar en cada slide
btnAvanzar.forEach((btn) => {
  btn.addEventListener('click', () => {
    if(slideIndex == 1){
      validateName();
      if(isNameFieldValidate){
        addInfoGuess();
        slideTransition();
      }
    }
    else if(slideIndex == 2) {
      // console.log("enter slide 2")
      // console.log(hasError)
      // if(hasError = false) {
      //   console.log("enter slide 2 false")
      //   //console.log(hasError)
      //   slideTransition();
      // }
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
function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}

let vGuess1 = false;
let vGuess2 = false;


function validateName(){

  var inputGuessName = nameGuest.value.toUpperCase();
  guestAll.forEach(element =>{
      if (nameGuest.value == ""){
        vGuess1 = true; 
      }
      else if (isEqual(element.fullname, inputGuessName) || isEqual(element.fullnameSp, inputGuessName)){
        isNameFieldValidate = true;
        guestFound = element;
      }
      else {
        vGuess2 = true
      }  
  });
  if (vGuess1){
    emptyName.classList.remove('d-none');
    validationName.classList.add('d-none');
  }
  if (vGuess2){
    validationName.classList.remove('d-none');
    emptyName.classList.add('d-none');
  }
};

var nameGuess = 2;
function addInfoGuess(){ 
        guestNameDom.innerHTML = guestFound.name;
       
        
        // Filtro de invitados
        // Insertar invitados al DOM
          if (guestFound.subGuest) {
            textGuess.innerHTML = `tienes <b>${guestFound.subGuest.length + 1}</b> cupos disponibles.` 
          }
          else {
            textGuess.innerHTML = `tienes <b>1</b> cupo disponible.` 
          }
                 
          guestNumber.innerHTML = `<input type="radio" name="toggle" class="accordion-toggle" checked /><div class="accordion-header">Invitado Titular ${guestFound.name} ${guestFound.lastname}</div><div class="accordion-content caja-info-acordeon">
          <div class="spacing-top-10"><p class="descripcion"><b>¿Confirmas la asistencia de ${guestFound.name} ${guestFound.lastname} a nuestra cena?</b></p>
          <div class="center-input"><input type="radio" id="si-1" name="guess_1" value="si"><label class="l-guest" for="no">Si</label></div>
          <div class="center-input"><input type="radio" id="no-1" name="guess_1" value="no"><label class="l-guest" for="no"> No</label></div><br></div>
          <input class="d-none" id="name_guest" name="nombre_invitado_principal" type="text" value="${nameGuest.value}"> 
          <span id="validation-guess" class="d-none v-guess">Debes confirmar al invitado 1</span>
          </div>
          </div>` 

          if(guestFound.subGuest != null){
            guestFound.subGuest.forEach(element => {
              guestNumber.innerHTML += `<input type="radio" name="toggle" class="accordion-toggle" /><div class="accordion-header">Invitado ${nameGuess}</div><div class="accordion-content caja-info-acordeon">
              <div class="spacing-top-10"><p class="descripcion"><b>¿Confirmas la asistencia del invitado ${nameGuess} a nuestra cena?</b></p>
              <div class="center-input"><input type="radio" id="si-1" name="guess_${nameGuess}" value="si"><label class="l-guest" for="no">Si</label></div>
              <div class="center-input"><input type="radio" id="no-1" name="guess_${nameGuess}" value="no"><label class="l-guest" for="no"> No</label></div><br></div>
              <span id="validation-guess_${nameGuess}" class="v-guess d-none">Debes confirmar al invitado ${nameGuess}</span>
              </div>
              </div>`
              nameGuess += 1
          });
          }
}


// Validación form confirmación invitados
if (form != null) {
  form.addEventListener("submit", function(event){
    var vGuess = document.getElementById("validation-guess");
    nameGuess = 2;
    if (!document.querySelector(`input[name="guess_1"]:checked`)) {
      vGuess.classList.remove("d-none");
      hasError = true;
    }
    else {
      hasError = false;
      vGuess.classList.add("d-none");
    }
   
    if (guestFound.subGuest != null){
      guestFound.subGuest.forEach(()=> {
        var vSubGuess = document.getElementById("validation-guess_" + nameGuess);
      if(!document.querySelector(`input[name="guess_${nameGuess}"]:checked`)) {
        vSubGuess.classList.remove("d-none");
        hasError = true;     
      } else {
        hasError = false;
        vSubGuess.classList.add("d-none");
      }
      nameGuess += 1
    });
    }
    if(hasError) event.preventDefault();
    else {
      loadValidation.classList.remove("d-none");
      btnComplete.classList.add("d-none");
      // Conexión google sheet
      event.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(() => { window.location = "gracias.html"; })
      .catch(error => console.error('Error!', error.message))
    }   
  })

}




/* if (form != null) {
  form.addEventListener("submit", function(event){
    var vGuess = document.getElementById("validation-guess");
    nameGuess = 2;
    if (!document.querySelector(`input[name="guess_1"]:checked`)) {
      vGuess.classList.remove("d-none");
    }
    else {
      vGuess.classList.add("d-none");
    }
   
    if (guestFound.subGuest != null) {
      guestFound.subGuest.forEach(()=> {
        var vSubGuess = document.getElementById("validation-guess_" + nameGuess);
          if (!document.querySelector(`input[name="guess_${nameGuess}"]:checked`)) {
            vSubGuess.classList.remove("d-none");   
          } else {
            vSubGuess.classList.add("d-none");
          }
          nameGuess += 1
      });
    }

    if (!document.querySelector(`input[name="guess_1"]:checked`) || !document.querySelector(`input[name="guess_2"]:checked`) || !document.querySelector(`input[name="guess_3"]:checked`)) {
      event.preventDefault();
    }
    else {
      vGoogleSheet(event);
    }
    guestFound.subGuest.forEach(()=> {
      if (!document.querySelector(`input[name="guess_1"]:checked`) || !document.querySelector(`input[name="guess_2"]:checked`) || !document.querySelector(`input[name="guess_3"]:checked`)) {
        event.preventDefault();
      }
      else {
        vGoogleSheet(event);
      }
    });
   
  })
}

function vGoogleSheet(event) {
  loadValidation.classList.remove("d-none");
          btnComplete.classList.add("d-none");
          // Conexión google sheet
          event.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(() => { window.location = "gracias.html"; })
          .catch(error => console.error('Error!', error.message))
} */












    





