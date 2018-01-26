import React from 'react'
import Dot from './Dot';
import {Loop, Stage, World} from 'react-game-kit';

class App extends React.Component {
  render() {
    return (
      <Loop>
        <Stage>
          <World>
            <Dot color="blue"/>
          </World>
        </Stage>
      </Loop>
    )
  }
}

export default App