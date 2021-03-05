const imgContainer= document.querySelector(".img-container")
const cardContainer = document.querySelector(".card-info-name")
const cardData = document.querySelector('.card-info-container-data')
const button = document.getElementById("button")

const fecthData = async () =>  {
  const set = randomNumber()
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${set}`)
    const res = await data.json()
    const pokemon = res.results[0]
    //nombre y stats
    const dataPoke = await fetch(pokemon.url)
    const resPoke = await dataPoke.json()
    //imagen
    const imagen = await fetch(resPoke.forms[0].url)
    const dataImagen = await imagen.json()
    const imagenPoke = dataImagen.sprites.front_default
    pintarHtml(resPoke,imagenPoke)
  } catch (error) {
    console.log(error)
  }
}
const pintarHtml = (pokemon, imagen) =>{

  imgContainer.innerHTML = `<img src="${imagen}" alt="">`
  cardContainer.innerHTML= `<h2>${pokemon.forms[0].name}  <span> ${pokemon.stats[0].base_stat}Hp</span></h2>
  <p>${pokemon.base_experience}Xp</p>`
  cardData.innerHTML =`<div class="card-info-data">
  <h2>${pokemon.stats[1].base_stat}K</h2>
  <p>${pokemon.stats[1].stat.name}</p>
</div>
<div class="card-info-data">
  <h2>${pokemon.stats[2].base_stat}K</h2>
  <p>${pokemon.stats[2].stat.name}</p>
</div>
<div class="card-info-data">
  <h2>${pokemon.stats[3].base_stat}K</h2>
  <p>${pokemon.stats[3].stat.name}</p>
</div>` 
}
button.addEventListener("click", () =>{
  fecthData()
})
const randomNumber = () => {
  return Math.ceil(Math.random() * 1000 );
}
fecthData()