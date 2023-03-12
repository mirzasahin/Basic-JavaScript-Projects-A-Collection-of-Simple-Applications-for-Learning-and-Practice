var i = 0;
var images = ['https://picsum.photos/id/237/400/300', 'https://picsum.photos/id/238/400/300', 'https://picsum.photos/id/239/400/300', 'https://picsum.photos/id/240/400/300'];



function slideImg(){
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    } else {
        i = 0;
    } 

    setTimeout(slideImg, 1000);
}

window.onload = slideImg();