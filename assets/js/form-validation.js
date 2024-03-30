
const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

function changeStuff(){

  document.getElementById("phonelabel").style.fontSize = '0.7rem';
  document.getElementById("phonelabel").style.color = '#ce6e0e';
  document.getElementById("phonelabel").style.fontWeight = '700';
  
}

function changeStuff2(){
  
  document.getElementById("phonelabel").style.color = '#fff';
  document.getElementById("phonelabel").style.fontSize = '1rem';
  document.getElementById("phonelabel").style.fontWeight = '400';

}
document.getElementById("phone").addEventListener("focus", changeStuff); 
document.getElementById("phone").addEventListener("focusout", changeStuff2); 
