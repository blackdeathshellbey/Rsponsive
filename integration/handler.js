let mobileMenuBtn = document.querySelector(".mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
    /* On click on the menu button, toggle the visibility state of the menu */
    let mobileMenu = document.querySelector(".top-header .content");
    mobileMenu.classList.toggle("active");
})
const btnImage = document.getElementById('button');
let toggle = true;
btnImage.addEventListener('click', function () {
    toggle = !toggle;
    if (toggle) {
        document.getElementById('button').src = "/assets/img/burger_menu_icon.png";
        document.getElementById("button").classList.toggle("show");
    } else {
        document.getElementById('button').src = "/assets/img/close_menu_icon.png";
    }
})

function menuToggle() {
    document.getElementById("menu").classList.toggle("show");


    /** Dear Sir
     * My initial Idea was to use JavaScript to detect the machine if it is desktop or mobile (regardless of the screen size (below code written for this purpose))
     * then have two different html pages to load and display however
     * since it would be different because of your teachings I decided to use the materials provided on the exercises and classes
     * Thank you for your time and considerations*/

    /* var x = document.getElementById('acc');
     if (x.style.display === "block") {
         x.style.display = "none";
     } else {
         x.style.display = "block";
     }*/
}


/*
let device = '';
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    device = "mobile";
} else {
    device = "desktop";
}

const width = screen.width;
const height = screen.height;
console.log('Device native resolution',width, height);

let currentWidth = window.innerWidth;
let currentHeight = window.innerHeight;
console.log('Device current resolution',currentWidth, currentHeight);



    let hideCridentials = document.getElementById("credentialTab");
    let hideMenu = document.getElementById('menuTab');
    let hideLeftPanel = document.getElementById('leftPanel');

    if (device === "mobile" || width <= 480 || currentWidth <= 480) {

    console.log("device is a mobile device");
    hideCridentials.style.display = "none";
    hideMenu.style.display = "none";
    hideLeftPanel.display = "none";
        let mobileMenuBtn = document.querySelector(".mobile-menu");

        mobileMenuBtn.addEventListener("click", () => {
            /!* On click on the menu button, toggle the visibility state of the menu *!/
            let mobileMenu = document.querySelector(".top-header .nav-menu");
            mobileMenu.classList.toggle("active");
        })
} else {
    console.log("device is a desktop device");
        hideCridentials.style.display = "display";
        hideMenu.style.display = "display";
        hideLeftPanel.display = "display";
    }*/
