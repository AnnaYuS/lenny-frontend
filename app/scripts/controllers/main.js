'use strict';

/**
 * @ngdoc function
 * @name lenny.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of lenny
 */
angular.module('lennyApp')

.controller('SidebarController', ['$scope', 'categoryFactory', function ($scope, categoryFactory) {
    var resp = categoryFactory.query(function(){
      $scope.categories = resp;
    });

    $scope.hgt = { height: window.innerHeight + 'px' };
  }
])

.controller('ExploreController', ['$scope', 'pathFactory', function ($scope, pathFactory){
    var resp = pathFactory.query(function(){
      //console.log(resp.list);
      $scope.paths = resp;//.list;

    });
  } ])


  .controller('CategoryController', ['$scope', 'pathFactory','$state', '$stateParams', function ($scope, pathFactory, $state, $stateParams){

    var resp = pathFactory.query({categoryId: $stateParams.categoryId}, function() {
     $scope.paths = resp;
   });

  } ])

.controller('PathController', ['$scope', 'pathFactory', '$state', '$stateParams', function ($scope, pathFactory, $state, $stateParams){
    $scope.path = {};
    $scope.path = pathFactory.get({
      id: $stateParams.id
    })
      .$promise.then(
      function (response) {
        $scope.path = response;

      },
      function (response) {
        $scope.message = "Error: " + response.status + " " + response.statusText;
      }
    );

} ])

  .controller('AddPathController', ['$scope', 'categoryFactory', 'pathFactory', function ($scope, categoryFactory, pathFactory){

    var resp = categoryFactory.query(function(){
      $scope.categories = resp;
    });
      $scope.selectedCategories = { value: {}};

    $scope.path = new pathFactory({});

    $scope.save = function(){
      $scope.path.categories = [$scope.selectedCategories.value];
      $scope.path.$save(function(data){
          // success callback
          console.log(data);
          if(!data._id) {
            // error
            console.log("Error: " +JSON.stringify(data));
          } else {
            // success! todo: handling
          }
        }

      );



    }


  } ])


;
