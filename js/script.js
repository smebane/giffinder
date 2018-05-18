// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************   
//****************** SERIOUSLY TEST USING console.log()!!! ******************
$(document).ready(function() {
            $("#searchButton").click(function() {
                    var searchTerm;
                    var giphyUrl;
                    searchTerm = $("#searchTerm").val();
                    console.log(searchTerm);
                     $.ajax({
                            url: "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
                            method: "GET",
                            success: function(response) {
                                // Below log the response object to the console
                                //console.log(response);
                                //Log the data array to the console
                                //console.log(response.data);
                                //Log the first gif objectf from the data array
                                //console.log(response.data[0]); 
                                //Log the images array to the console

                                //Log the orignal image to the console

                                //Log the url from the orignial gif to the console
                                var imageSrc;
                                var imageHtml;

                                imageSrc = response.data[0].images.original.url;
                                console.log(imageSrc);

                                imageHtml = "<img src = " + imageSrc + " >";
                                $("img").remove();
                                $("body").append(imageHtml);
                                console.log(response.data[0].images.fixed_width.url);

                                var gif = response.data[0].images.fixed_width.url ;


                                $('body').append('<img src=' + gif + '>');
                            }});

            });
});