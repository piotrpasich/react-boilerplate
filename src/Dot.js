import React from 'react'

class Dot extends React.Component {
  static contextTypes = {
    loop: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
      color: props.color,
      top: 200,
      left: 300,
      angle: 0
    }

    this.onClick = this.onClick.bind(this);
    document.addEventListener('mousemove', this.onMouseUpdate.bind(this), false);
    document.addEventListener('mouseenter', this.onMouseUpdate.bind(this), false);
  }

  componentDidMount() {
    this.context.loop.subscribe(this.update);
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update);
  }

  update() {
    // tick logic
  };

  onMouseUpdate(e) {
    this.mouseX = e.pageX
    this.mouseY = e.pageY
  }

  onClick() {
    this.setState({'color': 'red'})
  }

  move() {
    const multiplier = 2;
    const mouseX = this.mouseX
    const mouseY = this.mouseY
    const { top, left} = this.state
    const deltaY = mouseY - top
    const deltaX =  mouseX - left
    const angle = parseInt(-Math.atan2(deltaY, deltaX) * (180 / Math.PI))

    const moveX = parseInt(Math.sin(angle) * multiplier)
    const moveY = parseInt(Math.cos(angle) * multiplier)
    console.log(angle)
    // console.log(top, left, mouseX, mouseY, tanAlfa, moveX, moveY)


    this.setState({
      top: mouseY - 10,
      left: mouseX - 10,
      angle: angle,
      mouseY: mouseY,
      moveY: moveY
    })
  }

  render() {
    const { color, top, left, angle, mouseY, moveY } = this.state

    const divStyle = {
      background: color,
      position: 'absolute',
      width: '20px',
      height: '20px',
      borderRadius: '20px',
      display: 'block',
      top: top + 'px',
      left: left + 'px'
    };

    return (
      <div style={divStyle} onClick={this.onClick}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{angle}:{top}:{mouseY}:{moveY}
      </div>
    )
  }
}

export default Dot