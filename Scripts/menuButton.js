
var menuB = document.getElementsByClassName("menuIcon");
var menuOpts = document.getElementsByClassName("iconOpts");
var genresB = document.getElementsByClassName("dropDown");
var genresOpts = document.getElementsByClassName("dropContent");

window.addEventListener("resize", hideMenu);


for(var i = 0; i < menuB.length; i++)
{
    menuB[i].addEventListener("click", showMenu);
}

for(var i = 0; i < genresB.length; i++)
{
    genresB[i].addEventListener("click", showGenres);
}

function showMenu() 
{
    for(var i = 0; i < menuOpts.length; i++)
    {
        if(menuOpts[i].style.display === "none")
        {
            menuOpts[i].style.display = "block";
        } else 
        {
            menuOpts[i].style.display = "none";
        }
    }
}

function hideMenu()
{
    if(window.innerWidth > 768)
    {
        for(var i = 0; i < menuOpts.length; i++)
        {
            menuOpts[i].style.display = "none";
        }  
        
        for(var i = 0; i < genresOpts.length; i++)
        {
            genresOpts[i].style.display = "none";
        }
    }
}

function showGenres()
{
    for(var i = 0; i < genresOpts.length; i++)
    {
        if(genresOpts[i].style.display === "none")
        {
            genresOpts[i].style.display = "block";
        } else 
        {
            genresOpts[i].style.display = "none";
        }
    }
}





