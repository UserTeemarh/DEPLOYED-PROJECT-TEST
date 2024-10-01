const linkBtn = document.querySelector('.link');
const header = document.querySelector('.header');

linkBtn.addEventListener('click', ()=> {
    header.classList.toggle('overlay')
})