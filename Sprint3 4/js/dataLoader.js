$(document).ready(function(){
    $.getJSON("../data.json", function(data){
        var welcomeText = data.welcomeText;
        $("#welcome-text").append(
            "<h2>" + welcomeText.heading + "</h2>" +
            "<h3>" + welcomeText.subHeading + "</h3>"
        );
        $.each(welcomeText.paragraphs, function(index, paragraph) {
            $("#welcome-text").append("<p>" + paragraph + "</p>");
        });
    });
});
