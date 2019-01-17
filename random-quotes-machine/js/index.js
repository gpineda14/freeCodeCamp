var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
var NewQuote = function (_React$Component) {_inherits(NewQuote, _React$Component);
  function NewQuote(props) {_classCallCheck(this, NewQuote);var _this = _possibleConstructorReturn(this, (NewQuote.__proto__ || Object.getPrototypeOf(NewQuote)).call(this,
    props));
    _this.props.evl.bind(_this);return _this;
  }_createClass(NewQuote, [{ key: "render", value: function render()
    {
      return (
        React.createElement("button", { className: "newQuoteBtn", id:
            "new-quote", onClick: this.props.evl }, "New Quote"));



    } }]);return NewQuote;}(React.Component);var


TweetButton = function (_React$Component2) {_inherits(TweetButton, _React$Component2);function TweetButton() {_classCallCheck(this, TweetButton);return _possibleConstructorReturn(this, (TweetButton.__proto__ || Object.getPrototypeOf(TweetButton)).apply(this, arguments));}_createClass(TweetButton, [{ key: "render", value: function render()
    {
      return (
        React.createElement("a", { className: "tweetBtn", id: "tweet-quote", href: "https://twitter.com/intent/tweet" },
          React.createElement("i", { className: "fa fa-twitter-square fa-3x" })));



    } }]);return TweetButton;}(React.Component);var


CardHeader = function (_React$Component3) {_inherits(CardHeader, _React$Component3);function CardHeader() {_classCallCheck(this, CardHeader);return _possibleConstructorReturn(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));}_createClass(CardHeader, [{ key: "render", value: function render()
    {
      return (
        React.createElement("header", { className: "card-header" }));


    } }]);return CardHeader;}(React.Component);var


CardBody = function (_React$Component4) {_inherits(CardBody, _React$Component4);function CardBody() {_classCallCheck(this, CardBody);return _possibleConstructorReturn(this, (CardBody.__proto__ || Object.getPrototypeOf(CardBody)).apply(this, arguments));}_createClass(CardBody, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "card-body" },
          React.createElement("h2", { className: "author-text", id: "author" }, this.props.author),
          React.createElement("p", { className: "quote-text", id: "text" }, this.props.quote),
          React.createElement("div", { className: "button-container" },
            React.createElement(NewQuote, { evl: this.props.evl }),
            React.createElement(TweetButton, null))));



    } }]);return CardBody;}(React.Component);var


Card = function (_React$Component5) {_inherits(Card, _React$Component5);
  function Card(props) {_classCallCheck(this, Card);var _this5 = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this,
    props));_this5.

















    componentDidMount = function () {
      _this5.fetchData();
    };_this5.

    newQuote = function () {
      _this5.fetchData();
    };_this5.state = { img: '', author: '', quote: '' };return _this5;}_createClass(Card, [{ key: "fetchData", value: function fetchData() {var _this6 = this;var url = 'https://favqs.com/api/qotd';fetch(url).then(function (response) {return response.json();}).then(function (json) {_this6.setState({ author: json.quote.author, quote: json.quote.body });});} }, { key: "render", value: function render()

    {
      return (
        React.createElement("article", { id: "quote-box", className: "quote-box" },
          React.createElement(CardHeader, { img: this.state.img }),
          React.createElement(CardBody, { author: this.state.author, quote: this.state.quote, evl: this.newQuote })));


    } }]);return Card;}(React.Component);


ReactDOM.render(
React.createElement(Card, null),
document.getElementById('main'));