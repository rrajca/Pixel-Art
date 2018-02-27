// When size is submitted by the user, call makeGrid()

function makeGrid() {
    
    var inputHeight = $('#inputHeight').val();
    var inputWeight = $('#inputWeight').val();
    var table = $('#pixelCanvas');

    //creating rows
    for (var i = 0; i < inputHeight; i++) {
        table.append("<tr></tr>");
        //creating cols
        for (var y = 0; y < inputWeight; y++) {
            table.children().last().append("<td></td>");
        }
    };

    table.on("click", "td", function() {
        var colorInput = $('#colorPicker').val();
        $(this).attr("bgcolor", colorInput);
    });
}

var inputButton = $('input[type="submit"]');
inputButton.click(function(event) {
    event.preventDefault();
    makeGrid();
});