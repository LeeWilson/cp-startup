
var React = require('react');
var Framework = require('cp-framework');
//var Events = require('../constants/constants').EventTypes;

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
         Hello world!
        </AppCanvas>
      );
    }
  })
  ;

module.exports = Index;
