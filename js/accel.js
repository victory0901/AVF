document.addEventListener( "deviceready", function(){
    var watchId = 0;
    
    $("#butWatch").on("touchstart", function(){
        
        if( watchId === 0)
        {            
            watchId = navigator.accelerometer.watchAcceleraton( function( acceleration ){
                $("#txtX").attr("value", acceleration.x);
                $("#txtY").attr("value", acceleration.y);
                $("#txtZ").attr("value", acceleration.Z);
            }, function(error) {
                console.log("Error");
            }, {
                frequency: 100
            });
            
            $("#butWatch").html("Stop Watching");
        } else {
            navigator.accelerometer.clearWatch(watchId);
            $("#butWatch").html("Watch Accelerometer");
            watchId = 0;
            
            $(this).html("Watch Heading");
        }
    });    
});