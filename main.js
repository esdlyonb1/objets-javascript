
const etudiants = [
    {
        name : "pierre",
        age : 19,
        platPrefere : "pizza",
        booleenPrefere : true,
        github:"Pierrot69280",
        avatar: "avatar.png"
    },
    {
        name : "Mei",
        age : 17,
        platPrefere : "boeuf bourguignon",
        booleenPrefere : false,
        avatar: "avatar.png",
        github:"MeyDetour"
    },
    {
        name : "Natan",
        age : 19,
        platPrefere : "pates à la bolognaise",
        booleenPrefere : false,
        avatar: "avatar.png",
        github: "natanbinisti"
    }
]

const divEtudiants = document.querySelector('.etudiants')

function makeCardFromStudent(student)
{

    let cardTemplate = `
<div class="card" style="width: 18rem;">
  <img src="${student.avatar}" class="card-img-top" alt="...">
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

    replaceAvatar(etudiant).then(etudiant=>{
        divEtudiants.innerHTML += makeCardFromStudent(etudiant)
    })

})

async function replaceAvatar(etudiant){
    let pseudo = etudiant.github
    let url = `https://api.github.com/users/${pseudo}`
  return await  fetch(url)
        .then(response=>response.json())
        .then(profilGithub=>{
            etudiant.avatar = profilGithub.avatar_url
            return etudiant
        })
}



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

fetch("https://api.github.com/users/natanbinisti")
.then(response=>response.json())
.then(data=>{
    document.querySelector('.natan').src = data.avatar_url
})

const divButtons = document.querySelector('.boutonsCategories')

fetch("https://api.chucknorris.io/jokes/categories")
.then(response=>response.json())
.then(data=> {

    data.forEach((category)=>{
        console.log(category)
        let templateButton = `
        <button class="btn btn-primary boutonCategorie" id="${category}">${category}</button>
        `

        divButtons.innerHTML += templateButton



    })

   let boutons = document.querySelectorAll('.boutonCategorie')

    boutons.forEach((bouton)=>{

        bouton.addEventListener("click", ()=>{

            fetch(`https://api.chucknorris.io/jokes/random?category=${bouton.id}`)
                .then(response=>response.json())
                .then(data =>{
                    let template = `<h3>${data.value}</h3>`
                    texteBlague.innerHTML += template;
                })

        })

    })

})

console.log('---------------------')

fetch("https://api.chucknorris.io/jokes/random?category=animal")
.then(response=>response.json())
.then(data=>console.log(data.value))