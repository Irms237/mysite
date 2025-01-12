document.addEventListener("DOMContentLoaded", function(i) {
    const items = document.querySelectorAll(".item-s");
    const imeg = document.querySelector(".imeg");
    
    const url = [
      "img/panel/spaceidn1.png",
      "img/panel/spaceidn3.png",
      "img/panel/spaceidn2.png",
    ]
    
    items.forEach((button, i) => {
      button.addEventListener("click", (e) => {
        if(i < url.length) {
          imeg.src = url[i]
        }
      })
    })
  })