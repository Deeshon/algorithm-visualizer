const canvas = document.querySelector(".canvas")
const bars = document.querySelectorAll(".bar")
const newArray = document.querySelector("#new")
const sort = document.querySelector("#sort")

let count = 0
let array = []

while (count < 30) {
    let n = Math.floor(Math.random() * 60) + 1;
    array.push(n*10)
    count+=1
}


newArray.addEventListener('click', () => {
    bars.forEach((bar) => {
        let n = Math.floor(Math.random() * 60) + 1;
        const bbar = document.getElementById(`${bar.id}`)
        bbar.style.height = `${n*10}px`

    
    })
    
})

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

async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = '#2a52be';
            ele[j+1].style.background = '#2a52be';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(50);
                swap(ele[j], ele[j+1]);

            }
            ele[j].style.background = '#00BFFF';
            ele[j+1].style.background = '#00BFFF';
        }
        ele[ele.length-1-i].style.background = '#5F9EA0';
    }
    ele[0].style.background = '#5F9EA0';
}


sort.addEventListener('click', async function(){
     bubble();
});