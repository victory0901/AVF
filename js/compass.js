document.addEventListener( "deviceready", function(){
    var watchId = 0;
    
    $("#btnWatch").on("touchstart", function(){
        var options = null;
        
        if( watchId === 0)
        {
            options = {
                freuency: 100
            };
            
            watchId = navigator.compass.watchHeading( function( heading ){
                var rotation = Math.round( heading.magneticHeading) + "deg";
                
                $( "#txtHeading").attr("value", heading.magneticHeading);
                $( "#imgNeedle").css( "-webkit-transform", "rotate(" + rotation +")");
            }, function(error) {
                console.log("Error");
            }, options);
            
            $(this).html("Stop Watching");
            
        } else {
            navigator.compass.clearWatch(watchId);
            watchId = 0;
            
            $(this).html("Watch Heading");
        }
    });    
});









