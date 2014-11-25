requirejs([
		'jquery',
		'foundation-loader',
		'module-example'
		],
	function($) {

		var onReady, onLoad, onResize, afterResize, timer;

		/* Hookups
		----------------------------*/
		onReady = function() {	 
          var s = skrollr.init({
		smoothScrolling: false,
		mobileDeceleration: 0.004
	});
		};

		onLoad = function() {
		};

		onResize = function(){

		};

		afterResize = function(){
		};


		/* Attach events
        ----------------------------*/
        $(onReady);//Document ready
        $(window).load(onLoad); //Window load
        $(window).resize(function(e){
        	onResize();
        	clearTimeout(timer);
        	timer = setTimeout(afterResize, 50);
        });
        
	}
);