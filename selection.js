async function selection(period) {
    const bars = document.querySelectorAll(".bar");
    for (let i = 0; i < bars.length; i++) {
        let current_min = bars[i]
        for (let j = i+1; j < bars.length; j++) {
            let current_pos = bars[j]
            bars[j].style.background = 'red';
            await waitforme(period);
            if (parseInt(current_pos.style.height) < parseInt(current_min.style.height)) {
                current_min.style.background = '#00BFFF';
                current_min = current_pos
            } else {
                bars[j].style.background = '#00BFFF';
            }
        }
        await waitforme(period)
        swap(current_min, bars[i])
        current_min.style.background = '#00BFFF';
        bars[i].style.background = '#2a52be';
    }
}


