$(document).ready(function(){
    $.getJSON("../data.json", function(data){
        var welcomeText = data.welcomeText;
        $("#data").append(
            "<h2>" + welcomeText.heading + "</h2>" +
            "<h3>" + welcomeText.subHeading + "</h3>"
        );
        $.each(welcomeText.paragraphs, function(index, paragraph) {
            $("#data").append("<p>" + paragraph + "</p>");
        });
    });
});
