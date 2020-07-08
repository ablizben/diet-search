$(document).ready(function(){
	
	// initialize select for materialize framework
    $('select').material_select();
    
    // smooth scroll to anchor function
    function scrollTo(id) {
	    $('html,body').animate({scrollTop: $('#' + id).offset().top},'fast');
	}
    
    // info for restrictions
    var restrictions = {
		'Dairy-Free': {
			name: 'Dairy-Free',
			icon: '<i class="fas fa-cheese-swiss"></i>',
			recipe: '&health=dairy-free',
			menu: ''
		},
		'Egg-Free': {
			name: 'Egg-Free',
			icon: '<i class="fas fa-egg"></i>',
			recipe: '&health=egg-free',
			menu: ''
		},
		'Gluten-Free': {
			name: 'Gluten-Free',
			icon: '<i class="fas fa-bread-loaf"></i>',
			recipe: '&health=gluten-free',
			menu: ''
		},
		'Keto': {
			name: 'Keto',
			icon: '<i class="fas fa-meat"></i>',
			recipe: '&health=keto-friendly',
			menu: ''
		},
		'Paleo': {
			name: 'Paleo',
			icon: '<i class="fas fa-apple-alt"></i>',
			recipe: '&health=paleo',
			menu: ''
		},
		'Peanut-Free': {
			name: 'Peanut-Free',
			icon: '<i class="fas fa-acorn"></i>',
			recipe: '&health=peanut-free',
			menu: ''
		},
		'Pescatarian': {
			name: 'Pescatarian',
			icon: '<i class="fas fa-fish-cooked"></i>',
			recipe: '&health=pescatarian',
			menu: ''
		},
		'Pork-Free': {
			name: 'Pork-Free',
			icon: '<i class="fas fa-pig"></i>',
			recipe: '&health=pork-free',
			menu: ''
		},
		'Red Meat-Free': {
			name: 'Red Meat-Free',
			icon: '<i class="fas fa-steak"></i>',
			recipe: '&health=red-meat-free',
			menu: ''
		},
		'Shellfish-Free': {
			name: 'Shellfish-Free',
			icon: '<i class="fas fa-fish"></i>',
			recipe: '&health=shellfish-free',
			menu: ''
		},
		'Soy-Free': {
			name: 'Soy-Free',
			icon: '<i class="fas fa-seedling"></i>',
			recipe: '&health=soy-free',
			menu: ''
		},
		'Tree-Nut-Free': {
			name: 'Tree-Nut-Free',
			icon: '<i class="fas fa-tree-alt"></i>',
			recipe: '&health=tree-nut-free',
			menu: ''
		},
		'Vegan': {
			name: 'Vegan',
			icon: '<i class="fas fa-carrot"></i>',
			recipe: '&health=vegan',
			menu: ''
		},
		'Vegetarian': {
			name: 'Vegetarian',
			icon: '<i class="fas fa-salad"></i>',
			recipe: '&health=vegetarian',
			menu: ''
		},
		'Wheat-Free': {
			name: 'Wheat-Free',
			icon: '<i class="fas fa-wheat"></i>',
			recipe: '&health=wheat-free',
			menu: ''
		}
    };
    console.log('Restrictions Object: ', restrictions);
    
    // create content section   
	var content = $('<section>').attr('id', 'content');
	var contentContainer = $('<div>').addClass('container');
    
/*
    // create recipe section
    var recipes = $('<section>').attr('id', 'recipes').addClass('row');
    var recipeHeading = $('<div>').addClass('col s12').html('<h2>In the Kitchen</h2>');
    var recipeCarousel = $('<div>').addClass('owl-carousel owl-theme col s12');
	
	// recipe array (would be pulled from API)
	var recipeArray = ['Recipe 1', 'Recipe 2', 'Recipe 3', 'Recipe 4', 'Recipe 5', 'Recipe 6'];
	
	recipeArray.forEach(function(i) {
		
		// create card
		var recipeCard = $('<div>').addClass('card');
		
		// create card image items
		var recipeImageContainer = $('<div>').addClass('card-image');
		var recipeImage = $('<div>').addClass('image');
		recipeImage.attr('style', 'background-image: url(http://placehold.it/400x300)');		
		var recipeButton = $('<a>').addClass('btn-floating btn-large halfway-fab deep-orange lighten-2');
		recipeButton.attr('target', '_blank').attr('href', '#');
		recipeButton.html('<i class="fal fa-clipboard-list"></i>');
		
		// create card content items
		var recipeContent = $('<div>').addClass('card-content');		
		var recipeSource = $('<p>').attr('id', 'recipe-source');
		recipeSource.text('Source Name');		
		var recipeName = $('<h3>').attr('id', 'recipe-name');
		recipeName.text('Name of the Recipe');		
		var recipeIcons = $('<div>').attr('id', 'icons');
		recipeIcons.html('<i class="fas fa-cheese-swiss"></i><i class="fas fa-bread-loaf"></i><i class="fas fa-acorn"></i><i class="fas fa-carrot"></i>');		

		// append all card items
		recipeImageContainer.append(recipeImage, recipeButton);
		recipeContent.append(recipeSource, recipeName, recipeIcons);
		recipeCard.append(recipeImageContainer, recipeContent);		
		recipeCarousel.append(recipeCard);
		
	});
*/
    
/*
    // create menus section
    var menus = $('<section>').attr('id', 'menus').addClass('row');
    var menusHeading = $('<div>').addClass('col s12').html('<h2>Venture Out</h2>');
    var menusCarousel = $('<div>').addClass('owl-carousel owl-theme col s12');
	
	// menus array (would be pulled from API)
	var menusArray = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5', 'Menu 6'];
    
    menusArray.forEach(function(i) {
		
		// create card
		var menusCard = $('<div>').addClass('card');
		
		// create card image items
		var menusImageContainer = $('<div>').addClass('card-image');
		var menusImage = $('<div>').addClass('image');
		menusImage.attr('style', 'background-image: url(http://placehold.it/400x300)');		
		var menusButton = $('<a>').addClass('btn-floating btn-large halfway-fab cyan');
		menusButton.html('<i class="fal fa-map-marker-alt"></i>');
		
		// create card content items
		var menusContent = $('<div>').addClass('card-content');		
		var menusRestaurant = $('<p>').attr('id', 'restaurant');
		menusRestaurant.text('Restaurant Name');		
		var menusName = $('<h3>').attr('id', 'menu-name');
		menusName.text('Name of the Menu Item');		
		var menusIcons = $('<div>').attr('id', 'icons');
		menusIcons.html('<i class="fas fa-cheese-swiss"></i><i class="fas fa-bread-loaf"></i><i class="fas fa-acorn"></i><i class="fas fa-carrot"></i>');		

		// append all card items
		menusImageContainer.append(menusImage, menusButton);
		menusContent.append(menusRestaurant, menusName, menusIcons);
		menusCard.append(menusImageContainer, menusContent);		
		menusCarousel.append(menusCard);
		
		// on menu item button click...
	    menusButton.on('click', function(event) {
		   event.preventDefault();
		   $('#map').attr('style', 'display: block');
		   
		   // placeholder until we get the map stuff here
		   $('#map').attr('style', 'height: 400px; background: #ccc;');
		   
		   scrollTo('map');
	    });
		
	});
*/
	
	// create map container
	var map = $('<section>').attr('id', 'map');	
    
    // create footer   
	var footer = $('<footer>').attr('id', 'container');
	footer.html('<div class="row"><div class="col s12"><h2>Didn’t find what you’re looking for?</h2><a href="#hero" class="btn-large deep-orange lighten-2">Search Again</a></div></div>');

/*
    // pull recipe API
    var recipeURL = "https://api.edamam.com/search?app_id=d544ae9f&app_key=c5ad09c117643ee56f64724e79d6a318&to=12&q=salad&health=vegan&health=peanut-free";

	$.ajax({
	  url: recipeURL,
	  method: "GET"
	}).then(function(response) {
		console.log('Recipe API Response: ', response);
	});
	
	// pull menu API
	var menuURL = "https://api.spoonacular.com/food/menuItems/search?apiKey=e0a3536a362b46d38d50a5b045964f5a&number=12&query=sandwich&intolerances=gluten";

	$.ajax({
	  url: menuURL,
	  method: "GET"
	}).then(function(response) {
		console.log('Menu API Response: ', response);
	});
	
	// pull food joke API
	var jokeURL = "https://api.spoonacular.com/food/trivia/random?apiKey=e0a3536a362b46d38d50a5b045964f5a";

	$.ajax({
	  url: jokeURL,
	  method: "GET"
	}).then(function(response) {
		console.log('Food Joke API Response: ', response.text);
	});
*/
	
	// on form submit...
	$('#hero form').on('submit', function(event) {
		event.preventDefault();	 
		
		var restrictionChoices = $('#restrictions input').val();
		var restrictionArray = restrictionChoices.split(', ');
		
		console.log(restrictionChoices);
		console.log(restrictionArray);
		
		var iconString = ''
		var recipeQueryString = '';
		var menuQueryString = '';
		
		restrictionArray.forEach(function(i) {
			
			iconString = iconString.concat(restrictions[i].icon);
			recipeQueryString = recipeQueryString.concat(restrictions[i].recipe);
			menuQueryString = menuQueryString.concat(restrictions[i].menu);
			console.log(iconString);
			console.log(recipeQueryString);
			console.log(menuQueryString);
			
		});
		
		// create recipe section
	    var recipes = $('<section>').attr('id', 'recipes').addClass('row');
	    var recipeHeading = $('<div>').addClass('col s12').html('<h2>In the Kitchen</h2>');
	    var recipeCarousel = $('<div>').addClass('owl-carousel owl-theme col s12');
		
		// recipe array (would be pulled from API)
		var recipeArray = ['Recipe 1', 'Recipe 2', 'Recipe 3', 'Recipe 4', 'Recipe 5', 'Recipe 6'];
		
		recipeArray.forEach(function(i) {
			
			// create card
			var recipeCard = $('<div>').addClass('card');
			
			// create card image items
			var recipeImageContainer = $('<div>').addClass('card-image');
			var recipeImage = $('<div>').addClass('image');
			recipeImage.attr('style', 'background-image: url(http://placehold.it/400x300)');		
			var recipeButton = $('<a>').addClass('btn-floating btn-large halfway-fab deep-orange lighten-2');
			recipeButton.attr('target', '_blank').attr('href', '#');
			recipeButton.html('<i class="fal fa-clipboard-list"></i>');
			
			// create card content items
			var recipeContent = $('<div>').addClass('card-content');		
			var recipeSource = $('<p>').attr('id', 'recipe-source');
			recipeSource.text('Source Name');		
			var recipeName = $('<h3>').attr('id', 'recipe-name');
			recipeName.text('Name of the Recipe');		
			var recipeIcons = $('<div>').attr('id', 'icons');
			recipeIcons.html(iconString);		
	
			// append all card items
			recipeImageContainer.append(recipeImage, recipeButton);
			recipeContent.append(recipeSource, recipeName, recipeIcons);
			recipeCard.append(recipeImageContainer, recipeContent);		
			recipeCarousel.append(recipeCard);
			
		});
		
		// append content section
		content.append(contentContainer);
		$('body').append(content);

		// append recipe section
		recipes.append(recipeHeading, recipeCarousel);
		contentContainer.append(recipes);
	
		// recipe API carousel
		$('#recipes .owl-carousel').owlCarousel({
			margin: 20,
			responsiveClass:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        575:{
		            items:2
		        },
		        767:{
		            items:3
		        },
		        1199:{
		            items:4,
		            loop:true
		        }
		    },
			loop: true,
			nav:true,
			navText: ['',''],
			dots: false,
			lazyLoad: false,
			autoplay: false,
			navSpeed: 500
		});
		
		// create menus section
	    var menus = $('<section>').attr('id', 'menus').addClass('row');
	    var menusHeading = $('<div>').addClass('col s12').html('<h2>Venture Out</h2>');
	    var menusCarousel = $('<div>').addClass('owl-carousel owl-theme col s12');
		
		// menus array (would be pulled from API)
		var menusArray = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5', 'Menu 6'];
	    
	    menusArray.forEach(function(i) {
			
			// create card
			var menusCard = $('<div>').addClass('card');
			
			// create card image items
			var menusImageContainer = $('<div>').addClass('card-image');
			var menusImage = $('<div>').addClass('image');
			menusImage.attr('style', 'background-image: url(http://placehold.it/400x300)');		
			var menusButton = $('<a>').addClass('btn-floating btn-large halfway-fab cyan');
			menusButton.html('<i class="fal fa-map-marker-alt"></i>');
			
			// create card content items
			var menusContent = $('<div>').addClass('card-content');		
			var menusRestaurant = $('<p>').attr('id', 'restaurant');
			menusRestaurant.text('Restaurant Name');		
			var menusName = $('<h3>').attr('id', 'menu-name');
			menusName.text('Name of the Menu Item');		
			var menusIcons = $('<div>').attr('id', 'icons');
			menusIcons.html(iconString);		
	
			// append all card items
			menusImageContainer.append(menusImage, menusButton);
			menusContent.append(menusRestaurant, menusName, menusIcons);
			menusCard.append(menusImageContainer, menusContent);		
			menusCarousel.append(menusCard);
			
			// on menu item button click...
		    menusButton.on('click', function(event) {
			   event.preventDefault();
			   $('#map').attr('style', 'display: block');
			   
			   // placeholder until we get the map stuff here
			   $('#map').attr('style', 'height: 400px; background: #ccc;');
			   
			   scrollTo('map');
		    });
			
		});
		
		// append menus section
		menus.append(menusHeading, menusCarousel);
		contentContainer.append(menus);
		
		// menu API carousel
		$('#menus .owl-carousel').owlCarousel({
			margin: 20,
			responsiveClass:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        575:{
		            items:2
		        },
		        767:{
		            items:3
		        },
		        1199:{
		            items:4,
		            loop:true
		        }
		    },
			loop: true,
			nav:true,
			navText: ['',''],
			dots: false,
			lazyLoad: false,
			autoplay: false,
			navSpeed: 500
		});
		
		$('body').append(map, footer);	
		$('#map').attr('style', 'display: none');    
	       
		scrollTo('content'); 
		
		// on footer button click...
	    $('footer a.btn-large').on('click', function(event) {
		   event.preventDefault();
		   scrollTo('hero');
	    });
	    
    });

});
