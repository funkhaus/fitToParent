jQuery.fn.fitToParent = function (options) {

    this.each(function () {

		// These are the defaults.
		var settings = jQuery.extend({
				heightOffset: 0,
				widthOffset: 0,
				boxHeight: $box.height(),
				boxWidth: $box.width(),
				callback: null
		}, options );

		// Cache the resize element
        var $el = jQuery(this);

        // Get size parent (box to fit element in)
        var $box;
        if( $el.closest('.size-parent').length ) {
	        $box = $el.closest('.size-parent');
        } else {
	        $box = $el.parent();
        }

		// Setup box and element widths
        var width = $el.attr('width');
        var height = $el.attr('height');

        if( !width || !height ) {
            var width = $el.width();
            var height = $el.height();
        }

        var parentWidth = settings.boxWidth - settings.widthOffset;
        var parentHeight = settings.boxHeight - settings.heightOffset;

		// Maintain aspect ratio
		var aspect = $el.data('aspect');
		if(!aspect) {
            aspect = width / height;
            $el.data('aspect', aspect);
		}
        var parentAspect = parentWidth / parentHeight;

		// Resize to fit box
        if (aspect > parentAspect) {
            newWidth = parentWidth;
            newHeight = (newWidth / aspect);
        } else {
            newHeight = parentHeight;
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