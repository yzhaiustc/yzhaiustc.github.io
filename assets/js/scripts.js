/* My scripts for the MICCoM website */

/* ----------------------------------------------------*/
/*
  When jumping to an anchor link (webaddress#id - takes you partway down the page to where the unique id lives), this offsets by the size of the navigation bar so it doesn't cover up the top bit, like a section header  
*/
// the amount in pixels we want to offset by 
var offset=80;
  
// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - offset);
  }
}

// selects <a> elements with href starting with # which are NOT in the navbar (TODO: probably wanna give these elements a specific tag instead of just saying "hash links but not these kinds of hash links")
var jumpLink = 'a[href^="#"]:not(nav):not(nav *)'

// Captures click events of all <a> elements described above
$(document).on('click', jumpLink, function(event) {
  // Click events are captured before hashchanges. 
  // Timeout causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);
/* ----------------------------------------------------*/



/* script for collapsing and expanding submenus in navbar */


/* ----------------------------------------------------*/
/* Equal Height */
/* give all objects of a given class (in a row) the height of the tallest object */
// Uses the jquery plugin "matchHeight.js"
// Panels:
$(function() {
	$('.panel-body').matchHeight();
});
/* ----------------------------------------------------*/


/* ----------------------------------------------------*/
/* Show Abstract button */
/* toggle button text Show Abstract / Hide Abstract*/
$('.hidden').removeClass('hidden').hide();
$('.toggle-text').click(function() {
    $(this).find('span').each(function() { $(this).toggle(); });
});
/* ----------------------------------------------------*/


/* ----------------------------------------------------*/
/* Switch tabs in div.tabs */
$('.tabs-navbar a').click(function() { // when this tab is clicked on ...
    var tab_name = $(this).attr('href'); // get name of tab clicked on
	tab_name = tab_name.split('#')[1]; // strip hash sign from beginning
	$(this).parent().children('a').removeClass("active"); // remove "active" class from all tabs
	$(this).addClass("active"); // add "active" class to clicked tab
	
	$(".tabs article.tab").each(function() { // loop through tab (contents, not button)
		$(this).removeClass("active");
		if ( $(this).attr('id') === tab_name ) {
			$(this).addClass("active");
		}
	});
	return false; // prevent href from jumping to link
});
/* ----------------------------------------------------*/


/* ----------------------------------------------------*/
/* Carousel */
/* Move carousel caption -- FIX: flickers on page load. Probably only fixable by switching to a pure CSS solution? */
 $(function () {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .carousel-caption');
    $('.new-caption-area').html(caption.html());
    caption.css('display', 'none');

    $(".carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
        $('.new-caption-area').html(caption.html());
        caption.css('display', 'none');
    });
});  

/* Activate the Carousel */
$('.carousel').carousel({
      interval: 4500 //changes the speed
});
/* ----------------------------------------------------*/
