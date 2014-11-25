/**
 * @author Nord Anderson
 */
$(document).ready(function() { 
		var squares = 16;
		
		var makeGrid = function(x) {
		$("body").prepend("<div id='container'></div>");
			var container = $("#container");
			container.prepend("")
			var squareSize = 960 / x;
			container.append("<button id = 'clear'>CLEAR SCREEN</button>");
			container.append("<button id = 'fade'>Try the Fade</button>");
				
				for (i = 1; i <= x; i++) {
					container.append("<div class='row " + i + "'></div>");
					var row = $(".row");
					for (j = 1; j <= x; j++) {
						row.filter("." + i).append("<div class='cell " + j + "'></div>");
					}
				}
			
			$(".cell").height(squareSize).width(squareSize).addClass("black");
			$(".row").height(squareSize).width(squareSize * x).css({"display": "inline-block"});
			
			};
		
		makeGrid(16);
		draw();
		
		$("body").on('click', "#clear", function () {
			$(".cell").removeClass("white");
			squares = prompt("How many squares would you like per side?");
			$("#container").remove("div");
			makeGrid(squares);
			draw();
		});	
		
		$("button").click(function() { 
    		$(".cell").unbind(); 
});
		
		$("body").on('click', "#fade", function () {
			$(".cell").removeClass("white");
			squares = prompt("How many squares would you like per side?");
			$("#container").remove("div");
			makeGrid(squares);
			fade();
		});
		
		function draw() {
			$(".cell").on('mouseenter', function() {
				$(this).addClass("white");	
			});
		}
		function fade() {
			$(".cell").on('mouseenter', function() {
				var currentOpacity = $(this).css('opacity');
				if (currentOpacity > 0) {
					$(this).css('opacity', currentOpacity - 0.1);
				}
			});
		}
});
