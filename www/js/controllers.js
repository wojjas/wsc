angular.module('starter.controllers', [])

  .controller('ConverterController', function ($scope) {
    var vm = this;
    var ms2knt = 1.9438444924574;
    var knt2ms = 0.514444444;

    vm.kts = null;
    vm.ms = null;

    vm.convert = convert;
    vm.activate = activate;

    activate();

    ///////////////////////////////////////////////////////////////////////////

    function activate() {
      vm.kts = 0;
      vm.ms = 0;
    }

    function convert(inputField) {
      switch (inputField) {
        case 'ms':
          var tmpKts = vm.ms * ms2knt;
          vm.kts = Math.round(tmpKts * 10) / 10;
          break;
        case 'kts':
          var tmpMs = vm.kts * knt2ms;
          vm.ms = Math.round(tmpMs * 10) / 10;
          break;
        default:
          break;
      }
    }

  })

  .directive('selectOnClick', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.on('click', function () {
          if (!$window.getSelection().toString()) {
            // Required for mobile Safari
            this.setSelectionRange(0, this.value.length)
          }
        });
      }
    };
  }])

  .controller('AboutController', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  });
