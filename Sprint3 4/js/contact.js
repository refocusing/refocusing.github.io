$(document).ready(function() {

    $("#subject").selectmenu();

    // Validation 
    $("form").validate({
        rules: {
            first_name: "required",
            last_name: "required",
            email: {
                required: true,
                email: true
            },
            city: "required",
            message: "required",
            subject: "required"
        },
        messages: {
            first_name: "Please enter your first name",
            last_name: "Please enter your last name",
            email: "Please enter a valid email address",
            city: "Please enter your city",
            message: "Please enter a message",
            subject: "Please select a subject"
        },
        submitHandler: function(form) {
            
            $("<div>Form send succesfully!</div>").dialog({
                modal: true,
                title: "Form Submission",
                buttons: {
                    Ok: function() {
                        $(this).dialog("close"); 
                    }
                }
            });
        }
    });

    // Mask 
    $('#phone').mask('0000 000 0000');

    // Autocomplete widget
    var cities = ["İstanbul", "Ankara", "İzmir", "Antalya", "Bursa", "Adana", "Gaziantep", "Konya", "Mersin", "Diyarbakir"];
    $("#City").autocomplete({
        source: cities,
        minLength: 1,
    });

    //Tooltip widget
    $(document).tooltip();

    // titles
    $('#first-name').attr('title', 'Please enter name.');
    $('#last-name').attr('title', 'Please enter surname.');
    $('#email').attr('title', 'Please enter name e-mail.');
    $('#phone').attr('title', 'Please enter phone number.');
    $('#City').attr('title', 'Please enter the city.');
    $('#message').attr('title', 'Please enter the message.');
    $('#subject').attr('title', 'Please enter reason');

});
