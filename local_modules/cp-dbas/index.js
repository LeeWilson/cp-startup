var allFiles = [
  'example'
];
var data = [];
var catalog = function() {
  var names = [];
  data.forEach( function(table) {
    names.push(table.name);
  });
  return names;
};
var findDataSync = function(name) {
  var rec = data.filter(function(r) {
    return r.name === name;
  });
  return (rec.length === 1) ? rec[0].json : [];
};
var findData = function(name, callback) {
  var delay = Math.floor(Math.random() * (250)) + 250;
  setTimeout( function() {
    var res = findDataSync(name);
    callback(null, res);
  }, delay);
};
var loadFiles = function(options) {
  data = [];
  var files = (options && options.files) || allFiles;
  try {
    var filename, fullpath, datafile, jsondata, nodename;
    files.forEach( function(file) {
      nodename = file;
      datafile = require('./data/' + file + '.json');
      jsondata = datafile[nodename];
      data.push( { name:nodename, json:jsondata} );
    });
  } catch( e ) {
    console.log(e);
  }
};

loadFiles();

module.exports = loadFiles;
module.exports.catalog = catalog;
module.exports.get = findData;
module.exports.getSync = findDataSync;
