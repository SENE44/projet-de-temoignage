let monobjet=[{
    nom:'Issa Nidiaye',
    proffession:'Developpeur',
    id:1,
    photo:'./1.PNG',
    textes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora aspernatur fugit! Quisquam debitis fugit provident reiciendis molestiae vero, dolor ipsum excepturi esse rerum consequuntur, eveniet delectus doloremque sapiente iure!'
 },{
    nom:'Moussa Seck',
    proffession:'Data Analyst',
    id:2,
    photo:'./2.PNG',
    textes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora aspernatur fugit! Quisquam debitis fugit provident reiciendis molestiae vero, dolor ipsum excepturi esse rerum consequuntur, eveniet delectus dolore'
},{
    nom:'Modou Sene',
    proffession:'Disigner',
    id:3,
    photo:'./3.PNG',
    textes:'Lorem ipsum doloradipisicing elit. Esse tempora aspernatur fugit! Quisquam debitis fugit provident reiciendis molestiae vero, dolor ipsum excepturi esse rerum consequuntur, eveniet delectus dolore'
},{
    nom:'Malick Nidiaye',
    proffession:'Developpeur',
    id:4,
    photo:'./4.jpg',
    textes:'Lorem ipsum dolor sit amet  adipisicing elit. Esse tempora aspernatur fugit! Quisquam debitis fugit provident reiciendis molestiae vero, dolor ipsum excepturi esse rerum consequuntur, eveniet delectus dolore'
},{
    nom:'Pape Diop',
    proffession:'Photographe',
    id:5,
    photo:'./5.PNG',
    textes:' ipsum dolor sit amet consectetur adipisicing elit. Esse tempora aspernatur fugit! Quisquam debitis fugit provident reiciendis molestiae vero, dolor ipsum excepturi esse rerum consequuntur, eveniet delectus dolore'
}
]

let image=document.getElementById('tof')
let textes=document.getElementById('textes')
let nom=document.getElementById('name')
let proffession=document.getElementById('prof')


let chevrong=document.getElementById('fag')
let chevronr=document.getElementById('far')
let lebouton=document.getElementById('btn')

 let i=0
window.addEventListener('DOMContentLoaded',function afficher(){

})
function afficher(){
    let items=monobjet[i]
    nom.textContent=items.nom
    proffession.textContent=items.proffession
    image.src=items.photo
    textes.textContent=items.textes
}

chevronr.addEventListener('click', ()=>{
    i++
    if(i>monobjet.length-1){
        i=0
    }
    afficher()
})
chevrong.addEventListener('click', ()=>{
    i--
    if(i<0){
        i=monobjet.length-1
    }
    afficher()
})

lebouton.addEventListener('click', ()=>{
   i=Math.floor(Math.random()*3)
    afficher()
})
