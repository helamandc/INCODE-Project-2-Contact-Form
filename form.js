
//Display Contact details of the customer
const form = document.querySelector("#contact-form");
const contactNumber = document.querySelector("#contactNumber");
const emailAddress = document.querySelector("#emailAddress");
const lastName = document.querySelector("#lastName");
const firstName = document.querySelector("#firstName");
const userMessage = document.querySelector("#userMessage");

//MODALS
const modalBtn = document.getElementById("modal-btn")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close-btn")
const closeBtn1 = document.querySelector("#close-btn1")

//RegEx validation
const validEmail =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const validNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

function validateFields(regex, input){
  return regex.test(input.value);
}

//Disable default HTML validation for required fields
form.setAttribute("novalidate", true);

form.onsubmit = submitForm;

//Form Submission
function submitForm(event) {
  event.preventDefault();

      if (lastName.value !== '' && userMessage.value !== '' && firstName.value !== '' && validateFields(validEmail, emailAddress) && validEmail.value !== '' && (contactNumber.value == '' || validateFields(validNumber, contactNumber))) {

      //Display Modal
        modal.style.display = "block"

      closeBtn.onclick = () => {
        modal.style.display = "none"
        form.reset()
      }

      closeBtn1.onclick = () => {
        modal.style.display = "none"
        form.reset()
      }

      window.onclick = (e) => {
        if(e.target == modal) {
          modal.style.display = "none"
          form.reset()
        }
      }

      console.log(`First Name: ${firstName.value}`,'\n',`Last Name: ${lastName.value}`,'\n',`Telephone Number: ${contactNumber.value}`,'\n',`Email Address: ${emailAddress.value}`,'\n',`Message: ${userMessage.value}`);

      } else if (lastName.value == ''){
        alert("Kindly fill in your last name.")
        modal.style.display = "none"
      } else if (firstName.value == ''){
        alert("Kindly fill in your first name.")
        modal.style.display = "none"
      } else if (userMessage.value == '') {
        alert("Kindly fill in your message")
        modal.style.display = "none"
      } else if (contactNumber.value !== '' && validateFields(validNumber, contactNumber) == false) {
        alert("Kindly fill in a valid contact number.")
        modal.style.display = "none"
      } else {
        alert("Kindly fill in a valid email address.")
        modal.style.display = "none"
        }

}
