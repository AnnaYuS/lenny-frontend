'use strict';

/**
 * @ngdoc overview
 * @name lenny
 * @description
 * # lenny
 *
 * Main module of the application.
 */
'use strict';

angular.module('lennyApp', ['ui.router', 'ngResource', 'ui.select', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      // route for the home page
      .state('app', {
        url:'/',
        views: {
          'sidebar': {
            templateUrl : 'views/sidebar.html',
            controller  : 'SidebarController'
          },
          'content': {
            templateUrl : 'views/home.html'
            //controller  : 'HomeController'
          },
          'footer': {
            templateUrl : 'views/footer.html'
          }
        }

      })




    //route for the explore page
      .state('app.explore', {
        url:'explore',
        views: {
          'content@': {
            templateUrl : 'views/explore.html',
            controller  : 'ExploreController'
          }
        }
      })

      .state('app.category', {
        url:'explore/?:categoryId',
        views: {
          'content@': {
            templateUrl : 'views/explore.html',
            controller  : 'CategoryController'
          }
        }
      })


      .state('app.path', {
      url: 'explore/:id',
      views: {
        'content@': {
          templateUrl : 'views/path.html',
          controller  : 'PathController'
        }
      }
    })

      .state('app.add_path', {
        url: 'add_path',
        views: {
          'content@': {
            templateUrl : 'views/add_path.html',
            controller  : 'AddPathController'
          }
        }
      });



    $urlRouterProvider.otherwise('/');
  })
;
