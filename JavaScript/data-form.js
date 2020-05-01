function calculateTotal() {
    


}

function requestData() {

let sqlStmt, whereClause = "";
// ADD CREDENTIALS HERE
var user = ""
var passwd = ""

if (user != "" && passwd != "") {

sqlStmt = "SELECT Name, Cost FROM ProductService";

//whereClause = " WHERE Sup_ID = 2";
// whereClause = " WHERE Sup_ID = " + "1";

sqlStmt = sqlStmt;

MySql.Execute(
    "sql.wpc-is.online",  // remote host
    user,           // username
    passwd,           // password
    "db_test_TeamB04",   // database name

    sqlStmt,                   // SQL statement
    function(data) {          // callback function
        console.log("data parameter: ", data);
        // $('#table').html(data)
        // var dataAsString = JSON.stringify(data);
        
        // $('#table').html(dataAsString)
        console.log("Proceed? ", data.Success);
        var count = 1
        var rName, rCost, selectdropDown
        for (i=0; i<data.Result.length;i++) {
           selectdropDown = "<select class='qty' id='qty"+i+"'>" + 
            "<option value= 0>0</option>"+
            "<option value= 1>1</option>"+
            "<option value= 2>2</option>"+
            "<option value= 3>3</option>"+
            "<option value= 4>4</option>"+
            "</select>"

        if (count % 2 == 1) {
           rName = JSON.stringify(data.Result[i].Name).replace(/\"/g, "")
           rCost = JSON.stringify(data.Result[i].Cost).replace(/\"/g, "")
      

            $('#table').append("<tr class='odd'>"+"<td>"+rName+"</td><td class=cost id='cost"+i+"'>"+rCost+"</td><td>"+selectdropDown+"</td></tr>")
        }
        else {
            rName = JSON.stringify(data.Result[i].Name).replace(/\"/g, "")
            rCost = JSON.stringify(data.Result[i].Cost).replace(/\"/g, "")

            
            $('#table').append("<tr class='even'>"+"<td>"+rName+"</td><td class=cost id='cost"+i+"'>"+rCost+"</td><td>"+selectdropDown+"</td></tr>")
        }
        count += 1
    }
    
    $('#table').append("<tr class='last'><td></td><td></td><td><button class='calculate' onclick='calculateTotal()'>Get Total</button></td></tr>")
        
        
    });
} // if creds are blank
else {
    console.log("Blank Credentials. Please edit data-form.js to add creds")
}
} //requestData








requestData()
    
