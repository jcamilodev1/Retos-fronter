const prev = document.getElementById("prev");
const next = document.getElementById("next");
const containertext = document.querySelector(".container__card-txt");
const containerimg = document.querySelector(".container__img-profile");
var contador = 1;
prev.addEventListener("click", () => {
  contador--;
  console.log("click");
  pasar(contador);
});
next.addEventListener("click", () => {
  contador++;
  console.log("click");
  pasar(contador);
});
const pasar = (contador) => {
  if (contador >= 0) {
    contador--;
    console.log(contador);
    switch (contador) {
      case 0:
        containerimg.innerHTML = `<img src="./images/image-tanya.jpg" alt="perfil">`;
        containertext.innerHTML = `      <div class="container__txt-descript">
        <p>
          “ I’ve been interested in coding for a while but never taken the jump, until now. 
          I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
          excited about the future. ”
        </p>
      </div>
      <div class="container__txt-profile">
        <p>
          Tanya Sinclair
        </p>
        <p>
          UX Engineer
        </p>
      </div>`;
        break;
      case 1:
        containerimg.innerHTML = `<img src="./images/image-john.jpg" alt="perfil">`;
        containertext.innerHTML = `<div class="container__txt-descript">
        <p>
        “ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”
        </p>
      </div>
      <div class="container__txt-profile">
        <p>
          John Tarkpor
        </p>
        <p>
          Junior Front-end Developer
        </p>
      </div>`;
        break;
      case 2:
        break;
      default:
        break;
    }
  }
  return;
};
