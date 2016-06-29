angular.module('starter.controllers', [])

  .controller('ConverterController', function ($scope) {
    var vm = this;
    var mps2knt = 1.9438444924574;
    var knt2ms = 0.514444444;
    var mps2kph = 3.6;
    var mph2mps = 0.44704;

    vm.mps = null;
    vm.bft = null;
    vm.kts = null;
    vm.kph = null;
    vm.mph = null;
    vm.description = {  //http://planetcalc.com/384/
      0: 'Calm',
      1: 'Light air',
      2: 'Light breeze',
      3: 'Gentle breeze',
      4: 'Breeze',
      5: 'Fresh breeze',
      6: 'Strong breeze',
      7: 'Near gale',
      8: 'Gale',
      9: 'Strong gale',
      10: 'Storm',
      11: 'Voilent storm',
      12: 'Huricane'
    };

    vm.convert = convert;
    vm.getDescription = getDescription;
    vm.activate = activate;

    activate();

    ///////////////////////////////////////////////////////////////////////////

    function activate() {
      vm.mps = 0;
      vm.bft = 0;
      vm.kts = 0;
      vm.kph = 0;
      vm.mph = 0;
    }

    function convert(inputField) {
      switch (inputField) {
        case 'mps':
          var tmpMps = stringToNumber(vm.mps);

          vm.kts = getKts(tmpMps);
          vm.bft = getBeaufort(tmpMps);
          vm.mph = getMph(tmpMps);
          vm.kph = getKph(tmpMps);
          break;
        case 'bft':
          var tmpBft = stringToNumber(vm.bft);
          var tmpMps = getMpsFromBeaufort(tmpBft);

          vm.mps = Math.round(tmpMps * 10) / 10;
          vm.kts = getKts(tmpMps);
          vm.mph = getMph(tmpMps);
          vm.kph = getKph(tmpMps);
          break;
        case 'kts':
          var tmpKts = stringToNumber(vm.kts);
          var tmpMps = tmpKts * knt2ms;

          vm.mps = getMps(tmpMps);
          vm.bft = getBeaufort(tmpMps);
          vm.mph = getMph(tmpMps);
          vm.kph = getKph(tmpMps);
          break;
        case 'kph':
          var tmpKph = stringToNumber(vm.kph);
          var tmpMps = tmpKph / mps2kph;

          vm.mps = getMps(tmpMps);
          vm.bft = getBeaufort(tmpMps);
          vm.kts = getKts(tmpMps);
          vm.mph = getMph(tmpMps);
          break;
        case 'mph':
          var tmpMph = stringToNumber(vm.mph);
          var tmpMps = tmpMph * mph2mps;

          vm.mps = getMps(tmpMps);
          vm.bft = getBeaufort(tmpMps);
          vm.kts = getKts(tmpMps);
          vm.kph = getKph(tmpMps);
          break;
        default:
          break;
      }
    }

    function getBeaufort(mps) {
      var retVal = null;

      if (mps > 0 && mps < 0.3) {
        retVal = 0;
      } else if (mps >= 0.3 && mps < 1.5) {
        retVal = 1;
      } else if (mps >= 1.5 && mps < 3.3) {
        retVal = 2;
      } else if (mps >= 3.3 && mps < 5.5) {
        retVal = 3;
      } else if (mps >= 5.5 && mps < 8.0) {
        retVal = 4;
      } else if (mps >= 8.0 && mps < 10.8) {
        retVal = 5;
      } else if (mps >= 10.8 && mps < 13.9) {
        retVal = 6;
      } else if (mps >= 13.9 && mps < 17.2) {
        retVal = 7;
      } else if (mps >= 17.2 && mps < 20.7) {
        retVal = 8;
      } else if (mps >= 20.7 && mps < 24.5) {
        retVal = 9;
      } else if (mps >= 24.5 && mps < 28.4) {
        retVal = 10;
      } else if (mps >= 28.4 && mps < 32.6) {
        retVal = 11;
      } else if (mps >= 32.6) {
        retVal = 12;
      } else {
        retVal = 0;
        if (mps !== 0) {
          console.log('Calculation of Beaufort failed, given mps: ' + mps);
        }
      }

      return retVal;
    }

    function getMpsFromBeaufort(bft) {
      var retVal = null;

      var bftNumber = Math.round(bft);

      switch (bftNumber) {
        case 0:
          retVal = roundOff((0 + 0.2) / 2);
          break;
        case 1:
          retVal = roundOff((0.3 + 1.5) / 2);

          break;
        case 2:
          retVal = roundOff((1.5 + 3.3) / 2);

          break;
        case 3:
          retVal = roundOff((3.3 + 5.5) / 2);

          break;
        case 4:
          retVal = roundOff((5.5 + 8) / 2);

          break;
        case 5:
          retVal = roundOff((8 + 10.8) / 2);

          break;
        case 6:
          retVal = roundOff((10.8 + 13.9) / 2);

          break;
        case 7:
          retVal = roundOff((13.9 + 17.2) / 2);

          break;
        case 8:
          retVal = roundOff((17.2 + 20.7) / 2);

          break;
        case 9:
          retVal = roundOff((20.7 + 24.5) / 2);

          break;
        case 10:
          retVal = roundOff((24.5 + 28.4) / 2);

          break;
        case 11:
          retVal = roundOff((28.4 + 32.6) / 2);
          break;
        case 12:
          retVal = 32;
          break;
        default:
          retVal = 64;
          break;
      }

      return retVal;
    }

    function getDescription() {
      return vm.description[vm.bft];
    }

    function stringToNumber(str) {
      var retVal = null;

      if (typeof(str) !== 'string') {
        return 0;
      }

      str = str.replace(',', '.');
      retVal = parseFloat(str);

      if (!retVal) {
        console.log('Invalid input value, please specify a number');
      }

      return retVal || 0;
    }

    function getMps(mps) {
      return roundOff(mps);
    }

    function getMph(mps) {
      var mphTmp = mps / mph2mps;

      return roundOff(mphTmp);
    }

    function getKph(mps) {
      var tmpKph = mps * mps2kph;

      return roundOff(tmpKph);
    }

    function getKts(mps) {
      var tmpKts = mps * mps2knt;

      return roundOff(tmpKts);
    }

    function roundOff(number, decimals) {
      var retVal = null;

      if (decimals) {
        switch (decimals) {
          case 1:
            retVal = Math.round(number * 10) / 10;
            break;
          case 2:
            retVal = Math.round(number * 100) / 100;
            break;
          case 3:
            retVal = Math.round(number * 1000) / 1000;
            break;
          default:
            retVal = number;
            break;
        }
      } else {
        retVal = Math.round(number);
      }

      return retVal;
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

  .directive('clearingInput', [function () {
    // Usage:
    //  <clearing-input value="ClearingInputTestCtrl.someValue"></clearing-input>
    //
    return {
      restrict: 'E',
      templateUrl: 'templates/clearing_input.html',
      controller: 'ClearingInputController as ClearingInputCtrl',
      scope: {
        externalValue: "=",
        unit: "@",
        convertFunction: "&"
      },
      bindToController: true
    };
  }])
  .controller('ClearingInputController', ['$scope', '$timeout', function ($scope, $timeout) {
    var vm = this;
    var originalValue = null;

    vm.value = null;                //value bound to the view, externalValue is the one bound to the model using this directive, via this directive's attribute (bound scope)

    vm.onChange = onChange;
    vm.onFocus = onFocus;
    vm.onLeave = onLeave;
    vm.activate = activate;

    activate();

    function activate() {
      vm.value = vm.externalValue;
    }

    function onChange() {
      vm.externalValue = vm.value;

      $timeout(function () {
        vm.convertFunction();
      }, 0);
    }

    function onFocus() {
      originalValue = vm.value;
      vm.value = '';
    }

    function onLeave() {
      if (!vm.value) {
        vm.value = originalValue;
      } else {
        vm.externalValue = vm.value;
      }
    }

    $scope.$watch(function () {
      return vm.externalValue;
    }, function (value) {
      vm.value = value;
    });
  }])

  .controller('AboutController', function ($scope) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
  })
// With the new view caching in Ionic, Controllers are only called
// when they are recreated or on app start, instead of every page change.
// To listen for when this page is active (for example, to refresh data),
// listen for the $ionicView.enter event:
//
//$scope.$on('$ionicView.enter', function(e) {
//});
