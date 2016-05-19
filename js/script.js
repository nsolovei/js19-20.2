$.getJSON('https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json', function(data){
		 var skills = [];
		 var names = [];
		 var friends = [];

		 //Массив скиллов отсортированных по алфавиту
		 for(var i = 0; i< data.length; i++){
		 	for(var j = 0; j<data[i].skills.length;j++){
		 		skills.push(data[i].skills[j].toLowerCase());
		 	}
		 }
		  skills = _.uniq(skills).sort();
		  console.log('Массив скиллов отсортированных по алфавиту', skills);
		 //Массив имен отсортированных по кол-ву друзей
		 var obj = {};
		 for(var i = 0; i<data.length; i++){
		 	obj[data[i].name] = data[i].friends.length;
		 }
		 var sortable= _.toPairs(obj);
		 sortable.sort(function(a, b) {return a[1] - b[1]});
		 sortable.reverse();
		 for (var i = 0; i<sortable.length;i++){
		 	names.push((sortable[i][0]));
		 }
		 console.log('Массив имен отсортированных по кол-ву друзей',names);

		 //массив друзей пользователей

		 for (var i = 0; i<data.length; i++){
		 		for(var j = 0; j<data[i].friends.length;j++){
		 			friends.push((data[i].friends[j].name));

		 		}

		 	}
		 friends = _.uniq(friends);
		 console.log('массив друзей пользователей', friends);

})
