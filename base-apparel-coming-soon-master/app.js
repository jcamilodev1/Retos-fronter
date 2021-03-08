const error = document.getElementById("error");
const procesar = document.getElementById("procesar");
const toggleError = () => {
  error.style.display = "block";
};
procesar.addEventListener("click", toggleError);
