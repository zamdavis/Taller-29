import {Component} from 'react';
import Table from './Table';

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Cloud',
        job: 'Merc',
      },
      {
        name: 'Barret',
        job: 'Bar Owner',
      },
      {
        name: 'Tifa',
        job: 'Bartender',
      },
      {
        name: 'Aerith',
        job: 'Flower girl',
      },
    ];

    return (
      <div className="container">
        <Table charactersData={characters} />
      </div>
    );
  }
}

export default App;
