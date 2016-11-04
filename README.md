## What is it?

fitToParent is a jQuery plugin that will resize an element to fit its parent container while maintaining its original aspect ratio.

## How

```js
// Basic initialization
jQuery('iframe').fitToParent();

// Make sure to update on resize
jQuery(window).on('resize', function(){
    // Basic usage
    jQuery('iframe').fitToParent();
    
    // Or optimized
    requestAnimationFrame( jQuery('iframe').fitToParent() );
});
```

When determining the parent to fit to, fitToParent looks for (in this order):

1. Sizes passed into `boxHeight` and `boxWidth` (see 'Options' below)
1. The size of the closest element with the class `size-parent`, retrieved using [closest()](https://api.jquery.com/closest/)
1. If no `.size-parent` found, then it uses the size of the parent element

Calling `jQuery('iframe').fitToParent( {boxHeight: 200} )` will use 200px as the box height and the width of `.size-parent` as the box width.

Calling `jQuery('iframe').fitToParent()` will use the above logic to figure out the box size.

For example, it works best if you use flexbox on `.stage`, and then `jQuery('iframe').fitToParent()`.    

```html
<div class="stage">
    <iframe ... ></iframe>
</div>
```

```css
.stage {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;        
}
```

## Options
```js
jQuery('target-element').fitToParent({
    heightOffset: 0,   // (int) Put some space around the video
    widthOffset: 0,    // (int) Put some space around the video
    boxHeight: ,       // (int) Will look for .size-parent, or fallback to parent size
    boxWidth: ,        // (int) Will look for .size-parent, or fallback to parent size
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

Version: 1.2

Requires jQuery