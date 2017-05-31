angular.module("ArtistsAlbums")

.directive('feedbackSection', function(){
    return {
        restrict: 'E',
        templateUrl: 'views/directives.templates/feedbackSection.html'
    }
})

.directive('albumDescription', function(){
    return {
        restrict: 'E',
        templateUrl: 'views/directives.templates/albumDescription.html'
    }
})


.directive('textToggle', [function(){
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            
            $(elem).click(function() {
                $(elem).closest('div').find('.lorem_text > span').slideToggle();
                $(elem).toggleClass('sign-down');
            });
        }
    }
    
}])

