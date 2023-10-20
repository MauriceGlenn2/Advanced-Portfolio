// templatID: template_ivhy4qi
// serviceID: service_lxp6djj
//public key: cmoJvDUK808Fy3WFe

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
    alert("The email service is temporarily unavailable. Please contact me directly at Mauriceglenn2@gmail.com")
  })


setTimeout(() =>{
}, 1000)
}

function toggleModal () {
    
}