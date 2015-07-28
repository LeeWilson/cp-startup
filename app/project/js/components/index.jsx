
var React = require('react');
var Framework = require('cp-framework');
//var Events = require('../constants/constants').EventTypes;

//var Async = Framework.Mixin.Async;
//var ConsoleLog = require('../mixin/consoleLogMixin');

var {
  AppCanvas
  } = Framework;

var {
  Classable,
  } = Framework.Mixin;

var Index = React.createClass({

    mixins: [Classable],

    getInitialState: function () {
      return { };
    },

    componentWillMount: function () {
    },

    componentDidMount: function () {

      var asyncData = {
          scriptName: 'Audit.CustomerHit',
          args: [
            { 'browser'   : 'data.browser' },  	// NvarChar(255) : is required
            { 'version'   : 'data.version' }, 	// NvarChar(50)  : is required
            { 'url'       :  'data.url' }, 		  // NvarChar(450) : is required
            { 'ipAddress' :  'data.url' }, 		  // NvarChar(20)  : is required
            { 'isMobile'  :  'data.isMobile' }, // bit           : is required
            { 'brand'     :  'data.brand' } 	  // NvarChar(20)  : is required
          ]
      };

     // Async.callAsync(asyncData, this.success);

    },

    componentWillUnmount: function () {

    },

    render: function () {
      var {
        className,
         ...other
       } = this.props;


      return (
        <AppCanvas predefinedLayout={0}>
         My Index
        </AppCanvas>
      );
    }
,
success: function (data){
  console.log(data);
}
  })
  ;

module.exports = Index;
