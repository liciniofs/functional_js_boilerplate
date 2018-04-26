NEWLI = '' || {};

(function($) {

 NEWLI.modules = {
     
   init: {
     NEWLI.modules.build();
   },

   build: {
     NEWLI.modules.mainSlider();
   },

   mainSlider: {

       variable: '';

       init = function() {
           this.build();
       }

       build = function() {

       }

       action_example = function() {

       }
       this.init();
   },
 }
})(jQuery);

NEWLI.modules.init();
