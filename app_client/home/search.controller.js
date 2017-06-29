(function () {

  angular
    .module('shareMarketApp')
    .controller('searchCtrl', search).service(searchService);

  function search ($scope,searchService) {
   $scope.shareValue = {shareValue:searchService};

  }
  
  var searchService=function($http,$scope){
	  var name = $scope;
	  return $http.get('api/locations?companyName=name');
	  
  }

})();