module.exports = {
  database: process.env.MONGOLAB_URI || 'localhost',
  port : process.env.PORT || 8080
};