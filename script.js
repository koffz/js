
//ВАРІАНТ 8 (Tooltip)  Компонент повинет створюватися за допомогою функції з двома параметрами: ID контейнера, об'єкт з параметрами відображення компонента (колір, відступи, форма і т.і.).

let objStyle = {  //об'єкт з параметрами компоненту
    'background': 'rgb(208, 192, 252)',
    'position': 'relative',
    'border': '3px solid rgb(78, 75, 75)',
    'width': '900px',
    'height': '700px',
    'left': '600px',
    'top': '100px',
    'borderRadius': '20px',
    'transition': 'all ease 1s',
    'fontFamily': 'Sans Serif',
    'marginTop': '100px',
    'marginLeft': '600px',
    'marginBottom': '100px'
}


let container = document.querySelector('#container'); //Отримуємо контейнер
let description = document.querySelector('.description');
let pointer = document.querySelector('.pointer');
let tool = document.querySelector('.tool');



tool.onmouseenter = function () {
    description.style.display = 'inline-block';
    pointer.style.display = 'inline-block';
}
tool.onmouseleave = function () {
    description.style.display = 'none';
    pointer.style.display = 'none';
}


function toolTip(id, obj) {   //функція яка приймає два параметри(ID контейнеру,об'єкт з параметрами)
    id.style.background = obj.background;
    id.style.border = obj.border;
    id.style.position = obj.position;
    id.style.width = obj.width;
    id.style.height = obj.height;
    id.style.left = obj.left;
    id.style.top = obj.top;
    id.style.borderRadius = obj.borderRadius;
    id.style.fontFamily = obj.fontFamily;
}

toolTip(container, objStyle)

// ---------------------jquery----------------

$(document).ready(function () {
    $('#container-jq').css('background', objStyle.background);
    $('#container-jq').css('posintion', objStyle.position);
    $('#container-jq').css('border', objStyle.border);
    $('#container-jq').css('width', objStyle.width);
    $('#container-jq').css('height', objStyle.height);
    $('#container-jq').css('marginTop', objStyle.marginTop);
    $('#container-jq').css('marginLeft', objStyle.marginLeft);
    $('#container-jq').css('marginBottom', objStyle.marginBottom);
    $('#container-jq').css('borderRadius', objStyle.borderRadius);

    $('.tool-jq').mouseenter(function () {
        $('.description-jq').css('display', 'inline-block');
        $('.pointer-jq').css('display', 'inline-block');
        // console.log('work');
    });
    $('.tool-jq').mouseleave(function () {
        $('.description-jq').css('display', 'none');
        $('.pointer-jq').css('display', 'none');
        // console.log('work');
    });

});






