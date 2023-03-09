async function selection() {
    const bars = document.querySelectorAll(".bar");
    for (let i = 0; i < bars.length; i++) {
        let min_index = i
        for (let j = i+1; j < bars.length; j++) {
            if (parseInt(bars[j].style.height) < parseInt(bars[min_index].style.height)) {
                min_index = j
            }
        let temp = bars[i].style.height
        bars[i].style.height = bars[min_index].style.height
        bars[min_index].style.height = temp
        }
    }
    console.log(bars)
}