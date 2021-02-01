var slides = document.getElementsByClassName("Slide");

var stopButtons = document.getElementsByClassName("stop");

var nIndex = [];
var t;

showSlides();
initial();

function initial() 
{
    var len = slides.length - 2;
    for(var i = 0; i < len; i++)
    {
        nIndex.push(i);
    }
}

function showSlides() 
{
    for(var i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
        
        stopButtons[i].addEventListener("click", stopSlides);
    }

    var l = slides.length;
    var n = Math.floor(Math.random() * slides.length);
    
    nIndex.push(n);
    if(nIndex.length > l)
    {
        nIndex.splice(0,1);
    }
    
    var c = nIndex[l-1];
    
    if(c == nIndex[l-2])
    {
        var newC = Math.floor(Math.random() * slides.length);
        c = newC;
    } 
    
    /*console.log(nIndex);
    console.log(c);*/
    
    slides[c].style.display = "block";
    slides[c].style.animation = "fade 1.5s";
    
    t = setTimeout(showSlides, 3000);
}

function stopSlides()
{
    clearTimeout(t);
    console.log('stopped');
}

















