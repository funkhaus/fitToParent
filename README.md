## What is it?

fitToParent is a jQuery plugin that will resize an element to fit its parent container while maintaining its orginal aspect ratio.

fitToParent requires an element with `width` and `height` attributes.

[Example](http://codepen.io/SaFrMo/pen/eBORPa) - A vertically and horizontally centered iframe that dynamically resizes with the window.

## How

```js
// Basic initialization
jQuery('iframe').fitToParent();

// Make sure to update on resize
jQuery(window).on('resize', function(){
    // Basic usage
    jQuery('iframe').fitToParent();
    
    // OR optimized
    requestAnimationFrame( jQuery('iframe').fitToParent() );
});
```

When determining the parent to fit to, fitToParent looks for (in this order):

1. Sizes passed into `box_height` and `box_width` (see 'Options' below)
1. The size of the closest element with the class `size-parent`, retrieved using [closest()](https://api.jquery.com/closest/)
1. The size of the parent element

For example:

```html
<div class="size-parent">
  <div class="extra-wrapper">
    <iframe ... ></iframe>
  </div>
</div>
```

Calling `jQuery('iframe').fitToParent( {box_height: 200} )` will use 200px as the box height and the width of `.size-parent` as the box width.

Calling `jQuery('iframe').fitToParent()` will use `.size-parent`'s dimensions, not those of `extra-wrapper`.

## Options
```js
jQuery('target-element').fitToParent({
    height_offset: 0,   // Int. Put some space around the video
    width_offset: 0,    // Int. Put some space around the video
    box_height: ,       // Int. Will look for .size-parent, or fallback to parent size
    box_width: ,        // Int. Will look for .size-parent, or fallback to parent size
    callback: function(newWidth, newHeight){
      // Fires after fitting is complete
    }
});
```

## More Info
By Drew Baker, based on improvements to [the answer from @TrueBlueAussie](http://stackoverflow.com/questions/18838963/proportionally-scale-iframe-to-fit-in-a-div-using-jquery) developed over time.

--------

__fitToParent__

http://funkhaus.us

Version: 1.1

Requires jQuery
