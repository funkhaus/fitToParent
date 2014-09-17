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
				height_offset: 0,
				width_offset: 0,
				box_height: $box.height(),
				box_width: $box.width(),
				callback: null
		}, options );
		
		// Setup box and element widths
        var width = $el.width();
        var height = $el.height();
        var parentWidth = settings.box_width - settings.width_offset;
        var parentHeight = settings.box_height - settings.height_offset;
		
		// Maintin aspect ratio
        var aspect = width / height;
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