
let React = require('react')

export default class MyTable extends React.Component {
   
    render() {
       console.log(this.props);
      return(
        <table>
          <thead>
             <tr>
                 <th>State:</th>
                 <th>Negative:</th>
      
             </tr>
          </thead>
          <tbody>
             <tr>
                <td>{this.props.covidData?.state}</td>
                <td>{this.props.covidData?.negative}</td>
             </tr>
          </tbody>
        </table>
      )
    }
 }