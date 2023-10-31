
const etudiants = [
    {
        name : "pierre",
        age : 19,
        platPrefere : "pizza",
        booleenPrefere : true
    },
    {
        name : "Mei",
        age : 17,
        platPrefere : "boeuf bourguignon",
        booleenPrefere : false
    },
    {
        name : "Natan",
        age : 19,
        platPrefere : "pates à la bolognaise",
        booleenPrefere : false
    }
]

const divEtudiants = document.querySelector('.etudiants')

function makeCardFromStudent(student)
{

    let cardTemplate = `
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${student.name}</h5>
    <p class="card-text">Age : ${student.age}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`

    return cardTemplate

}

etudiants.forEach((etudiant)=>{
    divEtudiants.innerHTML += makeCardFromStudent(etudiant)
})
const h3Blague = document.querySelector('.blague')
//promise
fetch("https://api.chucknorris.io/jokes/random")

    .then(laReponseEnJson=>laReponseEnJson.json())

    .then((laReponseDeserialisee)=>{
        console.log(laReponseDeserialisee.value)
        h3Blague.innerHTML = laReponseDeserialisee.value
    })


async function renvoieCoucou()
{
    let coucou = "coucou"
    return coucou
}

let resultat

renvoieCoucou().then(
    ceQueMeRenvoieCoucou =>{
        console.log(ceQueMeRenvoieCoucou)
        resultat = ceQueMeRenvoieCoucou
    }
)

const boutonChuck = document.querySelector('.boutonChuck')
const texteBlague = document.querySelector('.chuck')

async function vaChercherUneBlagueSurChuckNorris()
{
   return await fetch("https://api.chucknorris.io/jokes/random")
        .then(response=>response.json())
        .then(data=>{
            return data
        })
}

boutonChuck.addEventListener("click",()=>{
    vaChercherUneBlagueSurChuckNorris().then(data=> {
        console.log(data.value)
        let template = `<h3>${data.value}</h3>`
        texteBlague.innerHTML += template;
    })
})