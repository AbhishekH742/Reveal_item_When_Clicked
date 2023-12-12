// Reveal Event Listener

const revealbtn =document.querySelector('.reveal-btn');

const hiddentContent = document.querySelector('.hidden-content');

function revealContent(){
    if(hiddentContent.classList.contains('reveal-btn')){
        hiddentContent.classList.remove('reveal-btn');
    }
    else{
        hiddentContent.classList.add('reveal-btn');
    }
}

document.addEventListener('click', revealContent);
// document.addEventListener('mouseover', revealContent);
