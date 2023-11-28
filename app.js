const button=document.querySelector(".butons")
const icdisplay=document.querySelector(".display")

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
    let topla=eval(tanımsız)
    icdisplay.textContent=topla
    tipi=[]
   }
}
