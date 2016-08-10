

$(document).ready(function() {
		makeGrid(16);
		$(".square").mouseenter(function(){
			$(this).css("background-color",'white');
		});
		$("#clear").on("click", clear);
		$("#new").on('click', newGrid);

});

function makeGrid(sizeGrid) {
	var size = 1000/sizeGrid;
	for(var x = 0; x < sizeGrid; x++) {
        for(var y = 0; y < sizeGrid; y++) {
            var square = $("<div class='square'></div>");
        square.appendTo("#sketch");
        square.height(1000/(sizeGrid+1));
    	square.width(1000/(sizeGrid+1));   
        }
    }

}

function clear() {
	$(".square").css('background-color','black');
	$(".square").mouseenter(function(){
			$(this).css("background-color",'white');
		});
}

function newGrid() {
	$(".square").remove();
	var sizeGrid = parseInt(prompt("Enter size of Sketch (1-46):",16),10);
	if (sizeGrid > 0 && sizeGrid < 47) {
		makeGrid(sizeGrid);
		$(".square").mouseenter(function(){
			$(this).css("background-color",'white');
		});
	}
	else { 
		alert('This was not a valid input.')
	}
}
