(function($, window, document, undefined){

	$.fn.tabs = function(userOptions){
		
		var options = $.extend({}, $.fn.tabs.defaults, userOptions);
		
		$.fn.tabs.defaults = {
			
			color1: "red",
			color2: "blue",
			color3: "green"
			
		};
		
		
		
		return this.each(function(){
			
			var tablink = $(".tablink"),
				tabcontent = $(".tabcontent");
			
			
	
			tablink.on("click", function(){
				
					var thisTablink = $(this),
						thisTablinkIndex = thisTablink.index();
					
					tabcontent.hide();
					tabcontent.eq(thisTablinkIndex).show().css({
						"background-color": eval("options.color" + (thisTablinkIndex+1))
					});
					tablink.removeClass("active");
					thisTablink.addClass("active");
				
			});
			
			
			

			$("#defaultOpen").click();

	
		});
	};
	
	
	
	
})(jQuery, window, document);