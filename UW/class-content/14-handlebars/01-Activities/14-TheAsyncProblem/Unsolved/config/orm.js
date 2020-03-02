var connection = require("../config/connection.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol, func) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(
      queryString,
      [tableInput, colToSearch, valOfCol],
      (err, res) => {
        if (err) throw err;
        func(res);
      }
    );
  }
};

module.exports = orm;
