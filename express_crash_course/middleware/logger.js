const moment = require("moment");

// creates a middleware, 'next' is always last
const logger = (req, res, next) => {
    console.log(
      `${req.protocol}://${req.get("host")}${
        req.originalUrl
      }: ${moment().format()}`    // gets the exact time / date of when the page was requested
    );
    next();
  };

  module.exports = logger;