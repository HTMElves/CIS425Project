// ADD CREDENTIALS HERE. DO NOT MAKE COMMITS WITH YOUR CREDENTIALS. IT WILL BE PERMENANT PUBLIC RECORD
var user = ""
var passwd = ""


function calculateTotal() {
    records = $('.data')

    var qty=0, price=0, totalPrice=0
    for (i=0; i<records.length;i++) {
         
        price = Number(records[i].children[2].innerHTML)
        qty = Number(records[i].children[3].children[0].value)
        totalPrice = price * qty
        console.log(price, qty, totalPrice)
    }

 
    // for (i=0; i<quantities.length; i++) {
    //     totalQty += Number(quantities[i].value)
    // }


    
    // totalQty += Number($('#qty0').val())
    totalPrice += Number($('#cost0').html())
    
    // console.log(totalQty, totalPrice)
}

function requestData() {

let sqlStmt, whereClause = ""

if (user != "" && passwd != "") {

sqlStmt = "SELECT Name, Description, Cost FROM ProductService";

//whereClause = " WHERE Sup_ID = 2";
// whereClause = " WHERE Sup_ID = " + "1";

sqlStmt = sqlStmt

MySql.Execute(
    "sql.wpc-is.online",  // remote host
    user,           // username
    passwd,           // password
    "db_test_TeamB04",   // database name

    sqlStmt,                   // SQL statement
    function(data) {          // callback function

        var count = 1
        var rName, rCost, selectdropDown, trclass
        for (i=0; i<data.Result.length;i++) {
           selectdropDown = "<select class='qty' id='qty"+i+"'>" + 
            "<option value= 0>0</option>"+
            "<option value= 1>1</option>"+
            "<option value= 2>2</option>"+
            "<option value= 3>3</option>"+
            "<option value= 4>4</option>"+
            "</select>";
            rName = JSON.stringify(data.Result[i].Name).replace(/\"/g, "");
            rCost = JSON.stringify(data.Result[i].Cost).replace(/\"/g, "");
            rDescription = JSON.stringify(data.Result[i].Description).replace(/\"/g, "")
            trclass = "data"

        $('#table').append("<tr class='"+trclass+"'>"+"<td>"+rName+"</td>"+
        "<td class=description id='description"+i+"'>"+rDescription+"</td><td class='cost' id='cost"+i+"'>"+rCost+"</td><td>"+selectdropDown+"</td></tr>")
        count += 1
    }
    
    $('#table').append("<tr class='last'><td></td><td></td><td></td><td><button class='calculate' onclick='calculateTotal()'>Get Total</button></td></tr>")
        
        
    })
} // if creds are blank
else {
    console.log("Blank Credentials. Please edit data-form.js to add creds")
}
} //requestData








requestData()
    
