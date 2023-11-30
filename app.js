const button=document.querySelector(".butons")
const icdisplay=document.querySelector(".display")
const bas=document.querySelector(".bas")
const youtbe=document.querySelector(".youtbe")
const fle=document.querySelector(".fle")
const google=document.querySelector(".google")
const gog=document.querySelector(".gog")
const color=document.querySelector(".color")
const renk=document.querySelector(".renk")
const play=document.querySelector(".play")
const save=document.querySelector(".save")


const butonlar=[
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1,
    0,
    "/",
    "+",
    "-",
    "*",
    ".",
    "C",
    "="
]


bas.addEventListener("click",()=>{
    if(button.style.display==="" ||  button.style.display==="block" ){
        button.style.display="none"
    }
    else{
        button.style.display="block"
    }
})

youtbe.addEventListener("click",()=>{
    if(fle.style.display==="" || fle.style.display==="block"){
        fle.style.display="none" 
    }else{
        fle.style.display="block"
    }
})

google.addEventListener("click",()=>{
    if(gog.style.display==="" || gog.style.display==="block"){
        gog.style.display="none" 
    }else{
        gog.style.display="block"
    }
})

color.addEventListener("click",()=>{
    if(renk.style.display==="" || renk.style.display==="block"){
        renk.style.display="none" 
    }else{
        renk.style.display="block"
    }

})

play.addEventListener("click",()=>{
    if(save.style.display==="" || save.style.display==="block"){
        save.style.display="none"
    }else{
        save.style.display="block"
    }
})




let tipi=[];
let tanımsız;

for(let i=0;i<butonlar.length;i++){
    let ekle=document.createElement("button")
    ekle.textContent=butonlar[i]
    button.appendChild(ekle)
}

let tumButtonlar=document.querySelectorAll(".butons")

tumButtonlar.forEach((don)=>{
    don.addEventListener("click",(e)=>{
        goster(e.target.textContent)
    })
})

const goster=(value)=>{

    if(value=="C"){
        tipi=[]
        icdisplay.textContent="0"
        return;
    }

    if(value!="="){
        tipi.push(value)
        tanımsız=tipi.join("")
        icdisplay.textContent=tanımsız
    }

    else{
        let karkater=eval(tanımsız)
        icdisplay.textContent=karkater
        tipi=[]
    }

}


