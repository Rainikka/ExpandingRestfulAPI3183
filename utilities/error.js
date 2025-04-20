// function error(status, msg) {
//   var err = new Error(msg);
//   err.status = status;
//   return err;
// }

// module.exports = error;

module.exports = function (status, message) {
  let err = new Error(message);
  err.status = status;
  return err;
};
