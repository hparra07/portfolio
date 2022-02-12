
/*-----------------LANG MODE------------------------*/

let check=document.querySelector('.check');

check.addEventListener('click', language);

function language(){
    let id = check.checked;

    if (id == true){
        location.href="es/index.html";
    }else{
        location.href="../index.html"
    }
}

/*-------------LIGHT MODE---------------------------*/

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () =>{
    document.body.classList.toggle('light');
})

/*-----------------------MODAL----------------------*/

if(document.getElementById("btnModal")){
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("btnModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}

/*------------------MENU FIXED TOP------------------*/

menuPosition();
 
$(window).scroll(function() {    
    menuPosition();
});
 
function menuPosition() {
    var height_header = $('.header').outerHeight(true);
    var height_menu = $('.menu').outerHeight(true);
 
    if ($(window).scrollTop() >= height_header){
        $('.menu').addClass('fixed');
        $('.wrapper').css('margin-top', (height_menu) + 'px');
    } else {
        $('.menu').removeClass('fixed');
        $('.wrapper').css('margin-top', '0');
    }
}
