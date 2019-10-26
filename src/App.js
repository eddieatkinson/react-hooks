import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = props => {
  const [state, setState] = useState({
    selectedCharacter: 1,
    side: 'light',
    destroyed: false
  });

  const sideHandler = side => {
    this.setState({ side: side });
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    this.setState({ selectedCharacter: charId });
  };

  const destructionHandler = () => {
    this.setState({ destroyed: true });
  };

  let content = (
    <React.Fragment>
      <CharPicker
        side={this.state.side}
        selectedChar={this.state.selectedCharacter}
        onCharSelect={this.charSelectHandler}
      />
      <Character selectedChar={this.state.selectedCharacter} />
      <button onClick={this.sideHandler.bind(this, 'light')}>
        Light Side
      </button>
      <button onClick={this.sideHandler.bind(this, 'dark')}>Dark Side</button>
      {this.state.side === 'dark' && (
        <button onClick={this.destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  );

  if (this.state.destroyed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;
}

export default App;
