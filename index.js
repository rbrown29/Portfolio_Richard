$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
});

$(document).ready(function() {

    $('.scroll-down, .get-started').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $('section:first-of-type').offset().top
        }, 300)
    })

});