var orm = require("./config/orm.js");

var data = orm.selectWhere("parties", "party_type", "grown-up", data => {
  console.log(data);
});
