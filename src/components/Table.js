import {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
  render() {
    const { charactersData } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody charactersData={charactersData} />
      </table>
    );
  }
}

export default Table;
