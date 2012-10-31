(function($){
	
	// Load counters for specified fields
	$(function(){
		$('.wordcount-field').characterCount();
	});
	
	/**
	 * Character Counter for inputs and text areas
	 */
	$.fn.characterCount = function( options ) {
		
		// Default settings
		var settings = {
			'countType'		: 'characters', 		// Other option is "words"
			'countClass'	: 'wordcount-total',	// Classname used for the counter span
			'limit' 		: 150
		};
    	
		return this.each(function() {
		
			// Merge settings and options
			if ( options ) { 
				$.extend( settings, options );
			}
			
			// Get current limit
			var limit = ( $(this).data('limit').length ) ? $(this).data('limit') : settings.limit;
			
			// Get length using word count
			if ( settings.countType == 'words' ) {
				var length = $(this).val().split(/\b[\s,\.-:;]*/).length;
			}
			
			// Get length using characters count
			else {
				var length = $(this).val().length;
			}
			
			// Add counter element
			$(this).after('<span class="' + settings.countClass + '">' + length + ' of ' + limit + ' character maximum</span>');
			
			// Bind on key up event
			$(this).live('keyup', function(){
			
				// Counter element
				var counter = $('.' + settings.countClass);
			
				// Get length using word count
				if ( settings.countType == 'words' ) {
					var new_length = $(this).val().split(/\b[\s,\.-:;]*/).length;
				}
				
				// Get length using characters count
				else {
					var new_length = $(this).val().length;
				}
				
				// Update counter
				counter.html( new_length + ' of ' + limit + ' character maximum' );
				
				// Set class if over limit
				if ( new_length > limit ) {
					counter.addClass('over');
				}
				else if ( counter.hasClass('over') ) {
					counter.removeClass('over');
				}
			});
		});
	};
})(jQuery);