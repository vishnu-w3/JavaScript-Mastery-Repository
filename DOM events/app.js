let para=document.querySelector('p')  //basic

function changepara() {
    para.textContent='clicked'
}

para.addEventListener('click',changepara)

let inputElement = document.querySelector('input')   //simple task

function retriveInput () {
    let text = inputElement.value
    console.log(text)
}

inputElement.addEventListener('input',retriveInput)