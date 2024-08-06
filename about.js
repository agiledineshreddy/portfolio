// Example JavaScript for possible future expansion
document.addEventListener('DOMContentLoaded', function() {
    // Code to run when the document is ready
});
const x=document.querySelector('.btn-b');
const y=document.querySelector('.nav-items2');
x.addEventListener('click',function(){
    x.classList.toggle('isactive');
    y.classList.toggle('isactive');
});