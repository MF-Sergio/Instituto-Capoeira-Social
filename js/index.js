///////////////////////////////////// MENU HAMBURGER /////////////////////////////////////
const btnMobile = document.getElementById('btn_mobile');
const nav = document.getElementById('nav');

btnMobile.addEventListener('click', () => {
    nav.classList.toggle('active');
});


///////////////////////////////////// DROPDOWNS /////////////////////////////////////
const linkDropdown1 = document.querySelector('#link_dropdown');
const ulDropdown1 = document.querySelector('.ul_dropdown');
const linkDropdown2 = document.querySelector('#link_dropdown2');
const ulDropdown2 = document.querySelector('.ul_dropdown2');

const toggleDropdown = (showEl, hideEl) => {
    showEl.classList.add('block');
    hideEl.classList.remove('block');
};

const hideBothDropdowns = () => {
    ulDropdown1.classList.remove('block');
    ulDropdown2.classList.remove('block');
};

[linkDropdown1, ulDropdown1].forEach(el => {
    el.addEventListener('mouseover', () => toggleDropdown(ulDropdown1, ulDropdown2));
    el.addEventListener('mouseout', hideBothDropdowns);
});

[linkDropdown2, ulDropdown2].forEach(el => {
    el.addEventListener('mouseover', () => toggleDropdown(ulDropdown2, ulDropdown1));
    el.addEventListener('mouseout', hideBothDropdowns);
});


///////////////////////////////////// SETA DROPDOWN /////////////////////////////////////
const setaDropdown = document.querySelector('#icone_dropdown');
const setaDropdown2 = document.querySelector('#icone_dropdown2');

function toggleSetaDropdown() {
    setaDropdown.classList.toggle('bi-caret-up-fill');
    // setaDropdown2.classList.toggle('bi-caret-up-fill'); // Adicione se necessário
}


////////////////////////// MENU HAMBURGER ÍCONE X //////////////////////////
function changeIcon(icon) {
    icon.classList.toggle('bi-x-lg');
}


///////////////////////////////////// SCROLL ANIMAÇÃO (data-anime) /////////////////////////////////////
const itemsAnime = document.querySelectorAll("[data-anime]");

function animeScroll() {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    itemsAnime.forEach(el => {
        el.classList.toggle('animate', windowTop > el.offsetTop);
    });
}

window.addEventListener('scroll', animeScroll);
animeScroll(); // Chamada inicial


///////////////////////////////////// CONTADOR AO SCROLL (70) /////////////////////////////////////
const secaoNumeros = document.getElementById('video');
let cronometro;

function animeScrollNumeros() {
    const windowTop = window.pageYOffset + window.innerHeight * 0.1;
    if (windowTop > secaoNumeros.offsetTop) {
        cronometro = setInterval(() => {
            let tempo = parseInt(document.getElementById('tempo70').innerHTML);
            tempo++;
            document.getElementById('tempo70').innerHTML = tempo;
            if (tempo >= 70) pararContagem();
        }, 100);
    }
}

function pararContagem() {
    clearInterval(cronometro);
}

// Descomente se quiser ativar a contagem com o scroll
// window.addEventListener('scroll', animeScrollNumeros);
