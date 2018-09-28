import React from 'react';
import ReactDOM from 'react-dom';
import ScheduleContainer from './schedule'

class App extends React.Component {

  render() {
    return(
      <div>
        <ScheduleContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
