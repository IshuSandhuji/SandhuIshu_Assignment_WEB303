
//WEB_303 Assignment
// Ishu:)


$(document).ready(function() {
    // Function to onload()  using AJAX same as in your slides
    function onload(file) {
        $.ajax({
            url: file,
            dataType: 'html',
            success: function(data) {
                // Animate and display the newly loaded content
                $('#content').hide().html(data).fadeIn();
            },
            error: function() {
                $('#content').html('Error loading content.');
            }
        });
    }

    // Event handlers for solution links
    $('#prospect').on('click', function(e) {
        e.preventDefault();
        onload('prospect.html');
    });

    $('#convert').on('click', function(e) {
        e.preventDefault();
        onload('convert.html');
    });

    $('#retain').on('click', function(e) {
        e.preventDefault();
        onload('retain.html');
    });
});


