require("regenerator-runtime/runtime");
require('core-js');

import React from 'react';
let ReactDOM = require('react-dom')
import MyTable from './my-table';


async function fetchData() {
 // fetch data here
 let response = await fetch('https://api.covidtracking.com/v1/states/ca/current.json');
 let data = await response.json();
 console.log(data);
 return data;
}

function processData(data) {
  let { state, negative} = data;
  let stateData = {state, negative};
  return stateData;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { covidData: null };
  }
  
  componentDidMount() {
    this.updateData();
  }
  
  async updateData() {
    try {
      let data = await fetchData();
      console.log(data);
      this.setState({ covidData: processData(data) });
    
    } catch (err) {
      console.error(err);
    }
  }
  
  render() {
    
      return (
        <div>
          <h3>Covid Stats</h3>
          <div>State of California</div>
          <MyTable covidData={this.state.covidData}/>
        </div>
      );
    
  }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));

