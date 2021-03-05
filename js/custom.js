
$(document).ready(function(){
    // Create a scroll container
    var controller = new ScrollMagic.Controller();
	

    // Create a scene for first trigger and set properties via an object
    var sceneOne = new ScrollMagic.Scene({
		triggerElement: '#triggerOne',
		triggerHook: 0.1,
        duration: 1000
    }).setPin('#triggerOne');


    // Create a Scene for second trigger and set properties via an object
    var sceneTwo = new ScrollMagic.Scene({
        triggerElement: '#triggerTwo',
		triggerHook: 0.1,
        duration: 1000
    }).setPin('#triggerTwo');
	
	
	 // Create a Scene for second trigger and set properties via an object
    var sceneThree = new ScrollMagic.Scene({
        triggerElement: '#triggerThree',
		triggerHook: 0.1,
        duration: 1000
    }).setPin('#triggerThree');
	
	
	 // Create a Scene for second trigger and set properties via an object
    var sceneFour = new ScrollMagic.Scene({
        triggerElement: '#triggerFour',
		triggerHook: 0.1,
        duration: 1000
    }).setPin('#triggerFour');

	
    // Add scenes to controller
    controller.addScene([
		sceneOne,
        sceneTwo,
		sceneThree,
		sceneFour
		
    ]);


});