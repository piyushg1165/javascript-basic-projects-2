var rect = document.querySelector('.rectangle');

rect.addEventListener("mousemove" , function(details){
    var rectangleLocation = rect.getBoundingClientRect();
    var insideRectangle = details.clientX - rectangleLocation.left;

    if(insideRectangle < (rectangleLocation.width) / 2)
    {
        var redcolor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideRectangle);
        gsap.to( rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`
        })
    }else{
        var bluecolor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insideRectangle);
        gsap.to( rect, {
            backgroundColor: `rgb(0, 0, ${bluecolor})`
        })
    }



});

rect.addEventListener("mouseleave" , function(){
    gsap.to(rect, {
        backgroundColor: 'white'
    })
});