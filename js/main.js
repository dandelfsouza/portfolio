const selectElement = function(element){
    return document.querySelector(element);
}
let menu = selectElement('.menu-toggle');
let body = selectElement('body');

menu.addEventListener('click', function(){
    body.classList.toggle('open');
});

