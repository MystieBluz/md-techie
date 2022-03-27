const sectionsEl = document.querySelectorAll('.section');
const controlsBtnEl = document.querySelectorAll('.controls');
const controlBtnEl = document.querySelectorAll('.control');
const bodyEl = document.querySelectorAll('.main-content');

function Toggle() {

    for(let i = 0; i < controlBtnEl.length; i++) {
        controlBtnEl[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}
  
   
Toggle();