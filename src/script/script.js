let noFocus = document.querySelectorAll('.noFocus');
function toggleButton(el) {
  for (var i = 0, l = noFocus.length; i < l; i++) {
    let fn = noFocus[i] == el ? 'add' : 'remove';
    noFocus[i].classList[fn]('focus');
  }
}

function projectsButton1() {
    document.getElementById('projects').style.display = "flex";
    const displayNone = ['about', 'contact'].map(id => document.getElementById(id).style.display = "none");
}
function aboutButton1() {
    document.getElementById("about").style.display = "block";
    const displayNone = ['projects', 'contact'].map(id => document.getElementById(id).style.display = "none");
}
function contactButton1() {
    document.getElementById("contact").style.display = "block";
    const displayNone = ['projects', 'about'].map(id => document.getElementById(id).style.display = "none");
}

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDay();
const birthYear = 1996;
const birthMonth = 4;
const birthDay = 23;
let age = currentYear - birthYear;
function calcAge() {
    if (currentMonth >= birthMonth && currentDay >= birthDay)
    {

    } else {
        age -= 1;
    }
    document.getElementById('showAge').innerHTML = `${age}` ;
}

document.getElementById('currentYear').innerHTML = `© ${currentYear}`;

const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
let themeMode = '';

function toggleThemeMode() {
    if (moon.style.display != "none") {
        document.documentElement.style.setProperty('--body-color', '#121212');
        document.documentElement.style.setProperty('--header-color', '#000000');
        document.documentElement.style.setProperty('--h1-color', '#FFFFFF');
        document.documentElement.style.setProperty('--center-color', '#262626');
        document.documentElement.style.setProperty('--border-color', 'var(--center-color)');
        sun.style.display = "inline";
        moon.style.display = "none";
        localStorage.setItem(themeMode, 'dark');
    } else {
        document.documentElement.style.setProperty('--body-color', '#FAFAFA');
        document.documentElement.style.setProperty('--header-color', '#FFFFFF');
        document.documentElement.style.setProperty('--h1-color', '#000000');
        document.documentElement.style.setProperty('--center-color', '#EFEFEF');
        document.documentElement.style.setProperty('--border-color', '#DBDBDB');
        moon.style.display = "inline";
        sun.style.display = "none";
        localStorage.setItem(themeMode, 'light');
    }
}

function autoThemeMode() {
    if (localStorage.getItem(themeMode) === 'dark')  {
        document.documentElement.style.setProperty('--body-color', '#121212');
        document.documentElement.style.setProperty('--header-color', '#000000');
        document.documentElement.style.setProperty('--h1-color', '#FFFFFF');
        document.documentElement.style.setProperty('--center-color', '#262626');
        document.documentElement.style.setProperty('--border-color', 'var(--center-color)');
        sun.style.display = "inline";
        moon.style.display = "none";
    } else {
        document.documentElement.style.setProperty('--body-color', '#FAFAFA');
        document.documentElement.style.setProperty('--header-color', '#FFFFFF');
        document.documentElement.style.setProperty('--h1-color', '#000000');
        document.documentElement.style.setProperty('--center-color', '#EFEFEF');
        document.documentElement.style.setProperty('--border-color', '#DBDBDB');
        moon.style.display = "inline";
        sun.style.display = "none";
    }
}
$(window).on("load scroll", function(){
    $(".shows").each(function(){
        var el = $(this);
        var eleHeight = el.outerHeight(); // altura da div
        var eleTopo = el.offset().top; // distancia da div ao topo do documento
        var scrlTopo = $(window).scrollTop(); // quanto foi rolada a janela
        var distance = eleTopo-scrlTopo; // distancia da div ao topo da janela
        var altJanela = window.innerHeight; // altura da janela
        if(distance <= altJanela-(eleHeight/1.5)) {
            el.animate({ 'opacity': 1 }, 400);
        }
    });
});