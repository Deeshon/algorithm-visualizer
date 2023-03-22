const canvas = document.querySelector(".canvas")

const newArray = document.querySelector("#new")
const sort = document.querySelector("#sort")


newArray.addEventListener('click', () => {
    const range = document.querySelector("#range").value
    const size = document.querySelector("#size").value
    let width = ((60 - size) / 2) + 20
    canvas.innerHTML = "" 

    for (let i = 0; i < size; i++) {
        let n = Math.floor(Math.random() * range) + 1;
        let div = document.createElement('div')
        div.setAttribute('class', 'bar')
        div.setAttribute('id', `bar${i}`)
        div.setAttribute('style', `height: ${n*10}px; width: ${width}px`)
        canvas.appendChild(div)
    }
    
})



sort.addEventListener('click', async function(){
    const period = document.querySelector("#speed").value
    const option = document.querySelector("#option")
    if (option.value == "bubble") {
        console.log("yes bubble")
        bubble(period)
    } else if (option.value == "selection") {
        console.log("yes selection")
        selection(period);
    }

});