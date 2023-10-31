
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


