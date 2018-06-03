var api = "https://en.wikipedia.org/wiki/Special:Random";

var storeResults =[];

$(document).ready(function(){
//console.log("js connected");                  

  
  
  $("#getstatusbutton").click(function(){
	  
  	console.log("getstatus clicked");
  	
	  
        
     $.ajax({
        url: api,
        type: "GET",
        crossDomain: true,
        dataType: 'json',
        success: function (result) {
		storeResults = result;
           console.log(storeResults);
		  
        }, error:function(errorMessage){ alert("error"); }
    }).done(function(){
	   //do this after the ajax is done
	     
     });
    

  });
  
});