var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"password",
    database:"mydb"
});
//insert client info
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO clients204(C_ID204, C_Name204, C_City204, C_Password204, C_MoneyOwed204) VALUES ('1477', 'Alexander Furlotte', 'Bedford', 'password', '10000') ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

//list all parts
  var sql = "SELECT * FROM `parts204`";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

//insert purchase order and check poNo is unique

  var sql = "INSERT INTO pos204(POs_PoNo204, POs_ClientCompID, POs_DateofPO, POs_Status) VALUES ('1244', '1244', 'January-25-2000', 'Good') ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  //insert line
  var sql = "INSERT INTO line204(L_PoNo204, L_LineNo204, L_PartNo204, L_QTY204, L_PriceOrdered204) VALUES ('1234', '1234', '1234', '4', '10.99') ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  //check if quantity and price pass rules

  //check client id

  //list POs given client id

  //list lines given PO number

});

