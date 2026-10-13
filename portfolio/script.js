
  /*hello function*/ 
   alert("welcom to my portfolio");
/*Dark mode*/
const themeButton=document.getElementById("theme-button");
themeButton.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
     
       if(document.body.classList.contains("dark-mode")){
        themeButton.textContent="Light Mode";}else{
            themeButton.textContent="Dark Mode"
        }
});

/*costumise links*/
const exploreLinks=document.querySelectorAll(".explore-links a");
exploreLinks.forEach(function(link){
    link.addEventListener("click",
function(event){
    event.preventDefault();

link.classList.add("clicked-link");
    setTimeout(function(){
        window.location.href=
link.href;},250);

  });
});