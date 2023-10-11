window.addEventListener("scroll", function(){
    let header = document.querySelector(".navegacao")
    header.classList.toggle("rolagem", this.window.scrollY > 300)
})