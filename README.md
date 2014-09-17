fitToParent
===========

A jQuery plugin that will resize an element to fit it's parent container, and maintain it's orginal aspect ratio.

I have really improved on the answer from @TrueBlueAussie (from here: http://stackoverflow.com/questions/18838963/proportionally-scale-iframe-to-fit-in-a-div-using-jquery) over time.

All options:

	jQuery('#wrapper iframe').fitToParent({
	    height_offset: 0, 	// Int. Put some space around the video
	    width_offset: 0, 	// Int. Put some space around the video
	    box_height: , 		// Int. Will look for .size-parent, or fallback to parent size
	    box_width: , 		// Int. Will look for .size-parent, or fallback to parent size
	    callback: function(newWidth, newHeight){
			
	    }
	});

Assuming you have HTML of this:

    <div id="wrapper">
        <iframe width="720" height="405" src="//player.vimeo.com/video/19223989"></iframe>
    </div>

The most basic way to call the plugin is like this:

    jQuery('#wrapper iframe').fitToParent();

But I'll often set #wrapper to be close to window height and width, like this:

    // Get window height and width
    var winHeight = jQuery(window).height();
    var winWidth = jQuery(window).width();
    
    // Set wrapper height/width to that of window
    jQuery('#wrapper').height(winHeight).width(winWidth);
    
    // Size Iframe
    jQuery('#wrapper iframe').fitToParent({
    	height_offset: 100, // Put some space around the video
    	width_offset: 100, // Put some space around the video
    });


You can also feed in a custom box size to fit the element in, like this:

    // Get window height and width
    var winHeight = jQuery(window).height();
    var winWidth = jQuery(window).width();
    
    // Size element
    jQuery('#wrapper iframe').fitToParent({
    	height_offset: 100, // Put some space around the video
    	width_offset: 100, // Put some space around the video
    	box_height: winHeight, // Force use of this box size
    	box_width: winWidth // Force use of this box size
    });

I've also added the ability to set a CSS class of "size-parent" to a parent element, and it will then use that parent element for the box size. A full example of that:

    // HTML like this
    <div id="wrapper" class="size-parent">
    	<div class="media">
            <iframe width="720" height="405" src="//player.vimeo.com/video/19223989"></iframe>
    	</div>
    </div>
     
    // jQuery like this
    jQuery('.media iframe').fitToParent();    

If you don't set a .size-parent, it will fallback to the element parent. If you set the box_height/box_width parameter, then those override everything obviously. 	

Now, to show how powerful this can be, try this for a vertically centered, horizontal centered aspect ratio correct iFrame!

    // CSS like this
    #wrapper {
    	text-align: center;
    	display: table-cell;
    	vertical-align: middle;
    }
    #wrapper iframe {
    	display: inline-block;
    }
    
    // HTML like this
    <div id="wrapper" class="size-wrapper">
    	<iframe width="720" height="405" src="//player.vimeo.com/video/19223989"></iframe>
    </div>
    
    // jQuery like this
    // Get window height and width
    var winHeight = jQuery(window).height();
    var winWidth = jQuery(window).width();
    
    // Size wrapper
    jQuery('#wrapper').height( winHeight ).width( winWidth );
    
    // Size element
    jQuery('#wrapper iframe').fitToParent({
    	height_offset: 200, // Put some space around the video
    	width_offset: 200, // Put some space around the video
    });
    
    // Fit iFrame to wrapper
    jQuery('#wrapper iframe').fitToParent();

In real life, I wrap the jQuery in a function, and then call that function on window resize for true responsive iFrames!
