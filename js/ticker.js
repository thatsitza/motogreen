/*
scrollNews = function() {
	var marquee = $('div.marquee');
	marquee.each(function() {
    		var mar = $(this);
    		mar.css('left', 600);
	});
}
*/


scrollNews = function() {
	var marquee = $('div.marquee');
	marquee.each(function() {
    		var mar = $(this),indent = mar.width();
    		//var right = 0;
    		//var padRight = false;
    		mar.marquee = function() {
        		indent--;
        		//right++;
        		
        		//if (!padRight) {
        			mar.css('margin-left',indent);
        		//}
        		//if (padRight) {
        		//	mar.css('margin-right',right);
        		//}
        		        		
        		if (indent < -1 * mar.children('div.marquee-text').width()) {
            			indent = mar.width();
            			//right = 0 - mar.width();
        		}
        		
        		//if (mar.offset().left == 480) {
        		//	$('div.marquee').css('text-align', 'right');
        			//$('div.marquee-text').css('float', 'right');
        			//mar.css('margin-left', 0);
        		//	padRight = true;
        		//}
        		
        		//if (indent <= 0) {        			
        			//mar.css('margin-right', right);
        		//}
        		
        		//if (padRight) {
        			
        		//}
        		
    		};
    		mar.data('interval',setInterval(mar.marquee,600/60));
    		
    		marquee.mouseover(function() {
			clearInterval(mar.data('interval'));
		});
		
		marquee.mouseleave(function() {
			mar.data('interval',setInterval(mar.marquee,600/60));
		});
	});
}