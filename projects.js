function toggleDetail(projectId) {
    var element=document.getElementById(projectId);
    element.classList.toggle('hid');
}
const x=document.querySelector('.btn-b');
const y=document.querySelector('.nav-items2');
x.addEventListener('click',function(){
    x.classList.toggle('isactive');
    y.classList.toggle('isactive');
});