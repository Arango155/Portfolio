const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const translatebutton = document.getElementById('translate');


var codingskills = document.getElementById('codingskills');
var softskills = document.getElementById('softskills');
var icon = document.getElementById('icon');
var display = 1;
var display_Dark = 1;
var display_Skills = 1;
var display_translate = 1;


var body = document.getElementById('body');

function changeLanguage() {

  if (display_translate == 1) {
    document.getElementById('hi').innerText = "Hola! 👋🏽 Yo soy";
    document.getElementById('intro').innerHTML = "Soy un estudiante de ingeniería en sistemas ubicado en Guatemala en busca de nuevas oportunidades alrededor del mundo. 📍";
    document.getElementById('title').innerHTML = "Estudiante de ingeniería de sistemas";
    document.getElementById('about').innerHTML = "Con una curiosidad natural y una habilidad especial para la resolución de problemas, no sólo estoy aprendiendo los entresijos de la ingeniería de sistemas, sino que también aporto activamente mi experiencia al campo de la tecnología electrónica y mecánica. 📶";

    document.getElementById('me').innerHTML = "ACERCA DE MI";
    display_translate = 0;
  } else if (display_translate == 0) {
    document.getElementById('hi').innerText = "Hello! 👋🏽 I'm";
    document.getElementById('intro').innerHTML = "I'm an engineer systems student located in Guatemala looking for new opportunities around the world. 📍";
    document.getElementById('title').innerHTML = "Systems engineering student";
    document.getElementById('about').innerHTML = "With a natural curiosity and knack for problem solving, I am not only learning the ins and outs of systems engineering, but also actively contributing my experience to the field of electronic and mechanical technology. 📶";
    document.getElementById('me').innerHTML = "ABOUT ME";


    display_translate = 1;
  }

}


function darkMode() {
  if (display_Dark == 1) {
    body.classList.add('dark');
    icon.classList.remove('bi-moon');
    icon.classList.add('bi-sun');
    display_Dark = 0;
  } else {
    icon.classList.add('bi-moon');
    icon.classList.remove('bi-sun');
    body.classList.remove('dark');
    display_Dark = 1;
  }
}


const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);


/* Prevent buttons*/
button.addEventListener('click', (event) => {

  event.preventDefault();

});

button2.addEventListener('click', (event) => {
  event.preventDefault();
});

/* */

function showCodeSkills() {
  if (display == 1) {

    button2.classList.add('btn-light')
    codingskills.style.display = 'flex';
    softskills.style.display = 'none';
    button2.classList.remove('btn-primary');
    button.classList.remove('btn-light')
    button.classList.add('btn-primary')

  }
}

function showSoftSkills() {

  if (display == 1) {
    button.classList.add('btn-light')
    button2.classList.remove('btn-light')
    softskills.style.display = 'flex';
    codingskills.style.display = 'none';
    button2.classList.add('btn');
    button2.classList.add('btn-primary');
    button.classList.remove('btn-primary');
  }

}







function openMenu() {
  document.getElementById('menu').style.width = '200px';
}

function closeMenu() {
  document.getElementById('menu').style.width = '0';
}

// function sendEmail() {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "josarango024@gmail.com",
//     Password: "",
//     To: "josarango024@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "Contact Form",
//     Body:
//       "Name: " +
//       document.getElementById("name").value +
//       "<br> Email: " +
//       document.getElementById("email").value +
//       "<br> Subject: " +
//       document.getElementById("subject").value +
//       "<br> Message: " +
//       document.getElementById("message").value,
//   }).then((message) => alert(message));
// }
