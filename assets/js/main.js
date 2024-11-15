/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

//DROPDOWN
function dropDown(event) {
  event.preventDefault(); // Prevent the default link behavior
  const dropdownContent = event.currentTarget.nextElementSibling;
  dropdownContent.classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(e) {
  if (!e.target.matches('.nav__link')) {
      const dropdowns = document.querySelectorAll('.dropdown-content');
      dropdowns.forEach(dropdown => {
          if (dropdown.classList.contains('show')) {
              dropdown.classList.remove('show');
          }
      });
  }
});

/*==================== SHOPPING CART ====================*/

let iconCart = document.querySelector('.icon-cart');
let closeBtn = document.querySelector('.cartTab .close');
let body = document.querySelector('body');

iconCart.addEventListener('click', ()=>{
  body.classList.toggle('activeTabCart');
})

closeBtn.addEventListener('click', ()=>{
  body.classList.toggle('activeTabCart');
})

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




// POP UP FORM JS
function openForm() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("formContainer").style.display = "block";
}

function closeForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("formContainer").style.display = "none";
}


// new policy guidelines form
function openPolicyForm() {
  document.getElementById("policyFormGuide").style.display = "block";
  document.getElementById("formPolicyContainer").style.display = "block";
}

function closePolicyForm() {
  document.getElementById("policyFormGuide").style.display = "none";
  document.getElementById("formPolicyContainer").style.display = "none";
}


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})

// Function to open Google Calendar
function openGoogleCalendar() {
    // Google Calendar URL
    const calendarUrl = 'https://calendar.google.com/';
    
    // Open Google Calendar in a new tab
    window.open(calendarUrl);
  }

 
// Functions to open google drive file for each class
  function openGrade1() {
    // Grade File URL
    var grade1url = 'https://drive.google.com/file/d/1fyNlEijx2SnLzCKVi0VlGl6r1gWUr6LX/view?usp=sharing';
    
    // Open Grade File in a new tab
    window.open(grade1url);
  }
  
  function openGrade2() {
    // Grade File URL
    var grade2url = 'https://drive.google.com/file/d/10xtH4eE213NTPNVqhuY6OZZlQk4PwYlD/view?usp=sharing';
    
    // Open Grade File in a new tab
    window.open(grade2url);
  }  

  function openGrade3() {
    // Grade File URL
    var grade3url = 'https://drive.google.com/file/d/12RxN9IdWHedazQtTXyBTkYtHd_22xPH3/view?usp=sharing';
    
    // Open Grade File in a new tab
    window.open(grade3url);
  }  

  function openGrade4() {
    // Grade File URL
    var grade4url = 'https://drive.google.com/file/d/1lTHgqFQzw3fQXCDKuuWvWOtHmSRnJtqO/view?usp=sharing';
    
    // Open Grade File in a new tab
    window.open(grade4url);
  }  

  function openGrade5() {
    // Grade File URL
    var grade5url = 'https://drive.google.com/file/d/1N5qzOnSJ0-xuouj7gP1Ux_voFD--q8ci/view?usp=sharing';
    
    // Open Grade File in a new tab
    window.open(grade5url);
  }  

  function openGrade6() {
    // Grade File URL
    var grade6url = 'https://drive.google.com/file/d/1IlClUY1_zSD40VKQHP880Io7hAh2GSX3/view?usp=sharing';
    
    // Open Grade File in a new tab
    window.open(grade6url);
  }  

  function openGrade7() {
    // Grade File URL
    var grade7url = 'https://drive.google.com/file/d/1c_Q2nle35U9AD4h6nOJPhod8y3Wd7Tok/view?usp=sharing';
    
    // Open Grade File in a new tab
    window.open(grade7url);
  }  

  function openGrade8() {
    // Grade File URL
    var grade8url = 'https://drive.google.com/file/d/1_knGalJBBudvacEk450ef_Gh6RpttlMb/view?usp=sharing';
    
    // Open Grade File in a new tab
    window.open(grade8url);
  }  

  function openGrade9() {
    // Grade File URL
    var grade9url = 'https://drive.google.com/file/d/1m962J-Z__E4knpbeHln8roYoXYk01YVC/view?usp=sharing';
    
    // Open Grade File in a new tab
    window.open(grade9url);
  }  

  function openAlgebra1() {
    // Grade File URL
    var algebra1url = 'https://drive.google.com/file/d/1m3IDdT3fORfVS7iMiDamJdW_BA10zzPB/view';
    
    // Open Grade File in a new tab
    window.open(algebra1url);
  } 
  
  function openAlgebra2() {
    // Grade File URL
    var algebra2url = 'https://drive.google.com/file/d/1_Qw0-OaL_svnmWQlaWJml_GJxdrllCFX/view';
    
    // Open Grade File in a new tab
    window.open(algebra2url);
  } 


  var image = document.getElementById('logo-image');
  //var originalSrc = "/assets/img/C.Library Logo.png";
  var originalSrc = "/assets/img/yellow_CLib_Logo.png";
  var alternateSrc = "/assets/img/yellow_CLib_Logo.png";
  var isOriginal = true;
  
  function toggleImage() {
      if (isOriginal) {
          image.src = alternateSrc;
      } else {
          image.src = originalSrc;
      }
      isOriginal = !isOriginal; // Toggle the flag
  }
  
  function reset_form() {
    document.getElementById("myForm").submit(); 
    document.getElementById("myForm").reset(); 
    }
