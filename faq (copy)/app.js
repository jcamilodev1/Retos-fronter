const flecha = document.getElementById("caja")
const cont = document.getElementById("container")
cont.addEventListener("click", e =>{
  if(e.target.parentNode.classList.contains( 'container-faqbox-title' )){
    console.log(e.target.parentNode.childNodes[1])
    let img =e.target.parentNode.childNodes[3]
    let h4 =e.target.parentNode.childNodes[1]
    let div = e.target.parentNode.parentNode.lastElementChild;
    if(div.classList.contains('block')){
      h4.classList.remove('weight')
      img.classList.remove('rotate')
      div.classList.remove('block')
    }else{
      img.classList.add('rotate')
      div.classList.add('block')
      h4.classList.add('weight')
    }
  }
})