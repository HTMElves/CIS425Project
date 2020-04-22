
var usernme, paswd
usernme = '' // enter username here -- Please ERASE before any commits
paswd = ''   // enter password here -- Please ERASE before any commits

if (usernme == '' || paswd == '') {
    console.log('Blank credential: Please edit testdb.js file with your credentials. However, please do NOT commit copy to github. It is PUBLIC.')
}
else {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "sql.wpc-is.online",
        user: usernme,
        password: paswd,
        database: "db_test_dnkinkea" //replace with teamdb
    }); // create connection

    con.connect(function(err) {
        if (err) throw err;
            console.log("Connected!");
            con.query('SELECT * FROM Suppliers;', function(err, result, feilds) {
            console.log(result);
    }); // connect

    });
      
}
    
                
            


