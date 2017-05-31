angular.module('ArtistsAlbums', ['ngRoute', 'ui.bootstrap', 'ngResource'])

    .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    
    .when('/artists', {
        templateUrl: 'views/artists.html',
        controller: 'ArtistsCtrl'
    })
    .when('/findArtist', {
        templateUrl: 'views/findArtists.html',
        controller: 'mainCtrl'
    })
    .when('/artists/:id', {
        templateUrl: 'views/artist_albums.html',
        controller: 'ArtistsAlbumsCtrl'
    })
    .when('/artistAlbum/:id/', {
        templateUrl: 'views/artist_album.html',
        controller: 'ArtistAlbumCtrl'
    })
    .otherwise({redirectTo: '/artists'})
}]);
