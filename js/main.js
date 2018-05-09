var btnOpenMenu,
		mainMenu,
		mainMenuItem,
		btnCloseMenu,
		menuDecorLine,
		menuTl;

$(document).ready(function ($) {
	btnOpenMenu = $('.btnOpenMenu');
	btnCloseMenu = $('.btnCloseMenu');
	mainMenu = $('.mainMenu');
	mainMenuTitle = $('.menu_list_title');
	menuDecorLine = $('.menu_decor_line');
	menuTl = new TimelineMax({paused: true});
});

$(window).on('load', function () {
	menuAnimFunc();
});

var menuAnimFunc = () => {
	menuTl
		.set(mainMenu, {className: '+=active_mod'})
		.set(menuDecorLine, {transformOrigin: "100% 100%"})
		.fromTo(menuDecorLine, 0.25, {
			x: "-100%",
		}, {
			x: "0%",
			opacity: 1,
			ease: Power1.easeOut
		})
		.staggerFromTo(mainMenuTitle, .3, {
			x: -50,
			opacity: 0,
			ease: Back.easeOut.config(1)
		}, {
			x: 0,
			opacity: 1
		}, .2)
		.set(btnCloseMenu, {className: '-=close_menu_mod'})


	btnOpenMenu.on('click', () => {
		if(!menuTl.isActive()) {
			menuTl.play();
		}
	});

	btnCloseMenu.on('click', () => {
		if(!menuTl.isActive()) {
			menuTl.reverse();
		}
	});

	

};