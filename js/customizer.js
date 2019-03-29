( function( $ ) { 

   // Front Page Logo
	wp.customize( 'fp-logo', function(value) {
		value.bind(function(to){
			var fplogo = $( 'img.fplogo' );
			fplogo.attr( 'src', to );
		});
	});


	// Front Page Slider Image #1
	wp.customize( 'fp-topslider-one', function(value) {
		value.bind(function(to){
			var fpsliderone = $( 'img.orbit-image.orbit-image-one' );
			fpsliderone.attr( 'src', to );
		});
	});
  
  // Front Page Slider Image #1 Caption
	wp.customize( 'fp-topslider-one-caption', function(value) {
		value.bind(function(to){
    $('.orbit-caption-one').html(to);
		});
	});
  
 /* // Front Page Slider Image #2
	wp.customize( 'fp-topslider-two', function(value) {
		value.bind(function(to){
			var fpslidertwo = $( 'img.orbit-image-two' );
			fpslidertwo.attr( 'src', to );
		});
	});
  
  // Front Page Slider Image #2 Caption
	wp.customize( 'fp-topslider-two-caption', function(value) {
		value.bind(function(to){
    $('.orbit-caption-two').html(to);
		});
	});
  
  // Front Page Slider Image #3
	wp.customize( 'fp-topslider-three', function(value) {
		value.bind(function(to){
			var fpsliderthree = $( 'img.orbit-image-three' );
			fpsliderthree.attr( 'src', to );
		});
	});
  
  // Front Page Slider Image #3 Caption
	wp.customize( 'fp-topslider-three-caption', function(value) {
		value.bind(function(to){
    $('.orbit-caption-three').html(to);
		});
	});
  
  // Front Page Slider Image #4
	wp.customize( 'fp-topslider-four', function(value) {
		value.bind(function(to){
			var fpsliderfour = $( 'img.orbit-image-four' );
			fpsliderfour.attr( 'src', to );
		});
	});
  
  // Front Page Slider Image #4 Caption
	wp.customize( 'fp-topslider-four-caption', function(value) {
		value.bind(function(to){
    $('.orbit-caption-four').html(to);
		});
	}); */
  
});