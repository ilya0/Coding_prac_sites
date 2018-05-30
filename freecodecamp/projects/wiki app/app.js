var api = "https://en.wikipedia.org/wiki/Special:Random";
var urlString = ""; 
var storeResults =[];

$(document).ready(function(){
//console.log("js connected");                  

  
  
  $("#searchbutton").click(function(){
	  
  	console.log("searchbutton clicked");
  	var searchTerm = $("#inputbox").val();
	  console.log("search term is" +searchTerm);
        urlstring = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
     $.ajax({
        url: urlstring,
        type: "GET",
        crossDomain: true,
        dataType: 'json',
        success: function (result) {
		storeResults = result;
           console.log(storeResults);
		  
        }, error:function(errorMessage){ alert("error"); }
    }).done(function(){
	     
	    console.log("storeResults length " +storeResults[1].length);
	     
	    for(i=0; i<storeResults[1].length; i++){
		    
		    console.log("appending" +i);
            $("#ullist").append("<li>"+ storeResults[1][i]+ " - " + "<p>" + storeResults[2][i]+ "-"+ "<a href="+storeResults[3][i]+">"+ storeResults[3][i]+"</a>"+"</li>" );
		  
	    }
	     
     });
    

  });
  
});