/**
 * Created by Daniel on 3/6/2017.
 */

$(document).ready(function() {

    // when an image is clicked, open the image itself
    $(document).on("click", ".photo", function() {

        // check that all fields exist in order to call this
        if (!$(this).children('img') || !$(this).children('img').length) {
            return console.error('No img  to enlarge photo');
        }

        var img = $(this).children('img')[0];
        var src = $(img).attr('src');

        if (!src) {
            return console.error('No img src');
        }

        // apply to the #large-image container
        var img = $("#large-image").children('img')[0];
        $(img).attr("src", src);

        // finally, change display of large-image to be inline-block
        $("#large-image").css('display', 'flex');
    });

    // when the large-image is clicked, minimize it if open
    $(document).on("click", "#large-image", function() {

        // make sure large image is open
        if ($("#large-image").css('display') === "none") {
            return;
        }

        // first set display to none and done
        $("#large-image").css('display', 'none');
    });

});