const canvas = document.querySelector(".canvas")

const newArray = document.querySelector("#new")
const sort = document.querySelector("#sort")







newArray.addEventListener('click', () => {
    canvas.innerHTML = ""

    for (let i = 0; i < 100; i++) {
        let n = Math.floor(Math.random() * 60) + 1;
        let div = document.createElement('div')
        div.setAttribute('class', 'bar')
        div.setAttribute('id', `bar${i}`)
        div.setAttribute('style', `height: ${n*10}px`)
        canvas.appendChild(div)
    }
    
})



sort.addEventListener('click', async function(){
     bubble();
});