var api = "https://en.wikipedia.org/wiki/Special:Random";
var urlString = ""; 

$(document).ready(function(){
//console.log("js connected");                  

  function search(){
   var inputvalue = $("#inputbox").val();

     $.ajax({
        url: api,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (result) {
            console.log(result);
        }
    });

  }

    

  
  
  
  
  
});