'use strict'
app.controller('eventsCtrl',['$scope', function($scope){
	
	$scope.events = {
		posts: [
			{
			 title: 'Free pizza at meetings',
			 upvotes: 15, 
			 comments: []
			},
			{
			 title: 'Yoga at your workplace',
			 upvotes: 9,
			 comments: []
			},
			{
			 title: 'Retrofit my life',
			 upvotes: 7,
			 comments: []
			},
			{
			 title: 'Sing Lady Gaga\'s "Bad Romance" halfway through meetings',
			 upvotes: 4,
			 comments: [],
			}
		]
	};
	$scope.upvote = function(index){
		console.log($scope.events.posts.length)
		// console.log(index);
		for(var i = 0; i < $scope.events.posts.length; i++){
			// console.log($scope.events.posts)
			if(index == i){
				// console.log($scope.events.posts[i]);
				$scope.events.posts[i].upvotes += 1;
			}
		}
		// post.upvotes = this.events.upvotes;
		// post.upvotes += 1;
	}

}]);