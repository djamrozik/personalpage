
/**
 * Created by Daniel on 4/12/2016.
 */

$(document).ready(function() {

    // sizes in pixels
    var collapse_breakpoint = 753;
    var left_col_width = 180;
   
    /* check the window size to see if the sidenav should hide/show */

    var $window = $(window);
    var show_sidenav = false;

    /*
     * Immediately show the navbar
     */
    function showNavbar() {

        // show navbar
        $(".collapse-navbar").css('margin-top', '0');
        $(".collapse-navbar").css('display', 'block');
        $(".collapse-navbar").css('height', '40px');

        // slide the main content down
        $(".main-page").css('padding-top', '30px');

    };

    /*
     * Close the navbar slowly
     */
    function slideOutNavbar() {

        // animate the top navbar
        $(".collapse-navbar").animate({
            'margin-top': '-40px'
        }, 500);

        $(".main-page").animate({
            'padding-top': '0'
        }, 500);

        // eventually hide the navbar completely
        $(".collapse-navbar").css('display', 'none');
        $(".collapse-navbar").css('height', '0');

    };

    /*
     * Show the navbar slowly
     */
    function slideInNavbar() {

        // have it exist at first
        $(".collapse-navbar").css('display', 'block');
        $(".collapse-navbar").css('height', '40px');

        $(".main-page").animate({
            'padding-top': '30px'
        }, 500);

        // animate the top navbar
        $(".collapse-navbar").animate({
            'margin-top': '0'
        }, 500);

    };

    /*
     * Slide in the sidenav slowly. Change the width of nav and position of main col
     */
    function slideInSidenav() {

        // animate the sidenav
        $(".left-column-container").animate({
            left: '0',
        }, 500);

        // simultaneously animate the main col
        $(".main-content-container").animate({
            'margin-left': String(left_col_width) + 'px',
            'margin-top': '0'
        }, 500);

        $(".collapse-navbar-more").css('display', 'none');
    }

    /*
     * Show the sidenav immediately. Set the styles of the main nav
     */
    function showSidenav() {

        // show sidenav
        $(".left-column-container").css('left', '0');

        // adjust main container
        $(".main-content-container").css('margin-left', String(left_col_width) + 'px');

    };

    /*
     * Slide out the sidenav slowly. Change the width of nav and position of main col
     */
    function slideOutSidenav() {

        // animate the sidenav
        $(".left-column-container").animate({
            left: '-' + String(left_col_width) + 'px',
        }, 500);

        // simultaneously animate the main col
        $(".main-content-container").animate({
            'margin-left': '0'
        }, 500);

    };

    /*
     * Slowly move the navbar more section back to hidden and move main page up
     */
    function showNavbarMore() {

        // show navbar more
        $(".collapse-navbar-more").css('display', 'block');

        // find the offset and move the main page
        var offset_height = $(".collapse-navbar-more").height();
        $(".main-content-container").css('margin-top', (offset_height + 20) + 'px');

    };

    /*
     * slowly show the navbar more section and move the main page down
     */
    function hideNavbarMore() {

        $(".collapse-navbar-more").css('display', 'none');
        $(".main-content-container").css('margin-top', '0');

    };

    // function called to see what the current width of the window is.
    // init: called on beginning, show sidenav right away
    function checkWidth(init) {

        var windowSize = $window.width();

        if (windowSize >= collapse_breakpoint) {

            // if transitioning from closed
            if (!show_sidenav && init !== true) {
                slideInSidenav();
                slideOutNavbar();
            }

            if (init === true) {
                showSidenav();
            }

            show_sidenav = true;
        } else {

            // if transitioning from open
            if (show_sidenav && init !== true) {
                slideOutSidenav();
                slideInNavbar();
            }

            if (init == true) {
                showNavbar();
            }

            show_sidenav = false;
        }

    };

    // show navbar more when clicked
    $(document).on("click", "#navbar-expand", function() {
        if ($(".collapse-navbar-more").css('display') === 'none') {
            showNavbarMore();
        } else {
            hideNavbarMore();
        }
    });

    // execute on load
    checkWidth(true);

    // execute on change
    $(window).resize(checkWidth);
    
});
