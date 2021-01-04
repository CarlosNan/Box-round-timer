let $transition;
let $numRounds;
export function menuBoxeo(boton){

  document.addEventListener("click",(e)=>{

   

    if(e.target.matches(boton) || e.target.matches(".hamburger-box") || e.target.matches(".hamburger-inner")){

      


        
        $transition=getComputedStyle(document.documentElement).getPropertyValue("--transition");
       let $transition1=getComputedStyle(document.documentElement).getPropertyValue("--transition1");


        if($transition==="-100%"){
          
        document.querySelector(".botonmenu").classList.toggle("is-active");
        document.documentElement.style.setProperty("--transition","0%");
         document.documentElement.style.setProperty("--transition1","400%");
        
        }
        if($transition==="0%"){

          document.querySelector(".botonmenu").classList.toggle("is-active");
          document.documentElement.style.setProperty("--transition","-100%");
         
        }
    }

  })


}   
