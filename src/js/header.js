// ------------ Добавляет класс  другому тегу -----------

$(document).ready(function () {
    $(".menu__burger--menu-close").click(function () {
        $(".navigation__menu").toggleClass("navigation__menu--is-active"); return false;
    });
});


$(document).ready(function () {
    $(".menu__burger").click(function () {
        $(".navigation__menu").toggleClass("navigation__menu--is-active");
        $(".menu__burger--menu-close").toggleClass("menu__burger--menu-is-open");
        $(".buyNowButton").toggleClass("buyNowButton--is-close"); return false;
    });
});

$(document).ready(function () {
    $(".menu__burger--menu-close").click(function () {
        $(".buyNowButton").toggleClass("buyNowButton--is-close"); return false;
    });
});


// -------------  Добавляет класс  тому-же тегу
(() => {
  const menuBtnRef = document.querySelector("[data-menu]");
    const mobileMenuRef = document.querySelector("[data-menu-open]");
    // const btnReadGreen = document.querySelector("[data-menu-green]");
  
    menuBtnRef.addEventListener("click", () => {
        const expanded =
            
            menuBtnRef.classList.toggle("menu__burger--menu-is-open");
    
       
             });
        // mobileMenuRef.addEventListener("click", () => {
        //     const expanded =
              
        //         mobileMenuRef.classList.toggle("menu__burger--is-close");
        // });
    
    // btnReadGreen.addEventListener("click", () => {
    //     const expanded =
           
    //         btnReadGreen.classList.toggle("is-close-three");
    
        
    //          });
    })();