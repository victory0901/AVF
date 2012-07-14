    // Wait for PhoneGap to load
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    function onDeviceReady() {
 
    }



// Notifications
	
	$("#alert").on('click', function() {
               showAlert();
               makeBeep();
               });
    
    // Dismiss Alert
    function alertDismissed() {
    
    }

    // Show a custom alert
    function showAlert() {
        navigator.notification.alert(
            'Alerts are working!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );
    }
    
    // Make beep sound
    function makeBeep() {
    navigator.notification.beep(1);
    }


