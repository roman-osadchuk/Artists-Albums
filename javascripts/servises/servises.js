angular.module("ArtistsAlbums")

.service('reviewService', function(){
    
    return{
        checkFeedback: function(data){
            
            const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            if(data === undefined){
                return false;
            }else if(data.stars == '' && data.email == '' && data.body == ''){
                return false
            }else if(data.stars != '' && emailRegEx.test(data.email) && data.body != ''){
                return true
            }
              
        } 
    }
})

.factory('getAllArtists', function($http){
    return $http.get('https://jsonplaceholder.typicode.com/albums');
});
