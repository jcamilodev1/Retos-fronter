const share = document.getElementById("share");
const cardShare = document.getElementById("card-share");
const shareMostrar = document.getElementById("shareMostrar");
share.addEventListener("click", () => {
  cardShare.style.display = "none";
});
shareMostrar.addEventListener("click", () => {
  cardShare.style.display = "flex";
});
