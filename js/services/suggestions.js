app.factory('suggestions', [function(){
	var demoSuggestions = {
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

	}
	return demoSuggestions;
}]);
