function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    let temp_val = el1.textContent
    el1.style.height = el2.style.height;
    el2.style.height = temp;

    
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}