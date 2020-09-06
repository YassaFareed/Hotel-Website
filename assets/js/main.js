
var slides = document.querySelector(".img-items").children;
var nextslide = document.querySelector(".rightslide");
var prevslide = document.querySelector(".leftslide");

var totalslide = slides.length;
var index = 0;

nextslide.onclick = function(){
   
    changeSlide("next");
}

prevslide.onclick = function(){
    changeSlide("next");
}


function changeSlide (direction){
    if(direction === "next")
    {
        console.log("HELLO");
        index++;
        if(index==totalslide)
        {
            index = 0;
        }
    }else
    {
        if(index == 0)
        {
            index = totalslide - 1;
        }else
        {
            index--;
        }
    }



    for(i = 0 ; i <slides.length ; i++)
        {
            slides[i].classList.remove("active");
        }
        slides[index].classList.add("active");
}
