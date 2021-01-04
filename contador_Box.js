let seconds;
let minutes;
let minutes1;
let seconds1;
let timeout;
let timeFirst=1;
let alarmSeconds=10;
let countdown;
let countdown2;
let $numRounds;
let $roundMinutes;
let $roundSeconds;
let $restMinutes;
let $restSeconds;
let timeInPause=true;
let timeInPause1=false;
let validacionInicial=true;


//pantalla principal


const $div=document.querySelector("#numeros")
const $section=document.querySelector("#seccion1")
const $count=document.querySelector("#numeros");
let $count1=document.createElement("h2");
$count1.setAttribute("class","numbers");
$count.appendChild($count1);
let $rounds=document.createElement("h3");
$rounds.setAttribute("class","rounds");
let $audio1=document.querySelector("#audio1");
let $audio=document.querySelector("#audio");
let $audio2=document.querySelector("#audio2");
$div.appendChild($rounds);

let $caja1=document.querySelector(".caja1");

let $validar=document.querySelector(".intro1");
let $aplicar=document.querySelector(".aplicar");



export function valoresIniciales(){
   

     //valores por defecto al iniciar el programa
     

   /*  document.querySelector(".caja1").value=15;
     document.querySelector(".roundMinutes").value=2;
     document.querySelector(".roundSeconds").value=59;
     document.querySelector(".restMinutes").value=0;
     document.querySelector(".restSeconds").value=59;

     $numRounds=document.querySelector(".caja1").value;
     $roundMinutes=document.querySelector(".roundMinutes").value;
     $roundSeconds=document.querySelector(".roundSeconds").value;
     $restMinutes=document.querySelector(".restMinutes").value;
     $restSeconds=document.querySelector(".restSeconds").value;*/

     document.addEventListener("DOMContentLoaded",(e)=>{
          
          
            if(localStorage.getItem("timeO")===null && localStorage.getItem("min")===null && localStorage.getItem("sec")===null && localStorage.getItem("min1")===null && localStorage.getItem("sec1")===null){
  
                 localStorage.setItem("timeO","12");
                 localStorage.setItem("min","2");
                 localStorage.setItem("sec","59");
                 localStorage.setItem("min1","0");
                 localStorage.setItem("sec1","59");
                 
            
            }
           
           
            
       })



     $numRounds=localStorage.getItem("timeO");
     $roundMinutes=localStorage.getItem("min");
     $roundSeconds=localStorage.getItem("sec");
     $restMinutes=localStorage.getItem("min1");
     $restSeconds=localStorage.getItem("sec1");
     console.log($numRounds)

     $numRounds=parseInt($numRounds);
     $roundMinutes=parseInt($roundMinutes);
     $roundSeconds=parseInt($roundSeconds);
     $restSeconds=parseInt($restSeconds);
     $restMinutes=parseInt($restMinutes);

     timeout=$numRounds;
     minutes=$roundMinutes;
     seconds=$roundSeconds;
     minutes1=$restMinutes;
     seconds1=$restSeconds;

   

     document.querySelector(".stop").disabled=true;
     document.querySelector(".pause").disabled=true;

     escucha()
}



function valoresUsuario(){


      //valores cargados desde localStorage
      
      $numRounds=document.querySelector(".caja1").value;
      $roundMinutes=document.querySelector(".roundMinutes").value;
      $roundSeconds=document.querySelector(".roundSeconds").value;
      $restMinutes=document.querySelector(".restMinutes").value;
      $restSeconds=document.querySelector(".restSeconds").value;

      //valores guardados el localStorage

      localStorage.setItem("timeO",$numRounds);
      localStorage.setItem("min",$roundMinutes);
      localStorage.setItem("sec",$roundSeconds);
      localStorage.setItem("min1",$restMinutes);
      localStorage.setItem("sec1",$restSeconds);

      console.log($numRounds);

     
      $numRounds=parseInt($numRounds);
      $roundMinutes=parseInt($roundMinutes);
      $roundSeconds=parseInt($roundSeconds);
      $restSeconds=parseInt($restSeconds);
      $restMinutes=parseInt($restMinutes);
      
      timeout=$numRounds;
      minutes=$roundMinutes;
      seconds=$roundSeconds;
      minutes1=$restMinutes;
      seconds1=$restSeconds;

      //validaciones

     
            if(!($numRounds<31 && $numRounds>0 )){
              document.querySelector(".caja1").style.backgroundColor="red"
              document.querySelector(".error").innerHTML=("NUMBER ROUNDS 0-30")

            
              }else( document.querySelector(".caja1").style.backgroundColor="rgb(185, 179, 179)");
       
     
      
            if(!($roundMinutes<60 && $roundMinutes>-1)){
                document.querySelector(".roundMinutes").style.backgroundColor="red";   
                document.querySelector(".error2").innerHTML=("MINUTES DE 0-59 and SECONDS DE 0-59");
              

                }else (document.querySelector(".roundMinutes").style.backgroundColor="rgb(185, 179, 179)")

            if(!($roundSeconds<60 && $roundSeconds>-1)){

                document.querySelector(".roundSeconds").style.backgroundColor="red";
                document.querySelector(".error2").innerHTML=("MINUTES  0-59 and SECONDS DE 0-59");


                }else(document.querySelector(".roundSeconds").style.backgroundColor="rgb(185, 179, 179)");
            
            if(!($restMinutes<7 && $restMinutes>-1)){

              document.querySelector(".restMinutes").style.backgroundColor="red";
              document.querySelector(".error3").innerHTML=("REST MINITS 0-6 and REST SECONDS 0-59");
              
                }else(document.querySelector(".restMinutes").style.backgroundColor="rgb(185, 179, 179)");

            if(!($restSeconds<60 && $restSeconds>-1)){

              document.querySelector(".restSeconds").style.backgroundColor="red";
              document.querySelector(".error3").innerHTML=("REST MINITS 0-6 and REST SECONDS 0-59");
        
                 }else(document.querySelector(".restSeconds").style.backgroundColor="rgb(185, 179, 179)");
      
      

      //validaciones correctas

      
      if(($numRounds<31 && $numRounds>0) && ($roundMinutes<60 && $roundMinutes>=0) && ($roundSeconds<60 && $roundSeconds>=0) && ($restMinutes<7 && $restMinutes>=0) && ($restSeconds<60 && $restSeconds>=0)){

       
       
        document.querySelector(".botonmenu").classList.toggle("is-active");
        document.documentElement.style.setProperty("--transition","-100%");
        document.querySelector(".error").innerHTML=("");
        document.querySelector(".error2").innerHTML=("");
        document.querySelector(".error3").innerHTML=("");
        
        document.documentElement.style.setProperty("--transition1","0%");
        validacionInicial=false;
        console.log($roundMinutes)

       
      }

 }
  


function relacionarValores(){

       timeout=$numRounds;
       minutes=$roundMinutes;
       seconds=$roundSeconds;
       minutes1=$restMinutes;
       seconds1=$restSeconds;

 
  iniciar()

}



function escucha(){

       $aplicar.addEventListener("click",(e)=>{
    
             valoresUsuario();

       });
  

       document.addEventListener("click",(e)=>{

             if(e.target.matches(".stop")){

                  document.documentElement.style.setProperty("--transition1","0%")
                 parar()

              } 
  
  
            if(e.target.matches(".play")){

                   document.documentElement.style.setProperty("--transition1","500%")

                           if(timeInPause===false){
      
                                 rest1()
                                }
                           if(timeInPause===true){

                                iniciar()
                          }
             }

             if(e.target.matches(".pause")){

                   pause()

              }


      });

}



function iniciar(){
  
    
      document.querySelector(".play").disabled=true;
      document.querySelector(".stop").disabled=false;
      document.querySelector(".pause").disabled=false;
  
             if(timeInPause1===false){
          
                   $audio1.play();
                   $rounds.textContent=`ROUNDS: ${timeFirst}/${timeout}`;
                   document.documentElement.style.setProperty("--colornum","rgb(12, 240, 12)") 
            }

             if(timeInPause1===true && minutes===0 && seconds<11){

                   document.documentElement.style.setProperty("--colornum","red")
     
            }


  
        timeInPause=true

        countdown=setInterval((e)=>{

             $count1.innerHTML=`${minutes}  : ${("0"+seconds).slice(-2)}`
        
             if(minutes>-1){
                  seconds=seconds-1
                      if(seconds<0){
                          seconds=59;
                           minutes=minutes-1
               
                      }
                      if(minutes===-1){
                          clearInterval(countdown);
                          timeFirst=timeFirst+1;
                          rest1()
                      }
                      if(minutes===0 && seconds===alarmSeconds-1){ 
                          document.documentElement.style.setProperty("--colornum","red")
                          $audio2.play();
                      }
                         
             } 
        
         },1000);
  
  };



function rest1(){

       document.querySelector(".play").disabled=true;
       document.querySelector(".stop").disabled=false;
       document.querySelector(".pause").disabled=false;
  
             if(timeInPause===true){

                  document.documentElement.style.setProperty("--colornum","yellow")
                  $count1.innerHTML=`descanso`
                  $audio.play();
             }

             if(timeInPause===false && minutes1===0 && seconds1<11){
    
                  document.documentElement.style.setProperty("--colornum","gold")
             }

    
 
             if(timeout+1===timeFirst){
       
                  $audio.play()
                  $count1.innerHTML=`end`
                  timeFirst=1;
                  return parar()
        
             }
       timeInPause=false
       timeInPause1=false
 
       countdown2=setInterval((e)=>{
        
   
           $count1.innerHTML=`${minutes1}  : ${("0"+seconds1).slice(-2)}`

                 if(minutes1>-1){

                     seconds1=seconds1-1
                              if(seconds1<0){

                             seconds1=59;
                             minutes1=minutes1-1
                         }
                              if(minutes1===-1){

                                  clearInterval(countdown2);
                                  return relacionarValores()
                         }
                              if(minutes1===0 && seconds1===alarmSeconds-1){ 
                                   document.documentElement.style.setProperty("--colornum","gold");
                                  $audio2.play();
                         }
                        
                 } 
       
       },1000);  
}



function pause(){

       clearInterval(countdown);
       clearInterval(countdown2);

       document.querySelector(".play").disabled=false;
       document.querySelector(".stop").disabled=true;
       document.querySelector(".pause").disabled=true;
  
       timeInPause1=true;
 
  
}



function parar(){

  
     clearInterval(countdown);
     clearInterval(countdown2);
     timeInPause=true;
     timeInPause1=false;
     timeFirst=1;
     $count1.innerHTML=`end`;
     
     document.documentElement.style.setProperty("--colornum","rgb(12, 240, 12)") 
     document.querySelector(".stop").disabled=true;
     document.querySelector(".play").disabled=false;
     document.querySelector(".pause").disabled=true;
      
    
     
        if(validacionInicial===true){

             timeout=$numRounds;
             minutes=$roundMinutes;
             seconds=$roundSeconds;
             minutes1=$restMinutes;
             seconds1=$restSeconds;

       }else(valoresUsuario())
  
      
  
  /* setTimeout((e)=>{
      alert("se finito")
    },3000)*/
    
    
   
}


