// para oscurecer el navbar cuando pasa su propio height. 
$(function() {
    $(document).scroll(function() {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() * 3);
    });
});


// Inicializando Tooltips para Bootstrap 5
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})





// Smooth-scroll con jQuery según ejemplo de W3Schools
$(document).ready(function() {
    // Add smooth scrolling to all links

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior

        if (this.hash != "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});