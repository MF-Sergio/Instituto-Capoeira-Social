/////////////////////////////////////MENU HAMBURGER DROP DOWN/////////////////////////////////
let btnMobile = document.getElementById('btn_mobile');

function toggleMenu(){
    let nav = document.getElementById('nav');
    nav.classList.toggle('active');
    
}
btnMobile.addEventListener('click', toggleMenu);





/////////////////////////////////////DROP DOWN/////////////////////////////////
let linkDropdown = document.querySelector('#link_dropdown')
let ulDropdown = document.querySelector('.ul_dropdown')

linkDropdown.addEventListener('mouseover', ()=>{
    ulDropdown.classList.add('block')
    ulDropdown2.classList.remove('block')
    // setaDropdown2.classList.toggle('bi-caret-up-fill')
})

linkDropdown.addEventListener('mouseout', ()=>{
    ulDropdown.classList.remove('block')
    ulDropdown2.classList.remove('block')
    // setaDropdown2.classList.toggle('bi-caret-up-fill') 
})

ulDropdown.addEventListener('mouseover', ()=>{
    ulDropdown.classList.add('block')
    ulDropdown2.classList.remove('block')
    // setaDropdown2.classList.toggle('bi-caret-up-fill') 
})

ulDropdown.addEventListener('mouseout', ()=>{
    ulDropdown.classList.remove('block')
    ulDropdown2.classList.remove('block')
    // setaDropdown2.classList.toggle('bi-caret-up-fill') 
})


// linkDropdown.addEventListener('click', ()=>{
//     ulDropdown.classList.toggle('block')
//     ulDropdown2.classList.remove('block')
//     // setaDropdown.classList.toggle('bi-caret-up-fill')
// })

// linkDropdown.addEventListener('blur', ()=>{
//     ulDropdown.classList.remove('block')
//     ulDropdown2.classList.remove('block')
//     // setaDropdown.classList.toggle('bi-caret-up-fill')
  
// })


/////////////////////////////////////DROP DOWN2/////////////////////////////////
let linkDropdown2 = document.querySelector('#link_dropdown2')
let ulDropdown2 = document.querySelector('.ul_dropdown2')


linkDropdown2.addEventListener('mouseover', ()=>{
    ulDropdown2.classList.add('block')
    ulDropdown.classList.remove('block')
    // setaDropdown2.classList.toggle('bi-caret-up-fill')
})

linkDropdown2.addEventListener('mouseout', ()=>{
    ulDropdown2.classList.remove('block')
    ulDropdown.classList.remove('block')
    // setaDropdown2.classList.toggle('bi-caret-up-fill') 
})

ulDropdown2.addEventListener('mouseover', ()=>{
    ulDropdown2.classList.add('block')
    ulDropdown.classList.remove('block')
    // setaDropdown2.classList.toggle('bi-caret-up-fill') 
})

ulDropdown2.addEventListener('mouseout', ()=>{
    ulDropdown2.classList.remove('block')
    ulDropdown.classList.remove('block')
    // setaDropdown2.classList.toggle('bi-caret-up-fill') 
})

// linkDropdown2.addEventListener('click', ()=>{
//     ulDropdown2.classList.toggle('block')
//     ulDropdown.classList.remove('block')
//     // setaDropdown2.classList.toggle('bi-caret-up-fill')
// })

// linkDropdown2.addEventListener('blur', ()=>{
//     ulDropdown2.classList.remove('block')
//     ulDropdown.classList.remove('block')
//     // setaDropdown2.classList.toggle('bi-caret-up-fill')
  
// })




/////////////////////////////////////SETA DROPDOWN/////////////////////////////////
let setaDropdown = document.querySelector('#icone_dropdown')
let setaDropdown2 = document.querySelector('#icone_dropdown2')

function seta (){
    setaDropdown.classList.toggle('bi-caret-up-fill')
}


/////////////////////ALTERAR MENU HAMBURGER PRARA X///////////////////////////
function changeIcon(icon){
    icon.classList.toggle('bi-x-lg')
}


//////////////////////////////////////DATA ANIME////////////////////////////////////////////////////////////
const item = document.querySelectorAll("[data-anime");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add('animate')
        } else {
            element.classList.remove('animate');
        }
    })
}
animeScroll()

window.addEventListener('scroll', () =>{
    animeScroll();
})
//////////////////////////////////////////FECHA DATA ANIME///////////////////////////////////////////////////




let secaoNumeros = document.getElementById('video');
// console.log(secaoNumeros)

//COM ESSA FUNÇÃO CONSIGO VER QUANTOS PX QUE O MEU ELEMENTO ESTÁ DO TOP DA TELA
const animeScrollNumeros = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.100;
    //console.log(windowTop)
    if (windowTop > secaoNumeros.offsetTop){
        cronometro = setInterval (function () {
             let tempo70 = document.getElementById('tempo70').innerHTML;
             var soma = parseInt(tempo70)  + 1;
             document.getElementById('tempo70').innerHTML = soma; 
             if(soma==70){   
                pararContagem();       
             } 
                                    
         },100)                               
    }     
}

// window.addEventListener('scroll', () =>{
//     animeScrollNumeros();
// })

function pararContagem(){
    clearInterval(cronometro);
}

//FECHA COM ESSA FUNÇÃO CONSIGO VER QUANTOS PX QUE O MEU ELEMENTO ESTÁ DO TOP DA TELA


// window.addEventListener('scroll', () =>{
//     animeScrollNumeros();
// })

//  setInterval(function contagem() {
//       let tempo70 = document.getElementById('tempo70').innerHTML;
//        var soma = parseInt(tempo70)  + 1;
//        document.getElementById('tempo70').innerHTML = soma;  
//  },10)








   



