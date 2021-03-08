const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const button = document.getElementById("button");
const error = document.querySelectorAll(".div-input > span");
const data = document.querySelectorAll(".div-input > p");
button.addEventListener("click", function (event) {
  event.preventDefault();
  enviar();
});
const enviar = () => {
  if (name.value === "") {
    error[0].style.display = "block";
    data[0].style.display = "block";
  }
  if (lastName.value === "") {
    error[1].style.display = "block";
    data[1].style.display = "block";
  }
  if (email.value === "") {
    error[2].style.display = "block";
    data[2].style.display = "block";
  }
  if (pass.value === "") {
    error[3].style.display = "block";
    data[3].style.display = "block";
  }
};
