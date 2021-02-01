
var topButton = document.getElementsByClassName("toTop");

window.addEventListener("scroll", scrollToTop);

function scrollToTop()
{ 
    for(var i = 0; i < topButton.length; i++)
    {
        topButton[i].addEventListener("click", goToTop);
        
        if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700)
        {
            topButton[i].style.display = "block";
            topButton[i].style.animation = "fade 1.3s";
        } else 
        {
            topButton[i].style.display = "none";
            topButton[i].style.animation = "fade 1.3s";
        }
    }
}

function goToTop()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}














