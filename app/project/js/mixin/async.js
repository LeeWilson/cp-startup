
var React = require('react');
var dbas = require('cp-dbas');
var Async =require('cp-async')


var ToastStore = require('../stores/toastStore');

module.exports = {


  runAsync: function (thatAsyncData, successFunction, errorFunction) {
    /*
     //Expected format of async data
       asyncData= {
         scriptName: 'Campaign.GetAllLeadsForUser',
         args: [argument]
       }
     */
    if (dbas) {
      debugger;
      Async.AsyncFunctions.runAsync(thatAsyncData,successFunction,errorFunction);
    } else {
      dbas.get(asyncData.scriptName, function (err, data) {
        if (err === null) {
          var returnData;
          if (data.length === undefined) {
            returnData = $.extend(true, {}, data);
          } else {
            returnData = $.extend(true, [], data);
          }
          if(successFunction) {
            successFunction(returnData);
          }
        }
      });
    }
  }
};

