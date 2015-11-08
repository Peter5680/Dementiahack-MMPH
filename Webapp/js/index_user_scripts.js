/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #Call */
    $(document).on("click", "#Call", function(evt)
    {
       window.open('tel:+6478346650');
    });
    
        /* button  #sms_1 */
    $(document).on("click", "#sms_1", function(evt)
    {
       window.open('sms:+6478346650');


    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
