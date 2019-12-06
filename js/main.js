let $btnOpenMenu,
		$mainMenu,
		$mainMenuItem,
		$btnCloseMenu,
		$menuDecorLine,
		menuTl;

$(document).ready(function ($) {
	$btnOpenMenu = $('.btnOpenMenu');
	$btnCloseMenu = $('.btnCloseMenu');
	$mainMenu = $('.mainMenu');
	$mainMenuTitle = $('.menu_list_link');
	$menuDecorLine = $('.menu_decor_line');
	menuTl = gsap.timeline({paused: true});
});

$(window).on('load', function () {
	menuAnimFunc();
});

const menuAnimFunc = () => {
	menuTl
		.set($mainMenu, {
			opacity: 1,
			pointerEvents: "auto"
		})
		.set($menuDecorLine, {transformOrigin: "100% 100%"})
		.fromTo($menuDecorLine, 0.25, {
			xPercent: -100,
		}, {
			xPercent: 0,
			opacity: 1,
			ease: Power1.easeOut
		})
		.staggerFromTo($mainMenuTitle, .3, {
			x: -50,
			opacity: 0,
			ease: Back.easeOut.config(1)
		}, {
			x: 0,
			opacity: 1
		}, .2)
		.to($btnCloseMenu, .1, {
			opacity: 1,
			pointerEvents: "auto",
			translateX: 0
		})

	$btnOpenMenu.on('click', () => {
		if(!menuTl.isActive()) {
			menuTl.play();
		}
	});

	$btnCloseMenu.on('click', () => {
		if(!menuTl.isActive()) {
			menuTl.reverse();
		}
	});

};