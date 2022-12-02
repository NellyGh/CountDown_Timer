"use strict";



window.addEventListener('load', function() {
    let timer = new Timer('.glow-on-hover', "#timer");

});

class Timer {
    constructor(buttons,timer){
        this.allBtns = document.querySelectorAll(buttons);
        this.timerContainer = document.querySelector(timer);
        this.start = null;

        this.allBtns.forEach(btn =>{
            btn.addEventListener("click", event => {
                if(event.target.classList.contains("start")) {
                    this.start = setInterval(this.updateTimer.bind(this), 1000);
                    event.target.disabled = "ture";
                } else if(event.target.classList.contains("pause")) {
                    clearInterval(this.start);
                    btn[0].disabled = "false";
                   
                }
            });
        });
    }

    updateTimer() {
        let  future = Date.parse("jan 01, 2023 00:00:00");
        let  now = new Date();
        let  diff = future - now;
    
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor(diff / (1000 * 60 * 60));
        let mins = Math.floor(diff / (1000 * 60));
        let secs = Math.floor(diff / 1000);
    
        let d = days;
        let h = hours - days * 24;
        let m = mins - hours * 60;
        let s = secs - mins * 60;

      
    
        this.timerContainer.innerHTML =
        '<div>' + ("0" + d).slice(-2) + '<span>Days</span></div>' +
        '<div>' + ("0" + h).slice(-2) + '<span>Hours</span></div>' +
        '<div>' + ("0" + m).slice(-2) + '<span>Minutes</span></div>' +
        '<div>' + ("0" + s).slice(-2) + '<span>Seconds</span></div>';
    }
    
}


