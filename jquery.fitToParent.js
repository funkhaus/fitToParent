/*!
* jQuery fitToParent; version: 1.3
* https://github.com/drewbaker/fitToParent
*/
jQuery.fn.fitToParent = function (options) {

    this.each(function () {

        // Cache the resize element
        var $el = jQuery(this);

        // Get size parent (box to fit element in)
        var $box;
        if( $el.closest('.size-parent').length ) {
            $box = $el.closest('.size-parent');
        } else {
            $box = $el.parent();
        }

        // These are the defaults.
        var settings = jQuery.extend({
            heightOffset: 0,
            widthOffset: 0,
            boxHeight: $box.height(),
            boxWidth: $box.width(),
            callback: null
        }, options);

        // Setup stage and element widths
        var elWidth = $el.attr('width');
        var elHeight = $el.attr('height');
        var stageWidth = settings.boxWidth - settings.widthOffset;
        var stageHeight = settings.boxHeight - settings.heightOffset;

        // Fallback to calculated width/height
        if( !elWidth ) {
            elWidth = $el.width();
        }
        if( !elHeight ) {
            elHeight = $el.height();
        }

        // Maintin aspect ratio
        var aspect = $el.data('aspect');
        if(!aspect) {
            aspect = elWidth / elHeight;
            $el.data('aspect', aspect);
        }
        var stageAspect = stageWidth / stageHeight;

        // Resize to fit box
        if (aspect > stageAspect) {
            newWidth = stageWidth;
            newHeight = (newWidth / aspect);
        } else {
            newHeight = stageHeight;
            newWidth = newHeight * aspect;
        }

        // Set new size of element
        $el.width(newWidth);
        $el.height(newHeight);

        // Fire callback
        if (typeof(settings.callback) == "function") {
        	settings.callback(newWidth, newHeight);
        }

    });
};