// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
$(document).ready(function() {
    $("#searchButton").click(function() {
        var searchTerm;
        var giphyUrl;
        
        searchTerm = $("#searchTerm").val();
        
        giphyUrl = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC"; 

        $.ajax({
          url: giphyUrl,
          method: "GET",
          success: function(response) {
              var imageSrc;
              var imageHtml;
              
              imageHtml= "<img src = " + imageSrc + " >";
              
              $(document.body).append(imageHtml);
          },
        }); 
    });
});