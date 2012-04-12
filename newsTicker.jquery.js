/*

NEWS TICKER
Tom McKenzie <http://chillidonut.com/> <https://github.com/grrowl/>

*/

;(function ($, window, document, undefined) {
	var pluginName = 'newsTicker',
		defaults = {
			timeout: 4500,
			direction: 'down',
			animSpeed: 'slow',
			pauseOnHover: true,
			nextSelector: '',
			prevSelector: ''
		};
	
	function Plugin( element, options ) {
		this.element = jQuery(element);
		this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
	}

	Plugin.prototype.init = function () {
		this.offset = 0;

		if (this.element.children().length <= 1)
			return; // abort if theres only one item

		var thisObj = this;
		
		// next-prev buttons
		jQuery(this.options.nextSelector).click(function() { thisObj.next(); return false; });
		jQuery(this.options.prevSelector).click(function(){ thisObj.prev(); return false; });

		if (this.options.pauseOnHover) {
			this.element.on({
				mouseenter: function () {
					if (thisObj.timeoutId)
						clearTimeout(thisObj.timeoutId);
				},
				mouseleave: function () {
					thisObj.tick();
				}
			});
		}
		
		this.element.children().css('position', 'absolute').hide().first().fadeIn();
		this.tick();
	}

	// resets timeout
	Plugin.prototype.tick = function () {
		if (this.timeoutId)
			clearTimeout(this.timeoutId);

		var thisObj = this; // fix scope
		this.timeoutId = setTimeout(function () { 	
			thisObj.next.call(thisObj); 
		}, this.options.timeout);
	}

	// scroll to next item
	Plugin.prototype.next = function () {
		if (jQuery(':animated', this.element).length)
			return; // bail if we're already mid-animation
		
		var children = this.element.children();
		var current = children.eq(Math.abs(this.offset));
		this.offset = (this.offset + 1) % children.length;
		var next = children.eq(Math.abs(this.offset));

		this.animate(current, next, this.options.direction);		
		
		this.tick();
	}

	// scroll to previous item
	Plugin.prototype.prev = function () {
		if (jQuery(':animated', this.element).length)
			return; // bail if we're already mid-animation

		var children = this.element.children();
		var current = children.eq(Math.abs(this.offset));
		this.offset = (this.offset - 1) % children.length;
		if (this.offset < 0) this.offset += children.length;
		var prev = children.eq(Math.abs(this.offset));

		var direction = this.options.direction;
		direction = direction == 'left' ? 'right' :
					direction == 'right' ? 'left':
					direction == 'up' ? 'down' :
					direction == 'down' ? 'up' : 'up';

		this.animate(current, prev, direction);
		
		this.tick();
	}

	Plugin.prototype.animate = function(current, next, direction) {
		switch (direction) {
			case 'up':
				var parentHeight = this.element.innerHeight();
				var parentPadding = parseInt(this.element.css('paddingTop'));

				current.css('top', parentPadding +'px');
				current.animate({
					opacity: 'hide',
					top: '-='+ parentHeight
				}, this.options.animSpeed);
				next.css({ position: 'absolute', top: (parentHeight + parentPadding) + 'px' });
				next.animate({
					opacity: 'show',
					top: '-='+ parentHeight
				}, this.options.animSpeed);
				break;

			case 'down':
			default:
				var parentHeight = this.element.innerHeight();
				var parentPadding = parseInt(this.element.css('paddingTop'));

				current.css('top', parentPadding +'px');
				current.animate({
					opacity: 'hide',
					top: '+='+ parentHeight
				}, this.options.animSpeed);
				next.css({ position: 'absolute', top: '-'+ (parentHeight - parentPadding) +'px' });
				next.animate({
					opacity: 'show',
					top: '+='+ parentHeight
				}, this.options.animSpeed);
				break;

			case 'right':
				var parentWidth = this.element.innerWidth();
				var parentPadding = parseInt(this.element.css('paddingLeft'));

				current.css('left', parentPadding +'px');
				current.animate({
					opacity: 'hide',
					left: '+='+ parentWidth
				}, this.options.animSpeed);
				next.css({ position: 'absolute', left: '-'+ (parentWidth - parentPadding) +'px' });
				next.animate({
					opacity: 'show',
					left: '+='+ parentWidth
				}, this.options.animSpeed);
				break;

			case 'left':
				var parentWidth = this.element.innerWidth();
				var parentPadding = parseInt(this.element.css('paddingLeft'));

				current.css('left', parentPadding +'px');
				current.animate({
					opacity: 'hide',
					left: '-='+ parentWidth
				}, this.options.animSpeed);
				next.css({ position: 'absolute', left: (parentWidth + parentPadding) +'px' });
				next.animate({
					opacity: 'show',
					left: '-='+ parentWidth
				}, this.options.animSpeed);
				break;
		}
	}

    // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
    jQuery.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!jQuery.data(this, 'plugin_' + pluginName)) {
                jQuery.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    }

})(jQuery, window, document);