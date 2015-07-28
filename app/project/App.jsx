var React = require('react');
//var injectTapEventPlugin = require('react-tap-event-plugin');
// require('file?name=[path][name].[ext]&context=./test/MyPro/!./favicon.ico');
require('./less/scaffolding.less');

// Inject touch / tap handling for all components
//injectTapEventPlugin();

// reference the framework =>
var Framework = require('cp-framework');

// Material Design
var AppShell = Framework.AppShell;

// Pages
var Index = require('./js/components/index.jsx');

var App = React.createClass({

  render: function () {
    return (
      <AppShell>
        <Index />
      </AppShell>
    );
  }

});

React.render(<App />, document.body);
