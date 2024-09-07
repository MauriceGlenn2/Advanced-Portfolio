
//Darkmode
let contrastToggle = false

function toggleContrast () {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme";
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}


//Modal Toggle
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs.sendForm(
    "service_lxp6djj",
    "template_ivhy4qi",
    event.target,
    "cmoJvDUK808Fy3WFe"
  ).then(() =>{
     loading.classList.remove("modal__overlay--visible");
     success.classList += " modal__overlay--visible";
  }).catch(() =>{
    loading.classList.remove("modal__overlay--visible");
    alert("The email service is temporarily unavailable. Please contact me directly at Mauriceglenn2nd@gmail.com")
  })


setTimeout(() =>{
}, 1000)
}

//opening and closing modal
let isModalOpen =false
function toggleModal () {
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}

//Background Shapes
const scaleFactor = 1 / 20

function moveBackground(event) {
    //queryslectorall reutrns an array
    const shapes = document.querySelectorAll('.shape')
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !==0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`

    }
}


