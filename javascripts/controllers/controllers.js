angular.module("ArtistsAlbums")


.controller('mainCtrl', ['$scope', '$http','getAllArtists', function($scope, $http, getAllArtists){
  
    $scope.pageSize = 10;
    $scope.currentPage = 1;
    
    $scope.switcher = 2;
    
    $scope.setSwitcher = function(a){
        $scope.switcher = a;
    }
    
    getAllArtists.then(function(data){
         $scope.artists = data;
     });
    
}])


.controller('ArtistsCtrl', ['$scope', '$http', 'getAllArtists', function($scope, $http, getAllArtists){
    
    getAllArtists.then(function(data){
         $scope.artists = data;
     });
}])


.controller('ArtistsAlbumsCtrl', ['$scope', '$http' ,'$routeParams', function($scope, $http, $routeParams){
    $http.get('https://jsonplaceholder.typicode.com/photos?albumId='+$routeParams.id).then(function(data){
        $scope.artistsAlbums = data;
    });
}])


.controller('ArtistAlbumCtrl', ['$scope', '$http' ,'$routeParams', function($scope, $http, $routeParams){
    $http.get('https://jsonplaceholder.typicode.com/photos/'+$routeParams.id).then(function(data){
        $scope.artistAlbumPhoto = data;
    });
    
}])


.controller('ReviewController', ['$scope', 'reviewService', function($scope, reviewService){
    
    $scope.reviews = [
        {
            stars: 5,
            email: "johny@gmail.com",
            body: "The good feedback"
        },
        {
            stars: 2,
            email: "jimmy@jimmy.com",
            body: "The bad feedback"
        }
    ];
    
    
    $scope.addReview = (review) => {
        if(reviewService.checkFeedback(review)){
            $scope.reviews.push(review);
        }
        
        $scope.feedback = {};
    }
    
}])



