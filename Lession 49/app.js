let stopBtn = document.querySelector("#stop");
let startBtn = document.querySelector("#start");

startBtn.addEventListener("click", ()=>{


    let counter  = 0;
    let min_counter = 1;
    let hrs_counter = 1;

        let sec = document.querySelector("#sec");

        setInterval(function counterHandelar() {
            sec.innerText = counter;
            counter++

            
        if(counter > 120) {
            let min = document.querySelector("#min");

            min.innerText = min_counter + ":";
            min_counter++
            counter  = 0


            if(min_counter > 59) {
                    let hrs  = document.querySelector("#hrs");
                    hrs.innerText = hrs_counter + ":";
                    min_counter = 0
                    counter = 0
                    hrs_counter++
                    
            }
        }

        },10)
        return counterHandelar() 

})



stopBtn.addEventListener("click", ()=>{
    console(counterHandelar())
})
