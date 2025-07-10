let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

function openmenu() {
    document.querySelector(".Navbar").style.left = "0";
}

function closemenu() {
    document.querySelector(".Navbar").style.left = "-200px";
}
