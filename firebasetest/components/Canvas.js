var React = require('react');
var ReactDOM = require('react-dom');

var Canvas = React.createClass({
  getInitialState: function() {
    return {
      carW: '2760',
      carH: '1840',
      divideBy: '80'
    }
  },
  getWinSize: function() {
    var winW = window.innerWidth;
    var winH = winW * 0.667;
    this.setState({carW: winW, carH: winH});
    console.log(this.state.carW)
  },
  componentWillMount: function(nextProps) {
  },
  componentDidMount: function () {
    paper.install(window);
    this.canvas = this.refs.car;
    paper.setup(this.canvas);
    this.url = './imgs/car.jpg';
    this.raster = new Raster({
      source: this.url,
      position: view.center
    });
    var img = new Image();
    img.src = this.url;
    img.onload=this.getWinSize;
    window.addEventListener('resize', function(){
      this.getWinSize();
    }.bind(this));

  }, 
  drawSquares: function() {
    var squareWidth = this.state.carW / this.state.divideBy;
    for (var k = 0; k < this.state.carW; k += squareWidth) {
      this.rectangle = new Rectangle(new Point(k, 0), new Size(squareWidth, squareWidth));
      this.shape = new Shape.Rectangle(this.rectangle);
      this.shape.fillColor = new Color(0, 0, 0);
    }
  },
  render: function() {
    var winW = document.getElementsByTagName('body')[0].width;
    return (
            <div ref='carWrap'>
              <canvas ref='car' className='car' style={{
                width: this.state.carW,
                height: this.state.carH
              }}></canvas>
            </div>
           );
  },
});

module.exports = Canvas;