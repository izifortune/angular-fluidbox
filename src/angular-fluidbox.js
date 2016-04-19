angular.module('fluidbox', [])

.directive('fluidbox', function fluidbox() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
      var options = {
        immediateOpen: attrs.immediateOpen || false,
        loader: attrs.loader || false,
        maxWidth: attrs.maxWidth || 0,
        maxHeight: attrs.maxHeight || 0,
        resizeThrottle: attrs.resizeThrottle || 500,
        stackIndex: attrs.stackIndex || 1000,
        stackIndexDelta: attrs.stackIndexDelta || 10,
        viewportFill: attrs.viewportFill || 0.95
      };

      if (attrs.ngHref) {
        attrs.$observe('href', function(val) {
          if (val) {
            element.fluidbox(options);
          }
        });
      } else {
        element.fluidbox(options);
      }

      scope.$on('$destroy', function() {
        element.fluidbox('destroy');
      });
    }
  }
});
