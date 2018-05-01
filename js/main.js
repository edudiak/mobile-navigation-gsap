var btnOpenMenu,
		mainMenu,
		mainMenuItem,
		menuTl;

$(document).ready(function ($) {
	btnOpenMenu = $('.btnOpenMenu');
	mainMenu = $('.mainMenu');
	mainMenuTitle = $('.menu_list_title');
	menuTl = new TimelineMax();

	btnOpenMenu.on('click', () => {
		menuAnimFunc();
	});

});

var menuAnimFunc = () => {
	menuTl
		.set(mainMenu, {className: '+=active_mod'})
		.staggerFromTo(mainMenuTitle, .3, {
			x: -50,
			opacity: 0,
			ease: Expo.easeOut
		}, {
			x: 0,
			opacity: 1
		}, .2)
};