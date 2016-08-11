app.factory('suggestions', [function() {
	var demoSuggestions = {
		posts: [
			{
			 title: 'Free pizza at meetings',
			 upvotes: 15, 
			 comments: [],
			 id: 0

			},
			{
			 title: 'Yoga at your workplace',
			 upvotes: 9,
			 comments: [],
			 id: 1
			},
			{
			 title: 'Retrofit my life',
			 upvotes: 7,
			 comments: [],
			 id: 2
			},
			{
			 title: 'Sing Lady Gaga\'s "Bad Romance" halfway through meetings',
			 upvotes: 4,
			 comments: [],
			 id: 3
			}
			]
		

	};
	return demoSuggestions;
}]);
