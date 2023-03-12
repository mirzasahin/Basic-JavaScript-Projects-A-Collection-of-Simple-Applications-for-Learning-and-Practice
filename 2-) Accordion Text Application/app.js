var titles = document.querySelectorAll('h2');

titles.forEach(function(title){
    title.addEventListener('click', function(){
        var content = this.nextSibling.nextSibling;
        
    if(content.style.display === "block"){
        content.style.display = "none";
        this.classList.remove("active")

    } else{
        content.style.display = "block";
        this.classList.add("active")
    }

    })
})