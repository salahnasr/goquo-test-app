import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
/* global _ */
import room from './test.json';
import RoomItem from './RoomItem';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


var _ = require('underscore');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      room: []
    };
    this.state = {
      groups: []
    };
    this.state = {
      result: []
    };
  }
  componentWillMount() {
    this.getroom();
    this.state.groups = _.groupBy(room, 'roomTypeLabel');

    for (var category in this.state.groups) {
      if (this.state.groups.hasOwnProperty(category)) {
        this.state.result.push(category);

        for (var order in room) {
          if (room[order].roomTypeLabel == category);

        }
      }
    }


  }
  getroom() {

    this.setState({
      room
    });
  }
  hasBreackfast(boo) {
    if (boo.groups.hasBreakfast)
      return "Breackfast";
    else
      return "No Breackfast";
  }
  bedtype(BT) {
    if (BT.groups.bedTypeLabel == "")
      return "no type provided"
    else
      return BT.groups.bedTypeLabel;
  }
  getCategory(category) {
    let _state = category;
    return _state;
  }
  render() {
    return (<div className="App" >
      <h1 > Welcome </h1>
      <div className="container">
        <h2></h2>
        <div className="card">
          <div className="card-body" style={{ textAlign: "left" }}>Container
            <table className="table table-bordered">
              <tbody>
                {this.state.result.map(category => <tr style={{ border: '1px solid #ddd', textAlign: "center",fontWeight:"bold" }} key={category.id}>{category}<td style={{ textAlign: "left" ,fontWeight:"normal "}}>{this.state.groups[category].map(groups => <p key={groups.id} style={{ height: "50px" }}>{this.bedtype({ groups })} - {this.hasBreackfast({ groups })}<hr></hr></p>)}</td>
                  <td style={{ textAlign: "left", height: "500px" }}>{this.state.groups[category].map(groups => <p style={{ height: "50px", width: "90px" }} key={groups.id}><span>{groups.price}</span><Button className="col-md-8 col-centered" variant="contained" color="primary"  >Action</Button></p>)}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
  }
}




export default App;