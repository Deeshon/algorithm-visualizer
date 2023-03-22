async function bubble(period) {
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        for(let j = 0; j < ele.length-i-1; j++){
            ele[j].style.background = '#2a52be';
            ele[j+1].style.background = '#2a52be';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await waitforme(period);
                swap(ele[j], ele[j+1]);

            }
            ele[j].style.background = '#00BFFF';
            ele[j+1].style.background = '#00BFFF';
        }
        ele[ele.length-1-i].style.background = '#5F9EA0';
    }
    ele[0].style.background = '#5F9EA0';
}