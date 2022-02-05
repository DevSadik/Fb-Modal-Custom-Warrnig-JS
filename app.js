// get elements

const apply_btn = document.getElementById('apply');
const editing = document.getElementById('editing');
const discard = document.getElementById('discard');
const save = document.getElementById('modal-save');
const modal = document.querySelector('.clone-modal')
const alertpop = document.querySelector('.alert-modal')
const close = document.querySelector('.close')
const alert_close = document.querySelector('.alert-close')


apply_btn.addEventListener('click', function (e) {

    e.preventDefault();
   modal.classList.add('active');
   
});
save.addEventListener('click', function (e) {

    e.preventDefault();
   modal.classList.remove('active');
   
});
editing.addEventListener('click', function (e) {

    e.preventDefault();

   modal.classList.add('active');
   alertpop.classList.remove('active')
    
});
discard.addEventListener('click', function (e) {

    e.preventDefault();

   modal.classList.remove('active');
   alertpop.classList.remove('active')
    
});
close.addEventListener('click', function (e) {

    e.preventDefault();
    alertpop.classList.add('active')
    
});
modal.addEventListener('click', function (e) {

    if( e.target == this){
        modal.classList.remove('active')
    }
    
});
alert_close.addEventListener('click', function (e) {

    e.preventDefault();

    modal.classList.add('active');
    alertpop.classList.remove('active')
    
});