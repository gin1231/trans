angular.module('starter.controllers', [])

.controller('HeyCtrl', function($scope) {

})

.controller('TodayCtrl', function($scope, $ionicModal, $ionicPopup, $timeout, Alcohols) {


  $scope.selectedDegree = 0;
  $scope.drinkTypes = Alcohols.drinkTypes;
  var allDrinks = Alcohols.drinks;
  $scope.drinkTypeChanged = function(index) {
    $scope.drinkType = $scope.drinkTypes[index];
    $scope.drinks = allDrinks[$scope.drinkType.name];
  };
  var init = (function() {
    $scope.drinkTypeChanged(0);
  })();

  $scope.capacity = Alcohols.capacity;

  if(!$scope.capacity) {
    $scope.modal = $ionicModal.fromTemplate('<div id="splash"></div>', {
      scope: $scope,
      animation: 'fade-in'
    });
    $scope.modal.show();
    $timeout(function() {
      $scope.modal.hide();
    }, 3000);
  }

  $scope.data = {};
  if(!$scope.capacity) {
    $timeout(function() {
      var myPopup = $ionicPopup.show({
        templateUrl: 'today-set-capacity.html',
        title: '술 하나를 선택하고 주량을 적어주세요!',
        subTitle: '설정에서 바꿀 수 있어요',
        scope: $scope,
        buttons: [
          {
            text: '<b>저장</b>',
            type: 'button-positive',
            onTap: function(e) {
              if ($scope.data.glass === undefined || $scope.data.bottle === undefined) {
                e.preventDefault();
              } else {
                var valBottle = [360*18.5, 750*15, 355*5, 750*6, 700*40, 750*13];
                var resBottle = $scope.data.bottle * valBottle[$scope.data.drinkType];

                var valGlass = [50*18.5, 50*15, 285*5, 200*6, 30*40, 100*13];
                var resGlass = $scope.data.glass * valGlass[$scope.data.drinkType];
                $scope.capacity = Alcohols.capacity = resBottle + resGlass;
              }
            }
          },
        ]
      });
    }, 3300);
  }

})

.controller('GameCtrl', function($scope, Games) {
  $scope.games = Games.all();
})

.controller('RecipeCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('recipe-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.showBigImage = function(name, image) {
    $scope.currentRecipe = {name: name, image: image};
    $scope.modal.show();
  };
  $scope.hideModal = function() {
    $scope.modal.hide();
  };
  $scope.recipes = [{
    name: '에너자이저', image: 'enerzizer'
  }, {
    name: '밀키스주', image: 'milkis'
  }, {
    name: '소백산맥주', image: 'sobeksanmaek'
  }, {
    name: '예거밤', image: 'jagerbomb'
  }, {
    name: '소원주', image: 'sojucoffee'
  }, {
    name: '스크류키스', image: 'screwkiss'
  }, {
    name: '선셋', image: 'sunset'
  }, {
    name: '버블 탱크', image: 'bubbletank'
  }, {
    name: '더티호', image: 'dirtyhoe'
  }, {
    name: '레드아이', image: 'redeye'
  }, {
    name: '우쭈쭈메로니', image: 'ujjujjumelony'
  }, {
    name: '칼리모초', image: 'calimocho'
  }];
})

.controller('SettingCtrl', function($scope, Settings) {
  $scope.menus = Settings.menus;
})

.controller('SettingTeamCtrl', function($scope, Settings) {
})

.controller('SettingCapacityCtrl', function($scope, $ionicPopup, $location, Alcohols) {
  $scope.drinkTypes = Alcohols.drinkTypes;

  $scope.capacity = Alcohols.capacity;
  $scope.data = {};
  $scope.saveCapacity = function() {
    if ($scope.data.glass === undefined || $scope.data.bottle === undefined) {
    } else {
      var valBottle = [360*18.5, 750*15, 355*5, 750*6, 700*40, 750*13];
      var resBottle = $scope.data.bottle * valBottle[$scope.data.drinkType];

      var valGlass = [50*18.5, 50*15, 285*5, 200*6, 30*40, 100*13];
      var resGlass = $scope.data.glass * valGlass[$scope.data.drinkType];
      $scope.capacity = Alcohols.capacity = resBottle + resGlass;
      alert('저장되었습니다.');
    }
  };
});
