// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.game'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.today', {
      url: '/today',
      views: {
        'tab-today': {
          templateUrl: 'templates/tab-today.html',
          controller: 'TodayCtrl'
        }
      }
    })

    .state('tab.today-hey', {
      url: '/hey',
      views: {
        'tab-today': {
          templateUrl: 'templates/hey.html',
          controller: 'HeyCtrl'
        }
      }
    })

    .state('tab.game', {
      url: '/game',
      views: {
        'tab-game': {
          templateUrl: 'templates/tab-game.html',
          controller: 'GameCtrl'
        }
      }
    })

    .state('tab.game-bomb', {
      url: '/game_bomb',
      views: {
        'tab-game': {
          templateUrl: 'templates/game-detail.html',
          controller: 'GameBombCtrl'
        }
      }
    })

    .state('tab.game-attack-botl', {
      url: '/game_attack_botl',
      views: {
        'tab-game': {
          templateUrl: 'templates/game-detail.html',
          controller: 'GameAttackBotlCtrl'
        }
      }
    })

    .state('tab.game-go-market', {
      url: '/game_go_market',
      views: {
        'tab-game': {
          templateUrl: 'templates/game-detail.html',
          controller: 'GameGoMarketCtrl'
        }
      }
    })

    .state('tab.game-good-korean', {
      url: '/game_good_korean',
      views: {
        'tab-game': {
          templateUrl: 'templates/game-detail.html',
          controller: 'GameGoodKoreanCtrl'
        }
      }
    })

    .state('tab.game-mr-song', {
      url: '/game_mr_song',
      views: {
        'tab-game': {
          templateUrl: 'templates/game-detail.html',
          controller: 'GameMrSongCtrl'
        }
      }
    })

    .state('tab.game-spin', {
      url: '/game_spin',
      views: {
        'tab-game': {
          templateUrl: 'templates/game-detail.html',
          controller: 'GameSpinCtrl'
        }
      }
    })

    .state('tab.game-world-sing', {
      url: '/game_world_sing',
      views: {
        'tab-game': {
          templateUrl: 'templates/game-detail.html',
          controller: 'GameWorldSingCtrl'
        }
      }
    })

    .state('tab.recipe', {
      url: '/recipe',
      views: {
        'tab-recipe': {
          templateUrl: 'templates/tab-recipe.html',
          controller: 'RecipeCtrl'
        }
      }
    })

    .state('tab.setting', {
      url: '/setting',
      views: {
        'tab-setting': {
          templateUrl: 'templates/tab-setting.html',
          controller: 'SettingCtrl'
        }
      }
    })

    .state('tab.setting-capacity', {
      url: '/setting_capacity',
      views: {
        'tab-setting': {
          templateUrl: 'templates/setting-capacity.html',
          controller: 'SettingCapacityCtrl'
        }
      }
    })

    .state('tab.setting-team', {
      url: '/setting_team',
      views: {
        'tab-setting': {
          templateUrl: 'templates/setting-team.html',
          controller: 'SettingTeamCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/today');

});
