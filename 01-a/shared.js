const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const choosePlanButtons = document.querySelectorAll('.plan button');
const noButton =  document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});


// console.log(backdrop);
// backdrop.style.display = 'block';

for(let i=0; i<choosePlanButtons.length; i++){
    choosePlanButtons[i].addEventListener('click',()=>{
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click',function(){
    mobileNav.classList.remove('open');
    closeModal();
});
noButton.addEventListener('click', closeModal);


function closeModal(){
    backdrop.classList.remove('open');
    modal.classList.remove('open');
}


// function a(){
//     var bc = 20;
//     return function b(){
//         console.log(bc);
//         bc++;
//     };
// }

// var bc=21;
// let c=a();
// setTimeout(()=>{
//     console.log('yo');
// }, 0);
// c();
// c();

class Mubeen{
    momo = 'yes';
    constructor(){
        choosePlanButtons[0].addEventListener('click', this.addLog);
    }

    addLog(){
        console.log(this);
    }
}

let mubeen = new Mubeen();