const imgContainer= document.querySelector(".img-container")
const cardContainer = document.querySelector(".card-info-name")
const cardData = document.querySelector('.card-info-container-data')
const button = document.getElementById("button")

const fecthData = async () =>  {
  try {
    const data = await fetch('https://randomuser.me/api/')
    const res = await data.json()
    const persona = res.results[0]
    pintarHtml(persona)
  } catch (error) {
    console.log(error)
  }
}
const pintarHtml = (persona) =>{
  imgContainer.innerHTML = `<img src="${persona.picture.large}" alt="">`
  cardContainer.innerHTML= `<h2>${persona.name.first} ${persona.name.last} <span> ${persona.dob.age}</span></h2>
  <p>${persona.location.country}</p>`
  cardData.innerHTML =`<div class="card-info-data">
  <h2>${persona.location.street.number}K</h2>
  <p>Followers</p>
</div>
<div class="card-info-data">
  <h2>${persona.location.postcode}K</h2>
  <p>Likes</p>
</div>
<div class="card-info-data">
  <h2>${persona.registered.age}K</h2>
  <p>Photos</p>
</div>`
}
button.addEventListener("click", () =>{
  fecthData()
})

fecthData()