/**
 * Created by Daniel on 4/12/2016.
 */

$(document).ready(function() {
   
    /* check the window size to see if the sidenav should hide/show */

    var $window = $(window);

    function checkWidth() {

        var windowSize = $window.width();

        if (windowSize >= 760) {
            console.log('Show sidenav');
        } else {
            console.log('Hide sidenav');
        }

    };

    // execute on load
    checkWidth();

    // execute on change
    $(window).resize(checkWidth);
    
});
