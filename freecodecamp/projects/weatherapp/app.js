var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, long;
var tempUnit = 'C';
var currentTempInCelsius;
  

$(document).ready(function(){
console.log("js connected");                  


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var long = "lon=" + position.coords.longitude;
      getWeather(lat, long);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  
  
  
  function getWeather(lat,long){
    console.log("getting weather" +lat, long);
    var urlString = api + lat + "&" + long; 
    console.log("urlstring is " +urlString);
   //
    
 $.ajax({
    url: urlString, success: function (result) {
        console.log(result);
        $("#locationdiv").text(result.name +",");
         $("#tempdiv").text(result.main.temp+ " " + String.fromCharCode(176) + "C");
          $("#locationdiv").text(result.name);
      $("#skydiv").text(result.weather[1].main);
      $("#winddir").text(result.wind.deg+ " " +result.wind.speed + " "+ "KM");
      
      }
    });
  };
  
  
  
  
  
});