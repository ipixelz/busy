var React = require("react"),
  Page = require("./Page");

module.exports = React.createClass({
  getInitialState: function() {
    return {key: Math.random()};
  },
  render: function(){
    var category = this.props.params.category;
    var sortBy = this.props.params.sortBy;
    var path = sortBy + '/' + category;
    return (
      <Page key={Math.random()} path={path} category={category} sortBy="created" />
    );
  }
});
