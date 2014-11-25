
var clearGrid = function () {
			$(".cell").removeClass("blue");	
		}	
		var prompt = function () {
			var squares = prompt("How many squares would you like per side?");
			$("#container").remove("div");
			return squares;
			
				$("button").on('click', function ()
