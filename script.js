// Created a function to add all the inputs of a table
function Add(){
var arr = document.getElementsByName('number');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('div').innerHTML ="Result:"+""+tot;
    }

    // Created a function to delete rows
    function Delete() {
  document.getElementById("tb").deleteRow(0);
}
