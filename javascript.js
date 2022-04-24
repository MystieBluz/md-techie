const sectionsEl = document.querySelectorAll('.section');
const controlsBtnEl = document.querySelectorAll('.controls');
const controlBtnEl = document.querySelectorAll('.control');
const mainEl = document.querySelectorAll('.main-content');


function Toggle() {

    for(let i = 0; i < controlBtnEl.length; i++) {
        controlBtnEl[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
  

    // Active Sections - 'for' function was not provided in YouTube tutorial -- used Google to solve issue
    for(let i = 0; i < mainEl.length; i++)
    mainEl[i].addEventListener('click', function(e){
        const id = e.target.dataset.id;
        if(id){
            // remove selected from other buttons
            controlsBtnEl.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // Hide other sections
            sectionsEl.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id)
            element.classList.add('active')

        }
    });     
    
    // Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', function(e){
        let element = document.body;
        element.classList.toggle('light-mode')
    })
    
}  

    Toggle()
   
   


