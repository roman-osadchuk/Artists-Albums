angular.module("ArtistsAlbums")

.filter('startFrom', function(){
    return function(data, start){
        return data.slice(start);
    }
})
