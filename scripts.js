const colors = ["#588C73", "#F2E394", "#F2AE72", "#D96459", "#8C4646", "#8c5846"];
$(document).ready(()=>{
    const $pads = $(".pads").children();
    for(let i = 0; i < $pads.length; i++) {
        // paint audio-block with help of JS
        $pads[i].style.background = colors[i];
    }
    $(".pads-item").click((event)=>{
        let sound = $(event.currentTarget).children()[0];
        sound.currentTime = 0;
        sound.play();
        changeSize(event.currentTarget);
    });
    // Animation function that changes object's size
    const changeSize = (object) =>{
        object.style.animation = "sizing 0.35s ease";
        object.addEventListener("animationend", () => {
            object.style.animation = "";
        })
    }

});
