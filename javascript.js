const sections = document.querySelectorAll('.section');
const controlsBtn = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const body = document.querySelectorAll('.main-content');

function Toggle(){
    // Button clicked toggles the pages
    for(let i = 0; i < controlsBtn.length; i++){
        sectionBtn[i].addEventListener('click', () =>{
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn'
        })
    }
}

Toggle();