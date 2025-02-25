let number = document.getElementById('numberRes');

function numberReset(){
    number.innerHTML = 0;
}

function numberMais(){
    let num = parseInt(number.innerHTML);
    number.innerHTML = num + 1;
}

function numberMenos(){
    let num = parseInt(number.innerHTML);
    number.innerHTML = num - 1;
}
