 // TODO: provide initial 10x10 grid on start?

 
 $(function(){

    // Define variables
    let table = $("#pixel_canvas");
    const submit = $("#submit_btn");
    const toggle = $("#toggle-btn");
    let chooseColor=$("#colorPicker");
    // let row = $("#input_height").val();
    // let column = $("#input_width").val();   
    
    // have an initial grid on load
    makeGrid();

    // When size is submitted by the user, call makeGrid()
    $("#sizePicker").submit(function(event){
    // Prevents default submit to server and page reloading   
        event.preventDefault();
        makeGrid();
    });
    
    // Make grid function
    function makeGrid() {
    
      let row = $("#input_height").val();
      let column = $("#input_width").val();
    // Clear previous grid
        table.empty(); 
    
    // Select size input
        //create the rows
        for(let i=0; i<row; i++){
            table.append("<tr></tr>");
        };
        //create the columns
        for(let j=0; j<column; j++){
            table.children().append("<td></td>");
        };
    };
    
    // color a cell
    table.on("click", "td", function(){
        let changeColor=chooseColor.val();
        $(this).css("background-color", changeColor);
    });
    
    // remove color from cell on right click
    table.on("contextmenu", "td", function(e){
        e.preventDefault();
        $(this).css("background-color", "#ffffff");
    });

    // drag to draw

    let isDown = false;

    //mousedown
    table.on("mousedown", function() {
            isDown = true;
    });
    //  released
    table.on("mouseup", function() {
            isDown = false;
    });
    table.on("mouseleave", function(){
    isDown = false;
    });
    //drag
    table.on("mousemove", "td", function() {
        if (isDown) {
            $(this).css("background-color",chooseColor.val()); 
        }
    });

    
    
});