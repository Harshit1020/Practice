let content = document.querySelector("#starts")
let star = document.querySelectorAll(".star")
let flg = 0;
content.addEventListener("click" , function(e){
    let clickEvent = e.target.dataset.index;
    console.log(clickEvent)

    for(let i = 0; i<flg; i++){
    
        star[i].classList.remove("gold")

    }
    for(let i = 0; i<clickEvent; i++){
    
        star[i].classList.add("gold")

    }

    flg = clickEvent;
})

// mouseover

content.addEventListener("mouseover" , function(e){
    let clickEvent = e.target.dataset.index;
    console.log(clickEvent)

    for(let i = 0; i<5; i++){
    
        star[i].classList.remove("gold")

    }
    for(let i = 0; i<clickEvent; i++){
    
        star[i].classList.add("gold")

    }
})


// mouse leave

content.addEventListener("mouseleave" , function(e){
    for(let i = 0; i<5; i++){
    
        star[i].classList.remove("gold")

    }
    for(let i = 0; i<flg; i++){
    
        star[i].classList.add("gold")

    }
})
