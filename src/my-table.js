
let React = require('react')

export default class MyTable extends React.Component {
   
    render() {
       console.log(this.props);
      return(
        <table class="table table-bordered">
          <thead>
             <tr>
                 <th scope="col">State:</th>
                 <th scope="col">Total cases:</th>
                 <th scope="col">Currently hospitalized:</th>
                 <th scope="col">In ICU:</th>
                 <th scope="col">Negative:</th>
                 <th scope="col">Negative:</th>
      
             </tr>
          </thead>
          <tbody>
             <tr>
                <td>{this.props.covidData?.state}</td>
                <td>{this.props.covidData?.positive}</td>
                <td>{this.props.covidData?.hospitalizedCurrently}</td>
                <td>{this.props.covidData?.inIcuCurrently}</td>
                <td>{this.props.covidData?.negative}</td>
                <td>{this.props.covidData?.negative}</td>
             </tr>
          </tbody>
        </table>
      )
    }
 }