// Conditional WhatsApp
const whatsapp = document.getElementById('whatsapp');
const pesan = "Haloo!, Apakah betul ini dengan ariya ?";
const number = +6281572240336;
const encoded = encodeURIComponent(pesan);

whatsapp.href = `https://wa.me/${number}?text=${encoded}`;




// Navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener ('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
}
)