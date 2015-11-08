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

    
        /* button  #settings */
    $(document).on("click", "#settings", function(evt)
    {
         /*global activate_page */
         af.ui.loadContent("#settings_page_1"); 
    });
    
        /* button  #tasks */
    $(document).on("click", "#tasks", function(evt)
    {
         /*global activate_page */
         af.ui.loadContent("#tasks_page_1"); 
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_page */
         af.ui.loadContent("#mainpage"); 
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_33", function(evt)
    {
         /*global activate_page */
         af.ui.loadContent("#mainpage"); 
    });
    
        /* button  #Back-settings */
    $(document).on("click", "#Back-settings", function(evt)
    {
         /*global activate_page */
         af.ui.loadContent("#mainpage"); 
    });
     
             /* button  #timeline-settings */
    $(document).on("click", "#TimelineBack", function(evt)
    {
         /*global activate_page */
         af.ui.loadContent("#mainpage"); 
    });
     
                  /* button  #timeline-settings */
    $(document).on("click", "#timeline", function(evt)
    {
         /*global activate_page */
         af.ui.loadContent("#Heatmap_page_1"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
