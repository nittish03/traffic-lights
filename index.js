const lights = {
        red: document.getElementById("re"),
        yellow: document.getElementById("ye"),
        green: document.getElementById("gr")
    };
    const startBtn = document.getElementById("start");
    const endBtn = document.getElementById("end");
    const container = document.getElementById("container");
    
    const resetBtn = document.createElement("button");
    resetBtn.setAttribute("id", "reset");
    resetBtn.classList.add("btn");
    resetBtn.innerText = "RESET";
    
    function animateLight(light, delay, duration) {
        setTimeout(() => {
            light.style.animation = `lightUp ${duration}s forwards ease-in-out `;
            light.style.backgroundColor = light.classList[1];
        }, delay * 1000);
    }
    
    function resetLights() {
        for (let light in lights) {
            lights[light].style.animation = "";
            lights[light].style.backgroundColor = "";
        }
    }
    
    // Swapped functionality: This was previously endBtn.onclick
    startBtn.onclick = () => {
        resetLights();
        animateLight(lights.green, 1, 2);
        animateLight(lights.yellow, 3, 2);
        setTimeout(()=>{
            console.log("green");
            lights.green.style.animation = "";
            lights.yellow.style.animation = "";
            lights.green.style.backgroundColor = "";
            lights.yellow.style.backgroundColor = "";
        },5000)
        animateLight(lights.red, 4.1, 2);

        container.after(resetBtn);
        startBtn.remove();
        endBtn.remove();
    };
    
    // Swapped functionality: This was previously startBtn.onclick
    endBtn.onclick = () => {
        resetLights();
        animateLight(lights.red, 1, 2);
        animateLight(lights.yellow, 3, 2);
        setTimeout(()=>{
            console.log("green");
            lights.red.style.animation = "";
            lights.yellow.style.animation = "";
            lights.red.style.backgroundColor = "";
            lights.yellow.style.backgroundColor = "";
        },5000)
        animateLight(lights.green, 5, 4.1);
        container.after(resetBtn);
        startBtn.remove();
        endBtn.remove();
    };
    
    resetBtn.onclick = () => {
        location.reload();
    };