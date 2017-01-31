NEWLI = {};

(function($) {
 NEWLI.modules = {
   init: {
     NEWLI.modules.build();
   },
   build: {

     NEWLI.modules.mainSlider();

   },
   mainSlider: {
       variable: '',
       init: function() {

           this.build();

       },
       build: function() {

       },
       action_example: function() {

       }
   },
   newsBlock: (function(elem) {
       this.element = elem,

       this.init = function() {

       };
       this.build = function() {

       };

       this.loadMoreNews = function() {
           var _this = this;

       };
       this.init();
   }),
 }
})(jQuery);
