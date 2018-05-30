 
 
  
  var buzzer = $("#buzzer")[0];
  var sessions = parseInt($("#sessionnumbercounter").html());;
  var breaklength = parseInt($("#breaktimecounter").html());
  var timer = parseInt($("#sessiontimecounter").html());


function sessionaddtime(){
  timer++
  $("#sessiontimecounter").html(timer); }
function sessionsubtracttime(){
    timer--
  $("#sessiontimecounter").html(timer);
 
}
function addsessions(){
      sessions++
  $("#sessionnumbercounter").html(sessions);
 
}
function subtractsessions(){
      sessions--
  $("#sessionnumbercounter").html(sessions);
 }
function addbreaktime(){
      breaklength++
  $("#breaktimecounter").html(breaklength);
 
}
function subtractbreaktime(){
      breaklength--
  $("#breaktimecounter").html(breaklength);
 
}


function starttimer(){
    var intcount =  setInterval(timeraction,1000);
    
}

function reset(){
     $("#breaktimecounter").html(5);
   $("#sessionnumbercounter").html(5);
  $("#sessiontimecounter").html(5);
}

function timeraction(){
   console.log("timeraction")
   console.log("timer = "+timer);
        if(timer === 0 && sessions ===0){
            $("#timetype").html("TIMER FINSHED");
   
        }else if(timer===0){ //if timer hits 0 do this stuff
          console.log("stop hit");
           setupbreaktime();
            clearInterval(intcount);// this needs to be last otherwise it stops all the intervals on the page
          
            

            //var startBreak = setInterval(breakTimeraction,1000);
      
        }else{
            timer-=1 //decrement the timer by 1
            $("#timercounter").html(timer);
            $("#timetype").html("Session Time:")
        }//refresh the timer view
    
    }

    function breaktimeraction(){
        console.log("breaktimeraction")
        
        if(timer<0){ //if timer hits 0 do this stuff
        buzzer.play();
        clearInterval(startBreak);
        setupsessiontime();
        starttimer();
        }else{
        timer-=1;
          $("#timercounter").html(timer); //refresh the timer view
          
        }
      } 

function setupbreaktime(){
        console.log("seting up breaktime")
      $("#timetype").html("Break Time:"); // set text to breaktime
      $("#timercounter").html(breaklength);
      sessions-- //decrement sessions
      $("#sessionnumbercounter").html(sessions); //set session number counter to new session number
      timer = breaklength;
      
}


function setupsessiontime(){
  console.log("setup sessiontime")
      $("#timetype").html("Session Time:"); // set text to breaktime
      $("#timercounter").html($("#sessiontimecounter").html());
      timer = parseInt($("#sessiontimecounter").html());    
}



